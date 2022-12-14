# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'all_survey_repsponses', SurveyRepsponseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('survey/', survey),
    path('col/', col),
    path('col4/', col4),
    path('col4n/', col4n)
]
