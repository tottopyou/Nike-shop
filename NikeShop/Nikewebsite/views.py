from http.client import HTTPResponse
from msilib.schema import ListView
from multiprocessing import context
from pyexpat import model
from re import T, template
from django.shortcuts import render
from django.http import HttpRequest
from django.contrib.auth.models import User
from django.contrib import messages
from django.views.generic import ListView, CreateView, DetailView
#from .models import Post, Author
from django.shortcuts import render, redirect, reverse
#from Nikewebsite.forms import CommentForm

'''def blog(request):
    context={}
    return render(request,"Nikewebsite/test.html",context)


class PostDetailView(DetailView):
    model=Post
    template_name='Nikewebsite/index.html'

    form = CommentForm

    def post(self, request,*args,**kwargs):
        form=CommentForm(request.POST)
        if form.is_valid():
            post=self.get_object()
            author=self.get_object()
            form.instance.user=author
            form.instance.post=post
            form.save()

            return redirect(reverse("index",kwargs=
            {
                "slug": post.slug
            }))

    def get_context_data(self, **kwargs):
        context= super().get_context_data(**kwargs)
        context["form"]=self.form
        return context        

''' 


def index(request):
    return render(request, "Nikewebsite/index.html")

def indexBasket(request):
    return render (request,"Nikewebsite/indexBasket.html")



        



# Create your views here.
