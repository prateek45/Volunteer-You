from django.http.response import HttpResponse
from django.shortcuts import redirect, render

from django.contrib.auth import authenticate,login,logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import Group,User
from django.contrib import messages

from rest_framework import viewsets
from .serializers import VolunteerSerializer, OrganizationSerializer, EventsSerializer

from .models import Organization_Official, Volunteer, Events
from .forms import CreateEvent, CreateUser

from .decorators import allowed_users, unauthenticated_user

# Create your views here.

def home(request):
    context = {}
    return HttpResponse("Hello Volunteers!")

@unauthenticated_user
def Register(request):

    form = CreateUser()
    if request.method == 'POST':
        form = CreateUser(request.POST)
        if form.is_valid():
            user = form.save()
            user_name = form.cleaned_data.get('username')
            role = form.cleaned_data.get('choice')
            group = Group.objects.get(name = role)
            user.groups.add(group)
            if user.groups.filter(name = 'Volunteer'):
                Volunteer.objects.create(
                    user = user,
                    name = user.first_name +" "+ user.last_name,
                    email = user.email
                ) 

            elif user.groups.filter(name = 'Organization'):
                Organization_Official.objects.create(
                    user = user,
                    name = user.first_name +" "+ user.last_name,
                    email = user.email,

                )
            messages.success(request, 'Account was created for '+ user_name)
            return redirect('login')
    context = {
        'form': form
    }
    return render(request, '', context)

@unauthenticated_user
def login_page(request):    
    
    if request.method == 'POST':
        user_name = request.POST.get('username')
        pass_word = request.POST.get('password')
        
        # to check if user is registered in our database
        user = authenticate(request, username = user_name, password = pass_word)
        if user is not None:
            login(request, user)
            messages.success(request, 'Welcome '+ user)
            # choose for resident or something else
            if user.groups.filter(name = 'Volunteer'):
                return redirect('Volunteer') 

            elif user.groups.filter(name = 'Organization'):
                return redirect('Organization')
        else:
            messages.info(request, 'Username or Password is incorrect')
    context = {}       
    return render(request, '', context)

@login_required(login_url = 'login')
def logout_page(request):
    logout(request)
    return redirect('login')

@login_required(login_url = 'login')
@allowed_users(allowed_roles=['Organization'])
def event_create(request):
    form = CreateEvent()
    if request.method == 'POST':
        form = CreateEvent(request.POST)#EventCreate(request.POST)
        if form.is_valid:
            form.save()
            return redirect('Organization')
    context = {}
    return render(request, '', context)

@login_required(login_url = 'login')
@allowed_users(allowed_roles=['Organization'])
def UpdateEvent(request, pk):

    event = Events.objects.get(id = pk)
    form = CreateEvent(instance = event)
    
    if request.method == 'POST':
        form = CreateEvent(request.POST, instance=event)
        if form.is_valid():
            form.save()
            return redirect('Organization')
    
    context = {'form': form}
    return render(request, '',context)

@login_required(login_url = 'login')
@allowed_users(allowed_roles=['Organization'])
def deleteEvent(request, pk):
    
    event = Events.objects.get(id = pk)
    
    if request.method == 'POST':
        event.delete()
        return redirect('Manager')
    
    context = {'item':event}

class VolunteerView(viewsets.ModelViewSet):
    serializer_class = VolunteerSerializer
    queryset = Volunteer.objects.all()

class OrganizationView(viewsets.ModelViewSet):
    serializer_class = OrganizationSerializer
    queryset = Organization_Official.objects.all()

class EventsView(viewsets.ModelViewSet):
    serializer_class = EventsSerializer
    queryset = Events.objects.all()
