# Generated by Django 4.1.2 on 2023-05-05 11:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0089_ai_producttaken_pf_executorfee_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ai_producttaken',
            name='PF_ProductDetails',
        ),
    ]