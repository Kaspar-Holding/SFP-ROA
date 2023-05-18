# Generated by Django 4.1.2 on 2023-05-18 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0092_stip_loss_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_BuildCombined_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_BusInt_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Fire_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_OC_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec10_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec11_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec12_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec13_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec14_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec15_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec16_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec17_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec18_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec19_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec20_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec21_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec5_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec6_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec7_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec8_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_Sec9_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_SecD_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_SecE_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_SecG_AddComments',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
        migrations.AlterField(
            model_name='stip_loss',
            name='General_LossAmount',
            field=models.CharField(blank=True, default='', max_length=2000),
        ),
        migrations.AlterField(
            model_name='stip_loss',
            name='General_LossInsurer',
            field=models.CharField(blank=True, default='', max_length=2000),
        ),
        migrations.AlterField(
            model_name='stip_loss',
            name='General_LossYear',
            field=models.CharField(blank=True, default='', max_length=2000),
        ),
        migrations.AlterField(
            model_name='stip_loss',
            name='General_TypeOfLoss',
            field=models.CharField(blank=True, default='', max_length=2000),
        ),
    ]
