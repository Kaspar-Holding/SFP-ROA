# Generated by Django 4.1.2 on 2023-03-28 11:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0070_shortterminsurancecommerical_stic_prodcomp_accepted44_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='partial_password',
        ),
    ]
