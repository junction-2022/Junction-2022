from rest_framework import serializers
from .models import SurveyRepsponse

class SurveyRepsponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveyRepsponse
        fields = ['name',
                  'timestamp',
                  'family',
                  'partner',
                  'friends',
                  'colleagues',
                  'weather',
                  'sleep',
                  'work',
                  'sports',
                  'hobbies',
                  'social',
                  'health',
                  'mood']
