from django.db import models


class Country(models.Model):
    name = models.CharField(max_length=150)

    def __str__(self):
        return self.name


class Hotel(models.Model):
    name = models.CharField(max_length=200)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    rating = models.DecimalField(max_digits=2, decimal_places=1)
    meal_plan = models.CharField(max_length=100)  # 3 mahal, 2 mahal etc
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name


class HotelFeature(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name="features")
    name = models.CharField(max_length=200)

    def __str__(self):
        return f"{self.hotel.name} - {self.name}"


class HotelImage(models.Model):
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="hotels/")

    def __str__(self):
        return self.hotel.name


class Tour(models.Model):
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    hotel = models.ForeignKey(Hotel, on_delete=models.CASCADE)

    departure_city = models.CharField(max_length=150)
    departure_date = models.DateField()

    duration_days = models.PositiveIntegerField()

    regular_price = models.DecimalField(max_digits=10, decimal_places=2)
    discount_price = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    image = models.ImageField(upload_to="tours/")

    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.hotel.name} - {self.departure_date}"
    
class City(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name