# Generated by Django 4.1.2 on 2022-10-25 06:11

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0005_formUpdate'),
    ]

    operations = [
        migrations.RenameField(
            model_name='form',
            old_name='advisor_id',
            new_name='advisorId',
        ),
    ]
