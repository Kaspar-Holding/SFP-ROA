# Generated by Django 4.1.2 on 2023-08-30 08:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0125_rename_client_individual_risk_rf_scores_clientindividualriskscore_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='riskfactors',
            name='Policy_Number',
            field=models.CharField(blank=True, default='', max_length=250),
        ),
    ]