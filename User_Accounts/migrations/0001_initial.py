# Generated by Django 3.0.5 on 2021-06-08 15:36

import User_Accounts.models
import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User_Reg',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('phone', models.CharField(max_length=14, validators=[django.core.validators.RegexValidator(message='Phone Number is not valid', regex='^(?:\\s+|)((0|(?:(\\+|)91))(?:\\s|-)*(?:(?:\\d(?:\\s|-)*\\d{9})|(?:\\d{2}(?:\\s|-)*\\d{8})|(?:\\d{3}(?:\\s|-)*\\d{7}))|\\d{10})(?:\\s+|)')])),
                ('account_no', models.CharField(max_length=18, validators=[django.core.validators.RegexValidator(message='Account Number is not valid', regex='[0-9]{9,18}')])),
                ('account_bal', models.DecimalField(decimal_places=2, default=0.0, max_digits=10, validators=[User_Accounts.models.User_Reg.validate_balance])),
                ('bank_br', models.TextField()),
                ('br_id', models.CharField(max_length=122)),
                ('br_add', models.TextField()),
                ('ifsc', models.CharField(max_length=10, validators=[django.core.validators.RegexValidator(message='IFSC Code is not valid', regex='^[A-Za-z]{4}[A-Z0-9a-z]{6}$')])),
                ('your_add', models.TextField()),
                ('pin', models.CharField(max_length=6, validators=[django.core.validators.RegexValidator(message='Pincode is not valid', regex='^[1-9][0-9]{5}$')])),
            ],
        ),
    ]
