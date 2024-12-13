

from django.urls import path
from .views import MemberItemListView
from .views import NewsDetailView
from .views import NewsListCreateView
from .views import GalleryListView
from .views import MemberList
from .views import FormSubmissionListCreateView, FormSubmissionDetailView
from .views import ContactMessageView


urlpatterns = [
    path('api/team/', MemberItemListView.as_view(), name='gallery-list-create'),
    path('api/news/', NewsListCreateView.as_view(), name='news-list-create'),
    path('api/news/<int:pk>/', NewsDetailView.as_view(), name='news-detail'),
    path('galleries/', GalleryListView.as_view(), name='gallery-list'),
    path('api/form-submissions/', FormSubmissionListCreateView.as_view(), name='form-submission-list-create'),
    path('api/form-submissions/<int:pk>/', FormSubmissionDetailView.as_view(), name='form-submission-detail'),
    path('api/members/', MemberList.as_view(), name='member-list'),
    path('api/contact/', ContactMessageView.as_view(), name='contact'),
]
from django.urls import path
















