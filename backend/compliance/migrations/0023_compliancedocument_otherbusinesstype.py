# Generated by Django 4.1.2 on 2023-09-13 20:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('compliance', '0022_documentcomments_type'),
    ]

    operations = [
        migrations.AddField(
            model_name='compliancedocument',
            name='otherBusinessType',
            field=models.TextField(blank=True, default=''),
        ),
    ]