# Generated by Django 4.1.2 on 2022-10-31 06:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0034_update2_1_2'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assurancerisk',
            name='clientIdNumber',
        ),
    ]