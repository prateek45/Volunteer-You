# Generated by Django 3.2.6 on 2021-10-21 09:55

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('Volunteer', '0002_auto_20211018_1243'),
    ]

    operations = [
        migrations.AddField(
            model_name='events',
            name='date_created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now, verbose_name='Date Created'),
            preserve_default=False,
        ),
    ]
