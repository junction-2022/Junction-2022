from django.db import models
import datetime

class SurveyRepsponse(models.Model):
    name = models.CharField(max_length=20)
    timestamp = models.DateField(default=datetime.date.today())
    family = models.BooleanField(default=False)
    partner = models.BooleanField(default=False)
    friends = models.BooleanField(default=False)
    colleagues = models.BooleanField(default=False)
    weather = models.IntegerField()
    sleep = models.FloatField()
    work = models.FloatField()
    study = models.FloatField()
    sports = models.IntegerField()
    hobbies = models.IntegerField()
    social = models.IntegerField()
    health = models.IntegerField()
    mood = models.IntegerField()
    thoughts = models.CharField(max_length=280, blank=True)
