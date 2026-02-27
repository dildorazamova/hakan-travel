from django.urls import path
from .views import (
    BookingCreateAPIView,
    UserBookingListAPIView,
    BookingCancelAPIView,
    BookingConfirmAPIView,
    AdminStatsAPIView,
    SendBookingEmail
)

urlpatterns = [
    path('', BookingCreateAPIView.as_view(), name='booking-create'),
    path('my/', UserBookingListAPIView.as_view(), name='my-bookings'),
    path('<int:pk>/confirm/', BookingConfirmAPIView.as_view(), name='booking-confirm'),
    path("admin/stats/", AdminStatsAPIView.as_view(), name="admin-stats"),
    path("send-booking/", SendBookingEmail.as_view()),

]