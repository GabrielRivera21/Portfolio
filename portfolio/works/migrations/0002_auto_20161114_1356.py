# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-14 21:56
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('works', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workexperience',
            name='location',
        ),
        migrations.AddField(
            model_name='workexperience',
            name='address',
            field=models.CharField(blank=True, max_length=150, null=True),
        ),
        migrations.AddField(
            model_name='workexperience',
            name='latitude',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=18),
        ),
        migrations.AddField(
            model_name='workexperience',
            name='longitude',
            field=models.DecimalField(decimal_places=6, default=0, max_digits=18),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='to_date',
            field=models.DateField(blank=True, null=True),
        ),
    ]
