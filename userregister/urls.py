from django.urls import path, include
from userregister import views

app_name = "userregister"

urlpatterns = [
                    path('register/', views.Register, name="register"),
                    path('home/', views.home, name="home"),
                    path('signin/', views.signin, name="signin"),
                    path('logout/', views.Logout, name="logout"),
              ]
