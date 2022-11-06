import json

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
            responses = SurveyRepsponse.objects.all()
            return Response(SurveyRepsponseSerializer(list(responses), many=True).data, status=status.HTTP_200_OK)

@api_view(['GET'])
def col(request):
    col = request.query_params.get('col', None)
    if col:
        tupleList = list(SurveyRepsponse.objects.values_list('timestamp', col))
        res = []
        for e in tupleList:
            res.append((int(round(e[0].timestamp())), e[1]))
        return Response(res[-30:])

@api_view(['GET'])
def col4(request):
    tupleList = list(SurveyRepsponse.objects.values_list('timestamp', 'sleep', 'mood', 'work', 'study'))
    res = []
    for e in tupleList:
        res.append(
            {
                "timestamp": (round(e[0].timestamp())),
                "sleep": e[1],
                "mood": e[2],
                "work": e[3],
                "study": e[4]
             }
        )
    return Response(res[-30:])

@api_view(['GET'])
def col4n(request):
    tupleList = list(SurveyRepsponse.objects.values_list('timestamp', 'mood', 'health', 'weather', 'sports'))
    res = []
    for e in tupleList:
        res.append(
            {
                "timestamp": (round(e[0].timestamp())),
                "mood": e[1],
                "health": e[2],
                "weather": e[3],
                "sports": e[4]
            }
        )
    return Response(res[-30:])