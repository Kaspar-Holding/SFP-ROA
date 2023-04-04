# Generated by Django 4.1.2 on 2023-04-04 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0080_rp_producttaken_bendesc_1_rp_producttaken_bendesc_2_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='IP_ProductTaken',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advisorId', models.IntegerField(default=0)),
                ('formId', models.IntegerField(default=0)),
                ('ProductTaken', models.IntegerField(default=1)),
                ('ProductProvider', models.CharField(blank=True, default='', max_length=500)),
                ('PolicyNumber', models.CharField(blank=True, default='', max_length=500)),
                ('ProductName', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremium', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremiumFrequency', models.IntegerField(default=1)),
                ('ProductEscalation', models.CharField(blank=True, default='', max_length=500)),
                ('ProductEAC', models.CharField(blank=True, default='', max_length=500)),
                ('ProductContractingParty', models.CharField(blank=True, default='', max_length=500)),
                ('ProductLivesAssured', models.CharField(blank=True, default='', max_length=500)),
                ('ProductPremiumLayer', models.CharField(blank=True, default='', max_length=500)),
                ('ProductBeneficiary', models.CharField(blank=True, default='', max_length=500)),
                ('Product_IniC', models.CharField(blank=True, default='', max_length=500)),
                ('Product_IniC_Percentage', models.CharField(blank=True, default='', max_length=500)),
                ('Product_OnC', models.CharField(blank=True, default='', max_length=500)),
                ('Product_OnC_Percentage', models.CharField(blank=True, default='', max_length=500)),
                ('SFPSolutionFunds', models.IntegerField(default=0)),
                ('SFPSolutionFundsDetails', models.CharField(blank=True, default='', max_length=500)),
                ('ItP', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_Fund', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided', models.IntegerField(default=0)),
                ('ItP_FundDiscussed', models.IntegerField(default=0)),
                ('ItP_Fund1', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage1', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided1', models.IntegerField(default=0)),
                ('ItP_FundDiscussed1', models.IntegerField(default=0)),
                ('ItP_Fund2', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage2', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided2', models.IntegerField(default=0)),
                ('ItP_FundDiscussed2', models.IntegerField(default=0)),
                ('ItP_Fund3', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage3', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided3', models.IntegerField(default=0)),
                ('ItP_FundDiscussed3', models.IntegerField(default=0)),
                ('ItP_Fund4', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage4', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided4', models.IntegerField(default=0)),
                ('ItP_FundDiscussed4', models.IntegerField(default=0)),
                ('ItP_Fund5', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage5', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided5', models.IntegerField(default=0)),
                ('ItP_FundDiscussed5', models.IntegerField(default=0)),
                ('ItP_Fund6', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage6', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided6', models.IntegerField(default=0)),
                ('ItP_FundDiscussed6', models.IntegerField(default=0)),
                ('ItP_Fund7', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundPercentage7', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundProvided7', models.IntegerField(default=0)),
                ('ItP_FundDiscussed7', models.IntegerField(default=0)),
                ('ItP_FundsReasons', models.CharField(blank=True, default='', max_length=500)),
                ('ItP_FundsMaterialAspects', models.CharField(blank=True, default='', max_length=500)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund1',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund2',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund3',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund4',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund5',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund6',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_Fund7',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed1',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed2',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed3',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed4',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed5',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed6',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundDiscussed7',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage1',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage2',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage3',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage4',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage5',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage6',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundPercentage7',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided1',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided2',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided3',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided4',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided5',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided6',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundProvided7',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundsMaterialAspects',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ItP_FundsReasons',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_PolicyNumber',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductBeneficiary',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductContractingParty',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductEAC',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductEscalation',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductLivesAssured',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductName',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductPremium',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductPremiumFrequency',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductPremiumLayer',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductProvider',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_ProductTaken',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_Product_IniC',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_Product_IniC_Percentage',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_Product_OnC',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_Product_OnC_Percentage',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_SFPSolutionFunds',
        ),
        migrations.RemoveField(
            model_name='investmentplanning',
            name='IP_SFPSolutionFundsDetails',
        ),
    ]
