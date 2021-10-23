# Generated by Django 3.2.6 on 2021-10-22 13:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Volunteer', '0003_events_date_created'),
    ]

    operations = [
        migrations.AlterField(
            model_name='events',
            name='organization',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='event', to='Volunteer.organization_official'),
        ),
        migrations.AlterField(
            model_name='events',
            name='roster',
            field=models.CharField(default='', max_length=10000),
        ),
    ]