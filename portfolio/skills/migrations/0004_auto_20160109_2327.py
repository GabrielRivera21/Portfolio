# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-10 03:27
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0003_skill_skill_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='projects',
            field=models.ManyToManyField(blank=True, to='projects.Project'),
        ),
    ]