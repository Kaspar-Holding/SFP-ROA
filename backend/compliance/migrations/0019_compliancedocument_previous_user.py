# Generated by Django 4.1.2 on 2023-09-08 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compliance', '0018_alter_gatekeeping_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='compliancedocument',
            name='previous_user',
            field=models.IntegerField(default=0),
        ),
    ]
