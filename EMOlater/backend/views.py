from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import viewsets, status

from .models import User, SurveyRepsponse
from .serializers import UserSerializer, SurveyRepsponseSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class SurveyRepsponseViewSet(viewsets.ModelViewSet):
    queryset = SurveyRepsponse.objects.all()
    serializer_class = SurveyRepsponseSerializer

@api_view(['GET', 'POST'])
def user(request):
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        serializer = UserSerializer(User.objects.all().last())
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def survey(request):
    if request.method == 'POST':
        serializer = SurveyRepsponseSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            return Response(data=serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        serializer = SurveyRepsponseSerializer(SurveyRepsponse.objects.all().last())
        return Response(serializer.data, status=status.HTTP_200_OK)