from rest_framework import generics, permissions
from rest_framework.exceptions import ValidationError, PermissionDenied
from .models import Booking
from .serializers import BookingSerializer
from tours.models import Tour
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Sum
from rest_framework.permissions import IsAdminUser
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework import status


# =========================
# BOOKING CREATE
# =========================
class BookingCreateAPIView(generics.CreateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        tour = serializer.validated_data.get("tour")
        people_count = serializer.validated_data.get("people_count")

        if not tour:
            raise ValidationError("Tour not found.")

        total_price = tour.price * people_count

        serializer.save(
            user=self.request.user,
            total_price=total_price,
            status=Booking.Status.PENDING
        )


# =========================
# USER BOOKINGS LIST
# =========================
class UserBookingListAPIView(generics.ListAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)


# =========================
# BOOKING CANCEL
# =========================
class BookingCancelAPIView(generics.UpdateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        booking = self.get_object()

        if booking.status == Booking.Status.CANCELLED:
            raise PermissionDenied("Booking already cancelled.")

        serializer.save(status=Booking.Status.CANCELLED)

# =========================
# BOOKING CONFIRM
# =========================
class BookingConfirmAPIView(generics.UpdateAPIView):
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Booking.objects.filter(user=self.request.user)

    def perform_update(self, serializer):
        booking = self.get_object()

        if booking.status == Booking.Status.CANCELLED:
            raise PermissionDenied("Cancelled booking cannot be confirmed.")

        if booking.status == Booking.Status.CONFIRMED:
            raise PermissionDenied("Booking already confirmed.")

        serializer.save(status=Booking.Status.CONFIRMED)


class AdminStatsAPIView(APIView):
    permission_classes = [IsAdminUser]

    def get(self, request):
        total_bookings = Booking.objects.count()
        total_confirmed = Booking.objects.filter(status=Booking.Status.CONFIRMED).count()
        total_pending = Booking.objects.filter(status=Booking.Status.PENDING).count()
        total_cancelled = Booking.objects.filter(status=Booking.Status.CANCELLED).count()

        total_revenue = Booking.objects.filter(
            status=Booking.Status.CONFIRMED
        ).aggregate(total=Sum("total_price"))["total"] or 0

        data = {
            "total_bookings": total_bookings,
            "total_confirmed": total_confirmed,
            "total_pending": total_pending,
            "total_cancelled": total_cancelled,
            "total_revenue": total_revenue,
        }

        return Response(data)
    
class SendBookingEmail(APIView):

    def post(self, request):
        tour_name = request.data.get("tour")
        user_email = request.data.get("email")

        send_mail(
            subject="New Booking Request",
            message=f"Tour: {tour_name}\nClient Email: {user_email}",
            from_email=None,
            recipient_list=["yourgmail@gmail.com"],
        )

        return Response({"message": "Email sent"}, status=status.HTTP_200_OK)