from django.shortcuts import render
from django.template.loader import get_template
from django.core.mail import EmailMessage, send_mail
from django.template import Context

from .forms import ContactForm


def index(request):
    return render(request, 'personal/home.html')


def contact(request):
    form_class = ContactForm

    if request.method == 'POST':
        form = form_class(data=request.POST)

        if form.is_valid():
            contact_name = request.POST.get(
                'contact_name', ''
            )
            contact_email = request.POST.get(
                'contact_email', ''
            )
            form_content = request.POST.get('content', '')

            template = get_template('personal/contact_template.txt')
            context = Context({
                'contact_name': contact_name,
                'contact_email': contact_email,
                'form_content': form_content,
            })
            content = template.render(context)

            email = EmailMessage(
                "New contact form submission",
                content,
                "Your website " + 'http://bebos.pythonanywhere.com/',
                ['danielbuszta@gmail.com'],
                headers={'Reply-To': contact_email}
            )
            email.send()
            send_mail('New contact form submission', form_content, contact_email, ['danielbuszta@gmail.com'], fail_silently=False)
            return render(request, 'personal/contact.html')

    return render(request, 'personal/contact.html', {
        'form': form_class,
    })
