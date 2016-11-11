# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-11-10 22:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('skills', '0005_auto_20161108_0949'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='skill_type',
            field=models.CharField(choices=[('pl', 'Programming Language'), ('st', 'Software Tools'), ('fr', 'Frameworks'), ('dp', 'Deployments')], max_length=2),
        ),
    ]
