# Generated by Django 4.1.2 on 2024-03-21 10:56

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('data', '0181_remove_user_profile_address_physical_1_and_more'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='stp_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Short Term Personal', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('stp', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.shortterminsurancepersonal')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='stc_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Short Term Commercial', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('stc', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.shortterminsurancecommerical')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='rp_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Risk Planning', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('rp', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.riskplanning')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='roa_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='ROA', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('roa', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.form')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='medical_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Medical', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('medical', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.medical')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ip_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Investment Planning', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('ip', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.investmentplanning')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='gap_cover_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Gap Cover', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('gap_cover', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.gapcover')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='fiduciary_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Fiduciary', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('fiduciary', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.fiduciary')),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='emp_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Employee Benefits', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('emp', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.employeebenefits')),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Disclosures', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ar_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Assurance Risk', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('ar', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.assurancerisk')),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='ai_backup',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('data', models.JSONField(blank=True, default={}, null=True)),
                ('backup_type', models.CharField(default='Assurance Investment', max_length=100)),
                ('created_at', models.DateField(auto_now_add=True)),
                ('ai', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.assuranceinvestment')),
                ('form', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='data.disclosures')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
