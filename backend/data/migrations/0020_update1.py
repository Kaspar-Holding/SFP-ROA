# Generated by Django 4.1.2 on 2022-10-30 19:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0019_update1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='assuranceinvestment',
            name='AI_Pr_PremiumLayer',
        ),
        migrations.AddField(
            model_name='assuranceinvestment',
            name='AI_Pr_PremiumPayer',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
    ]