# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-16 18:59
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('projects', '0007_auto_20160110_0008'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='skills',
        ),
    ]
