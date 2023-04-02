from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=30, default="")

    def to_json2(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    category = models.ForeignKey(to=Category, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default="")
    price = models.FloatField(default=0.0)
    description = models.TextField(default="")
    count = models.IntegerField(default=0)
    is_active = models.BooleanField(default=False)

    def to_json(self):
        return {
            'id': self.id,
            'category_id': self.category.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'count': self.count,
            'is_active': self.is_active
        }
