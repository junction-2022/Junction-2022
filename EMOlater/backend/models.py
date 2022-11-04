from django.db import models

class SurveyRepsponse(models.Model):
    body = models.CharField(max_length=50)
    user_id = models.IntegerField()
    timestamp = models.DateField()
    family = models.BooleanField()
    partner = models.BooleanField()
    friends = models.BooleanField()
    colleagues = models.BooleanField()
    weather = models.IntegerField()
    sleep = models.FloatField()
    work = models.FloatField()
    sports = models.IntegerField()
    hobbies = models.IntegerField()
    social = models.IntegerField()
    health = models.IntegerField()
    mood = models.IntegerField()

class User(models.Model):
    user_ID = models.IntegerField()
    user_name = models.CharField(max_length=50)
    user_password = models.CharField(max_length=50)
