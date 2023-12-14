# Generated by Django 4.1.2 on 2023-08-30 12:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('compliance', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='compliancedocument',
            name='user',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='compliancedocument',
            name='advisor',
            field=models.CharField(default=1, max_length=500),
        ),
    ]