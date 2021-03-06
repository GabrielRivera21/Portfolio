# -*- coding: utf-8 -*-
# Generated by Django 1.9 on 2016-01-10 02:05
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('projects', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('name', models.CharField(max_length=100)),
                ('description', models.TextField(null=True)),
                ('projects', models.ManyToManyField(to='projects.Project')),
            ],
            options={
                'get_latest_by': 'modified_at',
                'ordering': ('-modified_at', '-created_at'),
                'abstract': False,
            },
        ),
    ]
