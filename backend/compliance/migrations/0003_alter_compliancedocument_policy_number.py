# Generated by Django 4.1.2 on 2023-08-30 12:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compliance', '0002_compliancedocument_user_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compliancedocument',
            name='policy_number',
            field=models.CharField(default=1, max_length=256, unique=True),
        ),
    ]
