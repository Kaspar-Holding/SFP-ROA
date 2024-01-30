import uuid
from celery import shared_task
from celery.utils.log import get_task_logger
logger = get_task_logger(__name__)
import os
from django.core.management.base import BaseCommand
from django.db import connections
from datetime import datetime, timedelta
from azure.storage.blob import BlobServiceClient, BlobClient, ContainerClient
import subprocess
from notifications.models import Notifications, CalendarEvents
from notifications.serializers import NotificationsSerializer
from logs.models import Log
from logs.serializers import LogSerializer, LogKPIsSerializer, LogContentSerializer 
from data.models import UserAccount, user_profile
from django.db.models import Q
from django.conf import settings
class DB_Backup_Command(BaseCommand):
    help = 'Backup PostgreSQL database and upload to Azure Blob'

    def handle(self, *args, **options):
        admin_ids = []
        users = UserAccount.objects.filter(is_superuser=True)
        db_name = connections['default'].settings_dict['NAME']
        db_user = connections['default'].settings_dict['USER']
        os.environ['PGPASSWORD'] = connections['default'].settings_dict['PASSWORD']
        db_password = connections['default'].settings_dict['PASSWORD']
        backup_dir = ''
        timestamp = datetime.now().strftime('%Y%m%d%H%M%S')
        backup_file = f'{backup_dir}/{db_name}_backup_{timestamp}_{uuid.uuid4()}.sql'
        log_user_data = []
        for user in users:
            title = f"Database Backup Status"
            notificationData = {
                "account" : user.pk,
                "notificationType" : 4,
                
                "user" : user.pk,
                "title" : title,
                "message" : f"Database backup and uploading.",
                "status" : False,
            }
            serializer = NotificationsSerializer(data=notificationData)
            if serializer.is_valid():
                serializer.create(serializer.validated_data)
            else:
                logger.info(serializer.errors)
            logData = {
                "account" : user.pk,
                "log_type": 5,
                "log_name" : f"Database backup task {uuid.uuid4()}.",
            }
            logSerializer = LogSerializer(data=logData)
            if logSerializer.is_valid():
                log = logSerializer.create(logSerializer.validated_data)
                logger.info(f"Log created for database backup task {log.pk}")
                logId = log.pk
                log_user_data.append({
                    "log_id" : logId,
                    "user": user.pk
                })
        # Perform backup using pg_dump
        subprocess.run(['pg_dump', '-h', 'localhost', '-U', db_user, '-d', db_name, '-F', 'c', '-f', backup_file])
        del os.environ['PGPASSWORD']

        self.stdout.write(self.style.SUCCESS(f'Successfully created backup: {backup_file}'))

        for user in log_user_data:    
            logContent = {
                "account" : user['user'],
                "log" : user['log_id'],
                "log_type" : 1,
                "log_description" : f"Database backup created at {backup_file}",
            }
            logContentSerializer = LogContentSerializer(data=logContent)
            if logContentSerializer.is_valid():
                logContentSerializer.create(logContentSerializer.validated_data)
            else:
                logger.info(logContentSerializer.errors)


        # Upload to Azure Blob
        blob_service_client = BlobServiceClient(account_url=f"https://{settings.AZURE_ACCOUNT_NAME}.blob.core.windows.net/", credential=settings.AZURE_ACCOUNT_KEY)
        container_client = blob_service_client.get_container_client(settings.AZURE_CONTAINER)
        blob_client = container_client.get_blob_client(f'backups/{os.path.basename(backup_file)}')

        for user in log_user_data:
            logContent = {
                "account" : user['user'],
                "log" : user['log_id'],
                "log_type" : 2,
                "log_description" : f"Connection made to backup server.",
            }
            logContentSerializer = LogContentSerializer(data=logContent)
            if logContentSerializer.is_valid():
                logContentSerializer.create(logContentSerializer.validated_data)
            else:
                logger.info(logContentSerializer.errors)
            logContent = {
                "account" : user['user'],
                "log" : user['log_id'],
                "log_type" : 3,
                "log_description" : f"Uploading the backup {backup_file} to backup server.",
            }
            logContentSerializer = LogContentSerializer(data=logContent)
            if logContentSerializer.is_valid():
                logContentSerializer.create(logContentSerializer.validated_data)
            else:
                logger.info(logContentSerializer.errors)
        try:
            with open(backup_file, "rb") as data:
                blob_client.upload_blob(data)
            for user in log_user_data:
                logContent = {
                    "account" : user['user'],
                    "log" : user['log_id'],
                    "log_type" : 4,
                    "log_description" : f"Backup {backup_file} uploaded to backup server.",
                }
                logContentSerializer = LogContentSerializer(data=logContent)
                if logContentSerializer.is_valid():
                    logContentSerializer.create(logContentSerializer.validated_data)
                else:
                    logger.info(logContentSerializer.errors)

            os.remove(backup_file)

            self.stdout.write(self.style.SUCCESS('Backup uploaded to Azure Blob'))
            for user in log_user_data:
                notificationData = {
                    "account" : user['user'],
                    "notificationType" : 4,
                    
                    
                    "log": "",
                    "user" : user['user'],
                    "title" : title,
                    "message" : f"Database backup and uploading to server completed.",
                    "status" : False,
                }
                serializer = NotificationsSerializer(data=notificationData)
                if serializer.is_valid():
                    serializer.create(serializer.validated_data)
                else:
                    logger.info(serializer.errors)
        except:
            for user in log_user_data:
                logContent = {
                    "account" : user['user'],
                    "log" : user['log_id'],
                    "log_type" : 4,
                    "log_description" : f"Backup {backup_file} uploading to backup server failed.",
                }
                logContentSerializer = LogContentSerializer(data=logContent)
                if logContentSerializer.is_valid():
                    logContentSerializer.create(logContentSerializer.validated_data)
                else:
                    logger.info(logContentSerializer.errors)
            print()


        blob_client.close()

        for user in log_user_data:
            logContent = {
                "account" : user['user'],
                "log" : user['log_id'],
                "log_type" : 6,
                "log_description" : f"Connection closed to backup server.",
            }
            logContentSerializer = LogContentSerializer(data=logContent)
            if logContentSerializer.is_valid():
                logContentSerializer.create(logContentSerializer.validated_data)
            else:
                logger.info(logContentSerializer.errors)

            title = f"Database Backup Status"
            notificationData = {
                "account" : user['user'],
                "notificationType" : 4,
                
                
                "log": user['log_id'],
                "user" : user['log_id'],
                "title" : title,
                "message" : f"Database backup and uploading to your backup server completed.",
                "status" : False,
            }
            serializer = NotificationsSerializer(data=notificationData)
            if serializer.is_valid():
                serializer.create(serializer.validated_data)
            else:
                logger.info(serializer.errors)
            log = Log.objects.get(id=user['log_id'], account=user['user'])
            logData = {
                'status' : 1,
                "closed_at": datetime.now()
            }
            logSerializer = LogSerializer(instance=log,data=logData, partial=True)
            if logSerializer.is_valid():
                logSerializer.save()
            else:
                logger.info(logSerializer.errors)

class Delete_DB_Backup(BaseCommand):
    help = 'Delete backups older than 15 days from Azure Blob'

    def handle(self, *args, **options):
        
        max_age_days = 30

        # Calculate the date threshold (one month ago)
        one_month_ago = datetime.utcnow() - timedelta(days=max_age_days)

        # Connect to Azure Blob
        blob_service_client = BlobServiceClient(account_url=f"https://{settings.AZURE_ACCOUNT_NAME}.blob.core.windows.net/", credential=settings.AZURE_ACCOUNT_KEY)
        container_client = blob_service_client.get_container_client(settings.AZURE_CONTAINER)
    

        # List objects in the Blob Container
        blob_list = container_client.list_blobs('backups/')
        
        # Iterate over the objects and delete those older than the threshold
        for blob in blob_list:
            if blob.last_modified < one_month_ago:
                # Delete the blob
                container_client.delete_blob(blob.name)
                self.stdout.write(self.style.SUCCESS(f'Deleted backup from Blob: {blob.name}'))
        

from django.core.management import call_command
@shared_task
def upload_backup():
    call_command(DB_Backup_Command())

@shared_task
def delete_backup():

    call_command(Delete_DB_Backup())

@shared_task
def events():
    events = CalendarEvents.objects.filter(start_time=datetime.today().date())
    for event in events:
        if "cut-off" in str(event.title).lower():
            users = UserAccount.objects.all()
            if "afp" in str(event.title).lower():
                users = users.filter(Q(email__icontains="sanlam")|Q(email__icontains="kaspar")|Q(email__icontains="yahoo")|Q(email__icontains="gmail"))
            if 'sfp' in str(event.title).lower():
                users = users.filter(Q(email__icontains="sfp")|Q(email__icontains="kaspar")|Q(email__icontains="yahoo")|Q(email__icontains="gmail"))
            for user in users:
                user_name = user.first_name + " " + user.last_name
                user_profile_data = user_profile.objects.filter(user=user.pk)
                if user_profile_data.exists():
                    user_profile_data = user_profile_data.first()
                    user_name = user_profile_data.Full_Name
                data = {
                    "title" : event.title,
                    "notificationType" : 2,
                    "account" : user.pk,
                    "message" : f"""<div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <h1 style="color: #333; margin-bottom: 20px;">📢 Important Announcement: {event.title}</h1>
                        <div style="background-color: #6AC7D2; color: #fff; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                            <p style="margin: 0;">Dear {user_name},</p>
                            <p style="margin: 0;">We would like to bring to your attention an important event: today marks the {event.title} Date. This date is a significant milestone in our project timeline and requires everyone's attention and cooperation to ensure its smooth execution.</p>
                        </div>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;"><strong>Event Details:</strong></p>
                        <ul style="color: #666; line-height: 1.6; margin-bottom: 15px;">
                            <li><strong>Title:</strong> {event.title}</li>
                            <li><strong>Date:</strong> {event.start_time.strftime('%d %b %Y')}</li>
                            <li><strong>End Date:</strong> {event.end_time.strftime('%d %b %Y')}</li>
                            <li><strong>Purpose:</strong> The {event.title} signifies the deadline for completing specific tasks, finalizing key deliverables, and preparing for the next phase of our project.</li>
                        </ul>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;"><strong>Actions Required:</strong></p>
                        <ol style="color: #666; line-height: 1.6; margin-bottom: 15px;">
                            <li>Completion of Pending Tasks: Ensure that all pending tasks assigned to you are completed by the {event.title}.</li>
                            <li>Quality Check: Perform a thorough quality check of your work to ensure accuracy and completeness.</li>
                            <li>Coordination: Coordinate with your team members to address any dependencies or issues that may affect the project timeline.</li>
                            <li>Documentation: Complete and update project documentation to reflect the current status and any changes made leading up to the {event.title}.</li>
                        </ol>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;"><strong>Importance:</strong></p>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Meeting the {event.title} is crucial for maintaining project momentum, meeting client expectations, and achieving project success. Your contribution and commitment to meeting this deadline are greatly appreciated and essential for the overall success of our project.</p>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;"><strong>Need Assistance?</strong></p>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">If you have any questions or require assistance regarding the {event.title} or related tasks, please don't hesitate to reach out to your project manager or team lead for guidance.</p>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Thank you for your attention to this matter, and let's work together to ensure a successful {event.title}!</p>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Best regards,<br>System Generated</p>

                    </div>"""
                }
                notificationSerializer = NotificationsSerializer(data=data)
                if notificationSerializer.is_valid():
                    notificationSerializer.create(notificationSerializer.validated_data)
                else:
                    print(notificationSerializer.errors)
        if "pay run" in str(event.title).lower() or "pay-run" in str(event.title).lower():
            users = UserAccount.objects.all()
            if "afp" in str(event.title).lower():
                users = users.filter(Q(email__icontains="sanlam")|Q(email__icontains="kaspar")|Q(email__icontains="yahoo")|Q(email__icontains="gmail"))
            if 'sfp' in str(event.title).lower():
                users = users.filter(Q(email__icontains="sfp")|Q(email__icontains="kaspar")|Q(email__icontains="yahoo")|Q(email__icontains="gmail"))
    
            for user in users:
                user_name = user.first_name + " " + user.last_name
                user_profile_data = user_profile.objects.filter(user=user.pk)
                if user_profile_data.exists():
                    user_profile_data = user_profile_data.first()
                    user_name = user_profile_data.Full_Name
                data = {
                    "title" : event.title,
                    "notificationType" : 2,
                    "account" : user.pk,
                    "message" : f"""
                        <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                            <h1 style="color: #333; margin-bottom: 20px;">💰 Pay Run Announcement 💵</h1>
                            <div style="background-color: #FFCC00; color: #333; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                                <p style="margin: 0;">Dear {user_name},</p>
                                <p style="margin: 0;">This is a friendly reminder that the next pay run is scheduled for today {event.start_time.strftime('%d %b %Y')}. Please ensure that all necessary paperwork and approvals are completed by today to avoid any delays in payment.</p>
                            </div>
                            <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">If you have any questions or concerns regarding the pay run, feel free to reach out to the HR department.</p>
                            <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Best regards,<br>System Generated</p>
                        </div>"""
                }
                notificationSerializer = NotificationsSerializer(data=data)
                if notificationSerializer.is_valid():
                    notificationSerializer.create(notificationSerializer.validated_data)
                else:
                    print(notificationSerializer.errors)
        if "birthday" in str(event.title).lower():
            users = UserAccount.objects.all()
            for user in users:
                user_name = user.first_name + " " + user.last_name
                user_profile_data = user_profile.objects.filter(user=user.pk)
                if user_profile_data.exists():
                    user_profile_data = user_profile_data.first()
                    user_name = user_profile_data.Full_Name
                data = {
                    "title" : event.title,
                    "notificationType" : 2,
                    "account" : user.pk,
                    "message" : f"""<div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #fff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
                        <h1 style="color: #333; margin-bottom: 20px;">Birthday ({event.title}) Celebration Announcement 🎂</h1>
                        <div style="background-color: #6AC7D2; color: #fff; padding: 15px; border-radius: 4px; margin-bottom: 20px;">
                            <p style="margin: 0;">Dear {user_name},</p>
                            <p style="margin: 0;">Please join us in wishing a very happy birthday to [Employee Name]! 🎈🎂 Let's make their day special with your warm wishes and greetings!</p>
                        </div>
                        <p style="color: #666; line-height: 1.6; margin-bottom: 15px;">Best regards,<br>System Generated</p>

                        
                    </div>"""
                }
                notificationSerializer = NotificationsSerializer(data=data)
                if notificationSerializer.is_valid():
                    notificationSerializer.create(notificationSerializer.validated_data)
                else:
                    print(notificationSerializer.errors)
            
    return True