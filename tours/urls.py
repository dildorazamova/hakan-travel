from rest_framework.routers import DefaultRouter
from .views import TourViewSet,CityViewSet

router = DefaultRouter()
router.register("tours", TourViewSet, basename="tours")
router.register("cities", CityViewSet, basename="cities")

urlpatterns = router.urls