# Generated by Django 4.1.2 on 2024-01-30 16:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0004_calendarevents'),
    ]

    operations = [
        migrations.AlterField(
            model_name='calendarevents',
            name='end_time',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='calendarevents',
            name='start_time',
            field=models.DateField(blank=True, null=True),
        ),
    ]