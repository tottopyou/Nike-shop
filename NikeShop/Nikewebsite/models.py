''' from audioop import reverse
from importlib.resources import contents
from time import timezone
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils.timezone import get_default_timezone
from datetime import datetime, timedelta
from django.db import models
from django.template.defaultfilters import slugify
from django.contrib.auth import get_user_model

User = get_user_model()

class Author(models.Model):
    user=models.OneToOneField(User,on_delete=models.CASCADE)
    

    def __str__(self):
        return self.user.username

class Comment(models.Model):
    user=models.ForeignKey(Author,on_delete=models.CASCADE)
    date=models.DateTimeField(auto_now_add=True)
    post=models.ForeignKey('Post',on_delete=models.CASCADE)
    content=models.TextField()

    def __str__(self):
        return self.user.username

class Post(models.Model):
    title=models.CharField(max_length=255)
    body=models.TextField()
    date=models.DateTimeField(auto_now_add=True)
    slug=models.SlugField(null=False,unique=True)

    author=models.ForeignKey(Author, on_delete=models.CASCADE)

    def get_absolute_url(self):
        return reverse("post_detail", kwargs={"slug": self.slug})


    def __str__(self):
        return self.title

    def save(self, *args, **kwargs): 
        if not self.slug:
            self.slug = slugify(self.title)
        return super().save(*args, **kwargs)    
''' 


