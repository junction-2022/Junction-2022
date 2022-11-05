from rest_framework import serializers
from .models import SurveyRepsponse, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_ID',
                  'user_name',
                  'user_password']


class SurveyRepsponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = SurveyRepsponse
        fields = ['body',
                  'user_id',
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