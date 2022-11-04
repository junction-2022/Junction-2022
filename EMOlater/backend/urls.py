# backend/urls.py
from django.contrib import admin
from django.urls import path, include
from .models import SurveyRepsponse
from rest_framework import routers, serializers, viewsets


class SurveyResponseSerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'is_staff']


class SurveyResponseViewSet(viewsets.ModelViewSet):
    queryset = SurveyRepsponse.objects.all()
    serializer_class = SurveyResponseSerializers

router = routers.DefaultRouter()
router.register(r'survey_responses', SurveyResponseViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('backend.urls')),
    path('', include(router.urls)),
    path('api-survey/', include('rest_framework.urls', namespace='rest_framework'))
]
