
from .models import News
from .serializers import NewsSerializer
from rest_framework import generics, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import MemberItem
from .serializers import MemberItemSerializer
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import FormSubmission
from .serializers import FormSubmissionSerializer


class MemberItemListView(generics.ListCreateAPIView):
    queryset = MemberItem.objects.all()
    serializer_class = MemberItemSerializer
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        



class NewsListCreateView(generics.ListCreateAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class NewsDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


from rest_framework import generics
from .models import FormSubmission
from .serializers import FormSubmissionSerializer

class FormSubmissionListCreateView(generics.ListCreateAPIView):
    queryset = FormSubmission.objects.all()
    serializer_class = FormSubmissionSerializer

class FormSubmissionDetailView(generics.RetrieveAPIView):
    queryset = FormSubmission.objects.all()
    serializer_class = FormSubmissionSerializer









from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Gallery
from .serializers import GallerySerializer

class GalleryListView(APIView):
    def get(self, request):
        galleries = Gallery.objects.all()
        serializer = GallerySerializer(galleries, many=True)
        return Response(serializer.data)



from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Member
from .serializers import MemberSerializer

class MemberList(APIView):
    def get(self, request):
        members = Member.objects.all()
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)





