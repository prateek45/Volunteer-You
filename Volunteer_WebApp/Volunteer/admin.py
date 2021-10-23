from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(Volunteer)
admin.site.register(Organization_Official)

class VolInLine(admin.TabularInline):
	model = Events.roster.through

@admin.register(Events)
class EventAdmin(admin.ModelAdmin):
	inlines = (VolInLine,)
	exclude = ('roster',)



