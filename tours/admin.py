from django.contrib import admin
from .models import Country, Hotel, HotelImage, HotelFeature, Tour, City


# 🔹 HOTEL IMAGES INLINE
class HotelImageInline(admin.TabularInline):
    model = HotelImage
    extra = 3


# 🔹 HOTEL FEATURES INLINE
class HotelFeatureInline(admin.TabularInline):
    model = HotelFeature
    extra = 2


# 🔹 HOTEL ADMIN
@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ("name", "country", "rating", "meal_plan")
    list_filter = ("country", "rating")
    search_fields = ("name",)
    inlines = [HotelImageInline, HotelFeatureInline]


# 🔹 COUNTRY ADMIN
@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


# 🔹 CITY ADMIN (🔥 MUHIM QO‘SHILDI)
@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ("name",)
    search_fields = ("name",)


# 🔹 TOUR ADMIN
@admin.register(Tour)
class TourAdmin(admin.ModelAdmin):
    list_display = (
        "hotel",
        "country",
        "departure_city",
        "departure_date",
        "duration_days",
        "regular_price",
        "discount_price",
        "is_active",
    )
    list_filter = ("is_active", "country", "departure_city")
    search_fields = ("hotel__name", "departure_city")