# Generated by Django 4.1.2 on 2024-01-26 10:49

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('compliance', '0030_rename_disclosure_gatekeeping_date_of_screening_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='compliancedocument',
            name='advisor',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='advisor', to=settings.AUTH_USER_MODEL),
        ),
    ]
