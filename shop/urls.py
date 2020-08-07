from django.urls import path
from . import views

urlpatterns = [
    path("",views.shop_index,name='shopIndex'),
    path("about/",views.about,name='aboutUs'),
    path("contact/",views.contact,name='contactUs'),
    path("tracker/",views.tracker,name='trackingStatus'),
    path("search/",views.search,name='search'),
    path("products/<int:pk>",views.prodView,name='productView'),    
    path("checkout/",views.checkout,name='checkout'),
]