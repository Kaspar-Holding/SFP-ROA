# Generated by Django 4.1.2 on 2022-10-31 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0036_update2_1_4'),
    ]

    operations = [
        migrations.AddField(
            model_name='employeebenefits',
            name='EB_BusFReplace_AdminFee_Existing',
            field=models.CharField(default='', max_length=256),
        ),
        migrations.AddField(
            model_name='employeebenefits',
            name='EB_BusFReplace_AdminFee_Proposed',
            field=models.CharField(default='', max_length=256),
        ),
    ]