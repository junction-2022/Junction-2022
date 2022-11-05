from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

from .models import SurveyRepsponse
from .serializers import SurveyRepsponseSerializer

class SurveyRepsponseViewSet(viewsets.ModelViewSet):
    queryset = SurveyRepsponse.objects.all()
    serializer_class = SurveyRepsponseSerializer

@api_view(['GET', 'POST'])
def survey(request):
    if request.method == 'POST':
        serializer = SurveyRepsponseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        date = request.query_params.get('date', None)
        name = request.query_params.get('name', None)
        if date:
            responses = SurveyRepsponse.objects.filter(timestamp__lte=date)
            return Response(SurveyRepsponseSerializer(list(responses), many=True).data, status=status.HTTP_200_OK)
        elif name:
            responses = SurveyRepsponse.objects.filter(name=name)
            return Response(SurveyRepsponseSerializer(list(responses), many=True).data, status=status.HTTP_200_OK)
        else:
            return Response(SurveyRepsponseSerializer(SurveyRepsponse.objects.all().last()).data)