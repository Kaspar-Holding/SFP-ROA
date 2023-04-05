# Generated by Django 4.1.2 on 2023-04-05 08:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0081_ip_producttaken_remove_investmentplanning_ip_itp_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='AR_ProductTaken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advisorId', models.IntegerField(default=0)),
                ('formId', models.IntegerField(default=0)),
                ('ProductTaken', models.IntegerField(default=0)),
                ('ProductProvider', models.CharField(blank=True, default='', max_length=500)),
                ('PolicyNumber', models.CharField(blank=True, default='', max_length=500)),
                ('ProductName', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremium', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremiumFrequency', models.IntegerField(default=1)),
                ('ProductPattern', models.CharField(blank=True, default='', max_length=500)),
                ('ProductEscalation', models.CharField(blank=True, default='', max_length=500)),
                ('ProductContractingParty', models.CharField(blank=True, default='', max_length=500)),
                ('ProductLivesAssured', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremiumPayer', models.CharField(blank=True, default='', max_length=500)),
                ('Product1stYearCommission', models.CharField(blank=True, default='', max_length=500)),
                ('Product2ndYearCommission', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_1', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount1', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_2', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount2', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_3', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount3', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_4', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount4', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_5', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount5', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_6', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount6', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_7', models.CharField(blank=True, default='', max_length=500)),
                ('BenDesc_CoverAmount7', models.CharField(blank=True, default='', max_length=500)),
                ('ProductReasons', models.CharField(blank=True, default='', max_length=500)),
                ('ProductMaterialAspects', models.CharField(blank=True, default='', max_length=500)),
                ('ProductDetails', models.CharField(blank=True, default='', max_length=500)),
                ('ProductBriefSummary', models.CharField(blank=True, default='', max_length=500)),
                ('Cessionaries', models.CharField(blank=True, default='', max_length=500)),
                ('InformationExplained', models.CharField(blank=True, default='', max_length=500)),
                ('status', models.IntegerField(default=1)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_1',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_2',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_3',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_4',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_5',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_6',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_7',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount1',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount2',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount3',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount4',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount5',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount6',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_BenDesc_CoverAmount7',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_Cessionaries',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_InformationExplained',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_PolicyNumber',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_Product1stYearCommission',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_Product2ndYearCommission',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductBriefSummary',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductContractingParty',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductDetails',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductEscalation',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductLivesAssured',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductMaterialAspects',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductName',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductPattern',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductPremium',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductPremiumFrequency',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductPremiumPayer',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductProvider',
        ),
        migrations.RemoveField(
            model_name='assurancerisk',
            name='AR_ProductReasons',
        ),
    ]
