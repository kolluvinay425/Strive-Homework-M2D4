from django.http.response import HttpResponse
from django.shortcuts import render,HttpResponse
from.models import Names
from .forms import NamesForm
# Create your views here.
def index(request):
    
    form = NamesForm(request.POST or None)
    if form.is_valid():
        form.save()
        return HttpResponse('saved')
    allNames = Names.objects.all()
    return render(request,'teamsapp/index.html',{'form':form,'allNames':allNames})


    