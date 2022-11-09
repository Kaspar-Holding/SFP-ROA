# Generated by Django 4.1.2 on 2022-10-21 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Form',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('advisor_id', models.IntegerField()),
                ('form_type', models.IntegerField(default=1)),
                ('client_name', models.CharField(max_length=256)),
                ('client_id', models.CharField(max_length=256)),
                ('client_address', models.CharField(max_length=256)),
                ('client_email', models.CharField(max_length=256)),
                ('client_date_of_birth', models.DateField()),
                ('client_letter_of_introduction', models.BooleanField(default=False)),
                ('client_letter_of_introduction_reason', models.CharField(blank=True, max_length=256)),
                ('client_fica', models.BooleanField(default=False)),
                ('client_fica_reason', models.CharField(blank=True, max_length=256)),
                ('client_background_info', models.CharField(max_length=1000)),
                ('status', models.IntegerField(default=0)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=255, unique=True)),
                ('username', models.CharField(blank=True, max_length=255, null=True, unique=True)),
                ('name', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('is_active', models.IntegerField(default=1)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('role', models.IntegerField(default=1)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]