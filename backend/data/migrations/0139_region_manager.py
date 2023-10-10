# Generated by Django 4.1.2 on 2023-10-10 09:25

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0138_categorisation_user_profile_supervision_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='region_manager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('manager', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
                ('region', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.regions')),
            ],
        ),
    ]
