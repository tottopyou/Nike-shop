from http.client import HTTPResponse
from django.shortcuts import render
from django.http import HttpRequest

def index(request):
    return render(request, "Nikewebsite/index.html")


def indexBasket(request):
    return render (request,"Nikewebsite/indexBasket.html")

# Create your views here.
