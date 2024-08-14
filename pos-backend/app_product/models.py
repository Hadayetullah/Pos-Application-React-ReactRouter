from django.db import models

import uuid

# Create your models here.
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category_title = models.CharField(max_length=255, unique=True)
    
    def __str__(self):
        return self.category_title
    

class SubCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    subcategory_title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.subcategory_title
    


class Variant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    variant_title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return self.variant_title
    


class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product_title = models.CharField(max_length=255, unique=True)
    price = models.FloatField()
    image = models.ImageField(upload_to='uploads/product')
    quantity = models.IntegerField()
    category = models.ForeignKey(Category, related_name='categories', on_delete=models.CASCADE)
    subcategory = models.ForeignKey(SubCategory, related_name='subcategories', on_delete=models.CASCADE)
    variant = models.ForeignKey(Variant, related_name='variants', on_delete=models.CASCADE)
