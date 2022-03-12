from django.shortcuts import render

from rest_framework import generics
from .serializers import ContactSerializer
from .models import Contact


# Create your views here.

class ContactList(generics.ListCreateAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer

class ContactDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Contact.objects.all().order_by('id')
    serializer_class = ContactSerializer

