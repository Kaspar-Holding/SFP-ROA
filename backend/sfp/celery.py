# django_celery/celery.py

from __future__ import absolute_import, unicode_literals
import os

from celery import Celery
from django.conf import settings
from celery.schedules import crontab

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'sfp.settings')

app = Celery('sfp')
app.conf.enable_utc = False

app.conf.update(timezone = 'Africa/Johannesburg')

# app.config_from_envvar(settings.CELERY_BROKER_URL)
app.config_from_object(settings, namespace='CELERY')


# Celery Beat Settings
app.conf.beat_schedule = {
    'daily_event_task' : {
        'task' : 'tasks.tasks.events',
        'schedule' : crontab(minute=0, hour='8')
    },
    'daily_db_backup' : {
        'task' : 'tasks.tasks.upload_backup',
        'schedule' : crontab(minute=0, hour='*/6')
    },
    'delete_db_backup' : {
        'task' : 'tasks.tasks.delete_backup',
        'schedule' : crontab(minute=0, hour='*/6')
    },
}

app.conf.task_routes = {
    'tasks.tasks.*': {'queue': 'sfp_worker'},
}


app.autodiscover_tasks()

@app.task(bind=True)
def debug(self):
    print(f'Request: {self.request!r}')