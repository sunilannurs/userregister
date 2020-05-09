from django.shortcuts import render
from .models import *
from django.shortcuts import render, redirect, reverse
from django.contrib.auth import *
from django.core.exceptions import ObjectDoesNotExist


def Register(request):
    if request.method == "POST":
        if request.POST['password'] == request.POST['cpassword']:
            user = User()
            try:
                User.objects.get(email=request.POST['email'])
                context = {
                    'message': "User already Exist"
                }
                return render(request, 'register/login.html', context)
            except ObjectDoesNotExist:

                user.username = request.POST['username']
                user.email = request.POST['email']
                user.set_password(request.POST['password'])
                user.is_customer = True
                user.save()
                customer = Profile()
                customer.user = user
                customer.email = request.POST['email']
                customer.username = request.POST['username']
                customer.phone = request.POST['phone']
                customer.location = request.POST['location']
                customer.save()
                return redirect(reverse('userregister:home'))
        else:
            context = {
                'message': "Password is Mismatch",
            }
            return render(request, 'register/login.html', context)

    return render(request, "register/login.html", )


from django.contrib.auth.hashers import check_password


def signin(request):
    if request.method == 'POST':
        try:

            username = request.POST['username']
            password = request.POST['password']
            username = Profile.objects.get(username=username)
            password = check_password(password=password, encoded=username.user.password)
            if password == False:
                context = {
                    'message': "Password is Wrong",
                }
                return render(request, 'register/signin.html', context)
            return redirect(reverse('userregister:home'))

        except ObjectDoesNotExist:
            context = {
                'message': "Invalid User Name or Password"
            }
            return render(request, 'register/signin.html', context)
    return render(request, 'register/signin.html')


def home(request):
    context = {
        'user': request.user.username
    }
    return render(request, 'register/home.html', context)


def Logout(request):
    logout(request)
    return render(request, 'register/signin.html')
