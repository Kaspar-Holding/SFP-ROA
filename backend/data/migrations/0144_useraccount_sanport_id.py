# Generated by Django 4.1.2 on 2023-11-24 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0143_remove_user_profile_flag'),
    ]

    operations = [
        migrations.AddField(
            model_name='useraccount',
            name='sanport_id',
            field=models.BigIntegerField(default=0),
        ),
    ]