from django.shortcuts import render
from django.http import HttpResponse
from .models import Product, Contact

# Create your views here.


def shop_index(request):
    allProds = []
    catProds = Product.objects.values('category')
    cats = {item['category'] for item in catProds}
    for cat in cats:
        prod = Product.objects.filter(category=cat)
        n = len(prod)
        if n % 4 == 0:
            n = n//4
        else:
            n = (n//4) + 1
        allProds.append([prod,range(n),cat])
        # print(prod.pr)
    params = {
        'allProds': allProds
    }
    return render(request, 'shop/index.html',params)

def about(request):
    return render(request, 'shop/about.html')

def contact(request):
    if request.method == "POST":
        name = request.POST.get('name','')
        email = request.POST.get('email','')
        phone = request.POST.get('phone','')
        desc = request.POST.get('desc','')
        print(name,email,phone,desc)
        info = Contact(name=name,email=email,phone=phone,desc=desc)
        info.save()
    return render(request, 'shop/contact.html')

def tracker(request):
    return render(request, 'shop/tracker.html')

def search(request):
    return render(request, 'shop/search.html')

def prodView(request,pk):
    product = Product.objects.filter(id=pk)

    params = {'product':product[0]}

    return render(request, 'shop/prodView.html',params)

def checkout(request):
    return render(request, 'shop/checkout.html')
