# Generated by Django 4.1.2 on 2023-09-07 17:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compliance', '0017_alter_gatekeeping_application_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gatekeeping',
            name='status',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]