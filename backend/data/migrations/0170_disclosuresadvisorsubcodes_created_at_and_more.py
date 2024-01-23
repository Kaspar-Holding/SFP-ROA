# Generated by Django 4.1.2 on 2024-01-23 14:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0169_user_profile_advisor_tag'),
    ]

    operations = [
        migrations.AddField(
            model_name='disclosuresadvisorsubcodes',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disclosuresadvisorsubcodes',
            name='updated_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disclosuresproductproviders',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disclosuresproductproviders',
            name='updated_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disclosuresproducts',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='disclosuresproducts',
            name='updated_at',
            field=models.DateTimeField(auto_now_add=True, default='2024-01-01'),
            preserve_default=False,
        ),
    ]
