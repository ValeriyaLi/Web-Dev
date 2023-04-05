from django.db.models import Max
from django.http.response import JsonResponse
from api.models import Company
from api.models import Vacancy


def company_list(request):
    companies = Company.objects.all()
    try:
        companies_json = [c.to_json() for c in companies]
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(companies_json, safe=False)


def company_by_id(request, *args, **kwargs):
    id = kwargs['id']
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    return JsonResponse(company.to_json(), safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    try:
        vacancy_json = [v.to_json() for v in vacancies]
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy_json, safe=False)


def vacancy_by_id(request, *args, **kwargs):
    id = kwargs['id']
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacancy.to_json(), safe=False)

def vacancy_by_company(request, *args, **kwargs):
    company_id = kwargs['id']
    try:
        vacancies = Vacancy.objects.filter(company_id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    cavancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(cavancies_json, safe=False)


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.annotate(max_salary=Max('salary')).order_by('-max_salary')[:10]
    vacancies2 = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies2, safe=False)
