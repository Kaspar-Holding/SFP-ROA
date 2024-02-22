from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.combining import OrTrigger
from apscheduler.triggers.cron import CronTrigger
import os
from datetime import datetime
import pytz
import uuid

def database_backups():
    os.system("pg_dump SFP > /home/Kaspar/db_backups/Daily Backup (%s) - SFP Backup  %s.sql"%(datetime.now().strftime('%H:%M:%S %d-%B-%Y'),uuid.uuid4()))
    # Database is backedup


def start():
    scheduler = BackgroundScheduler()
    dailyBackup = OrTrigger([CronTrigger(hour=7, minute=4, timezone="Africa/Johannesburg")])
    scheduler.add_job(database_backups, trigger=dailyBackup, id="1")
    scheduler.start()
