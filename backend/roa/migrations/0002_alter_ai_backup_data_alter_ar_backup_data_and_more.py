# Generated by Django 4.1.2 on 2024-03-21 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roa', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ai_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='ar_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='emp_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='fiduciary_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='gap_cover_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='ip_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='medical_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='roa_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='rp_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='stc_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
        migrations.AlterField(
            model_name='stp_backup',
            name='data',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
    ]
