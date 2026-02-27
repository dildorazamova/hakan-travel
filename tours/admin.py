from django.contrib import admin
from .models import Country, Hotel, HotelImage, HotelFeature, Tour


class HotelImageInline(admin.TabularInline):
    model = HotelImage
    extra = 6


class HotelFeatureInline(admin.TabularInline):
    model = HotelFeature
    extra = 3


@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ("name", "country", "rating", "meal_plan")
    inlines = [HotelImageInline, HotelFeatureInline]


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ("name",)


@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = (
        "hotel",
        "departure_city",
        "departure_date",
        "duration_days",
        "regular_price",
        "discount_price",
        "is_active",
    )
    list_filter = ("is_active", "country")
    search_fields = ("hotel__name", "departure_city")