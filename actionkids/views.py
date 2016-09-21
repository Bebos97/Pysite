from django.shortcuts import render


def actionkids(request):
    return render(request, 'actionkids/actionkids.html')


def home(request):
    return render(request, 'actionkids/Home Page.html')


def info(request):
    return render(request, 'actionkids/Info.html')
