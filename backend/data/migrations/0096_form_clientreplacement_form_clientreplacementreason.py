# Generated by Django 4.1.2 on 2023-05-19 13:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0095_stic_loss'),
    ]

    operations = [
        migrations.AddField(
            model_name='form',
            name='clientReplacement',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='form',
            name='clientReplacementReason',
            field=models.CharField(blank=True, default='', max_length=20000),
        ),
    ]