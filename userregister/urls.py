from django.urls import path, include
from userregister import views
from django.contrib.auth import views as auth_views

app_name = "userregister"

urlpatterns = [
    path('register/', views.Register, name="register"),
    path('home/', views.home, name="home"),
    path('', views.signin, name="signin"),
    path('logout/', views.Logout, name="logout"),
]
