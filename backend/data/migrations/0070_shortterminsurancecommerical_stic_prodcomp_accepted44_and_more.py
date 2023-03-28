# Generated by Django 4.1.2 on 2023-03-28 06:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0069_medical_sna_other'),
    ]

    operations = [
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_Accepted44',
            field=models.IntegerField(default='0'),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_CoverAmount44',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_ExistP_Excess44',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_ExistP_Premium44',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_RecommP_Excess44',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_RecommP_Premium44',
            field=models.CharField(blank=True, default='', max_length=50),
        ),
        migrations.AddField(
            model_name='shortterminsurancecommerical',
            name='STIC_ProdComp_Recommended44',
            field=models.IntegerField(default='0'),
        ),
    ]
