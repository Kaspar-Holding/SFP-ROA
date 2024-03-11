# Generated by Django 4.1.2 on 2024-02-27 08:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0175_remove_disclosuresproducts_advisorid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='disclosuresproducts',
            name='status',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='disclosuresproducts',
            name='formId',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='data.disclosures'),
        ),
        migrations.AlterField(
            model_name='disclosuresproducts',
            name='product_provider',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='data.disclosuresproductproviders'),
        ),
    ]