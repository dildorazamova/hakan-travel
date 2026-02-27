from rest_framework import serializers
from .models import Country, Hotel, HotelImage, HotelFeature, Tour,City



class HotelImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelImage
        fields = ["id", "image"]


class HotelFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = HotelFeature
        fields = ["id", "name"]


class HotelSerializer(serializers.ModelSerializer):
    images = HotelImageSerializer(many=True, read_only=True)
    features = HotelFeatureSerializer(many=True, read_only=True)

    class Meta:
        model = Hotel
        fields = [
            "id",
            "name",
            "rating",
            "meal_plan",
            "description",
            "images",
            "features",
        ]


class TourSerializer(serializers.ModelSerializer):
    hotel = HotelSerializer(read_only=True)
    country = serializers.StringRelatedField()

    class Meta:
        model = Tour
        fields = [
            "id",
            "country",
            "hotel",
            "departure_city",
            "departure_date",
            "duration_days",
            "regular_price",
            "discount_price",
            "image",
        ]



class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = "__all__"