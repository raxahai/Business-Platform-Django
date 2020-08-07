from django.db import models

# Create your models here.


class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=30)
    category = models.CharField(max_length=50,default="")
    subcategory = models.CharField(max_length=50,default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=200)
    image = models.ImageField(upload_to="shop/images", height_field=None, width_field=None, max_length=None,default="")
    pub_date = models.DateField()

    def __str__(self):
        return self.product_name

class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=30)
    email = models.CharField(max_length=50,default="")
    phone = models.IntegerField(default=0)
    desc = models.CharField(max_length=200)

    def __str__(self):
        return self.name