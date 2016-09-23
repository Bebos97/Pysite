from django.shortcuts import render


def randomquestiongenerator(request):
    return render(request, 'RandomQuestionGenerator/rqg.html')
