# Generated by Django 4.1.2 on 2023-12-28 10:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0156_alter_disclosuresproductproviders_product_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='disclosuresproductproviders',
            name='product_type',
            field=models.IntegerField(blank=True, default=1, null=True),
        ),
    ]