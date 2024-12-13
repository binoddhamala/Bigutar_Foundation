# Generated by Django 5.1 on 2024-09-27 07:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0005_userprofile_delete_member'),
    ]

    operations = [
        migrations.CreateModel(
            name='FormSubmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=255)),
                ('gender', models.CharField(choices=[('male', 'Male'), ('female', 'Female'), ('other', 'Other')], max_length=10)),
                ('father_name', models.CharField(max_length=255)),
                ('grandfather_name', models.CharField(max_length=255)),
                ('permanent_state', models.CharField(max_length=100)),
                ('permanent_district', models.CharField(max_length=100)),
                ('permanent_municipality', models.CharField(max_length=100)),
                ('permanent_ward_no', models.CharField(max_length=10)),
                ('temporary_state', models.CharField(blank=True, max_length=100, null=True)),
                ('temporary_district', models.CharField(blank=True, max_length=100, null=True)),
                ('temporary_municipality', models.CharField(blank=True, max_length=100, null=True)),
                ('temporary_ward_no', models.CharField(blank=True, max_length=10, null=True)),
                ('date_of_birth', models.DateField()),
                ('phone_number', models.CharField(max_length=15)),
                ('email', models.EmailField(max_length=254)),
                ('blood_group', models.CharField(max_length=3)),
                ('agree_terms', models.BooleanField()),
            ],
        ),
        migrations.DeleteModel(
            name='UserProfile',
        ),
    ]
