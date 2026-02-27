from rest_framework import viewsets
from .models import Tour,City
from .serializers import TourSerializer,CitySerializer


class TourViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Tour.objects.filter(is_active=True)
    serializer_class = TourSerializer

class CityViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = City.objects.all()
    serializer_class = CitySerializer