# Generated by Django 4.1.2 on 2023-08-30 14:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('compliance', '0004_alter_compliancedocument_policy_number'),
    ]

    operations = [
        migrations.RenameField(
            model_name='compliancedocument',
            old_name='BACNumber',
            new_name='BAC',
        ),
    ]
