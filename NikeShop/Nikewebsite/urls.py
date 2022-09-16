from django.urls import path

from . import views
 
urlpatterns=[
    path("", views.index, name="index"),
    path("Basket",views.indexBasket ,name="indexBasket")
    ]