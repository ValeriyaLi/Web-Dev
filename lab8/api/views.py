from django.http.response import JsonResponse
from api.models import Product
from api.models import Category


def product_list(request):
    # query = str(Product.objects.filter(id='1').query)
    # print(query)
    products = Product.objects.all()
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)


def product_by_id(request, *args, **kwargs):
    id = kwargs['id']
    product = Product.objects.get(id=id)
    product_json = product.to_json()
    return JsonResponse(product_json, safe=False)


def category_list(request):
    categories = Category.objects.all()
    categories_json = [c.to_json2() for c in categories]
    return JsonResponse(categories_json, safe=False)


def category_by_id(request, *args, **kwargs):
    id = kwargs['id']
    category = Category.objects.get(id = id)
    category_json = category.to_json2()
    return JsonResponse(category_json, safe=False)


def products_by_category(request, *args, **kwargs):
    category_id = kwargs['id']
    products = Product.objects.filter(category_id=category_id)
    products_json = [p.to_json() for p in products]
    return JsonResponse(products_json, safe=False)



