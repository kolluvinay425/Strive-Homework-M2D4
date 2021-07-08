from django import forms
from .models import Names


class NamesForm(forms.ModelForm):
    class Meta:
        model = Names
        fields =['name']

  