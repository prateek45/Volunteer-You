from django.urls import path

from . import views


urlpatterns = [
	path('register/', views.Register, name="register"),
	path('login/', views.login_page, name="login"),  
	path('logout/', views.logout_page, name="logout"),
    path('', views.home, name="home"),

	path('update_event/<str:pk>/', views.UpdateEvent, name="update_Event"),
    path('delete_event/<str:pk>/', views.deleteEvent, name="delete_Event"),
  
]