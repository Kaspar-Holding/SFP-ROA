# Generated by Django 4.1.2 on 2024-01-18 16:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0167_alter_user_profile_created_on_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user_profile',
            name='full_name',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]