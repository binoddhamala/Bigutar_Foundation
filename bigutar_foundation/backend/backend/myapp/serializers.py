

from rest_framework import serializers
from .models import MemberItem
from .models import News
from .models import FormSubmission




class MemberItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MemberItem
        fields = ['id', 'name', 'post', 'image']


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ['id', 'title', 'image', 'content', 'created_at']



class FormSubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormSubmission
        fields = '__all__'



from rest_framework import serializers
from .models import Gallery, GalleryItem

class GalleryItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryItem
        fields = ['id', 'image', 'caption']


class GallerySerializer(serializers.ModelSerializer):
    items = GalleryItemSerializer(many=True, read_only=True)

    class Meta:
        model = Gallery
        fields = ['id', 'name', 'items']




