from django.urls import path
from Nikewebsite import views
#from Nikewebsite.views import PostDetailView

 
urlpatterns=[
    #path("test", HomeView.as_view(), name="test"),
    path("", views.index, name="index"),
    path("Basket", views.indexBasket,name="indexBasket"),
    ]