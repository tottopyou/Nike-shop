'''
from dataclasses import fields
from socket import fromshare
from django import forms
from Nikewebsite.models import Comment


class CommentForm(forms.ModelForm):
    content=forms.CharField(widget=forms.Textarea(attrs={
        'class': 'form-control',
        'rows': '4',
    }))

    class Meta:
        model=Comment
        fields=['content']
'''
