# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-10 03:41
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('works', '0001_initial'),
        ('projects', '0004_auto_20160109_2327'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='work_experience',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='works.WorkExperience'),
        ),
    ]
