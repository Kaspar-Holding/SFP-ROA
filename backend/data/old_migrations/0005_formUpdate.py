# Generated by Django 4.1.2 on 2022-10-25 05:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0004_added_partial_password'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='form',
            name='form_type',
        ),
    ]