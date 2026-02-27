from rest_framework import serializers
from .models import Booking
from tours.models import Tour


class BookingSerializer(serializers.ModelSerializer):

    class Meta:
        model = Booking
        fields = ['id', 'tour', 'people_count', 'total_price', 'status', 'created_at']
        read_only_fields = ['total_price', 'status', 'created_at']

    def validate_people_count(self, value):
        if value <= 0:
            raise serializers.ValidationError("People count must be greater than 0.")
        return value

    def validate_tour(self, value):
        if not Tour.objects.filter(id=value.id).exists():
            raise serializers.ValidationError("Selected tour does not exist.")
        return value
    