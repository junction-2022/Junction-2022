from django.db import models

class SurveyRepsponse(models.Model):
    name = models.CharField(max_length=20)
    timestamp = models.DateField(auto_now=True)
    family = models.BooleanField(default=False)
    partner = models.BooleanField(default=False)
    friends = models.BooleanField(default=False)
    colleagues = models.BooleanField(default=False)
    weather = models.IntegerField()
    sleep = models.FloatField()
    work = models.FloatField()
    sports = models.IntegerField()
    hobbies = models.IntegerField()
    social = models.IntegerField()
    health = models.IntegerField()
    mood = models.IntegerField()
