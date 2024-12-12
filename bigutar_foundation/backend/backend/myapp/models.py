
from django.db import models

class MemberItem(models.Model):
    name = models.CharField(max_length=100)
    post = models.TextField()
    image = models.ImageField(upload_to='gallery_images/')

    def __str__(self):
        return self.name
    
class News(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='news_images/')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Gallery(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class GalleryItem(models.Model):
    gallery = models.ForeignKey(Gallery, related_name='items', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='gallery_items/')
    caption = models.CharField(max_length=200, blank=True)

    def __str__(self):
        return f"{self.gallery.name} - {self.caption}"


class FormSubmission(models.Model):
    GENDER_CHOICES = [
        ('male', 'Male'),
        ('female', 'Female'),
        ('other', 'Other'),
    ]

    full_name = models.CharField(max_length=255)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    father_name = models.CharField(max_length=255)
    grandfather_name = models.CharField(max_length=255)
    permanent_state = models.CharField(max_length=100)
    permanent_district = models.CharField(max_length=100)
    permanent_municipality = models.CharField(max_length=100)
    permanent_ward_no = models.CharField(max_length=10)
    temporary_state = models.CharField(max_length=100, blank=True, null=True)
    temporary_district = models.CharField(max_length=100, blank=True, null=True)
    temporary_municipality = models.CharField(max_length=100, blank=True, null=True)
    temporary_ward_no = models.CharField(max_length=10, blank=True, null=True)
    date_of_birth = models.DateField()
    phone_number = models.CharField(max_length=15)
    email = models.EmailField()
    blood_group = models.CharField(max_length=3)
    agree_terms = models.BooleanField()

    def __str__(self):
        return self.full_name
    

    from django.db import models

class Member(models.Model):
    serial_number = models.IntegerField()
    membership_number = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
