

from django.contrib import admin
from .models import MemberItem
from .models import News
from .models import FormSubmission

class MemberItemAdmin(admin.ModelAdmin):
    list_display = ('name', 'post', 'image')

class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'image', 'content','created_at')

admin.site.register(MemberItem, MemberItemAdmin)

admin.site.register(News,NewsAdmin)





class FormSubmissionAdmin(admin.ModelAdmin):
    # List view customization
    list_display = ('full_name', 'gender', 'phone_number', 'email', 'date_of_birth', 'agree_terms')
    list_filter = ('gender', 'agree_terms', 'date_of_birth')
    search_fields = ('full_name', 'father_name', 'grandfather_name', 'phone_number', 'email')

    # Detailed view customization
    fieldsets = (
        ('Personal Information', {
            'fields': ('full_name', 'gender', 'father_name', 'grandfather_name', 'date_of_birth', 'phone_number', 'email', 'blood_group')
        }),
        ('Permanent Address', {
            'fields': ('permanent_state', 'permanent_district', 'permanent_municipality', 'permanent_ward_no')
        }),
        ('Temporary Address', {
            'fields': ('temporary_state', 'temporary_district', 'temporary_municipality', 'temporary_ward_no')
        }),
        ('Agreement', {
            'fields': ('agree_terms',)
        }),
    )

# Register the model with the custom admin configuration
admin.site.register(FormSubmission, FormSubmissionAdmin)



from django.contrib import admin
from .models import Gallery, GalleryItem

class GalleryItemInline(admin.TabularInline):
    model = GalleryItem
    extra = 1  # Allows one extra field for adding items inline

@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    inlines = [GalleryItemInline]
    list_display = ('name',)


