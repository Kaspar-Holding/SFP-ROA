# Generated by Django 4.1.2 on 2022-10-30 17:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0014_update1'),
    ]

    operations = [
        migrations.AlterField(
            model_name='riskplanning',
            name='RP_Product_Taken',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
    ]
