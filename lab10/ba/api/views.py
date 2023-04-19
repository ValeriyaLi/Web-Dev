from django.db.models import Max
from django.http.response import JsonResponse
from api.models import Company
from api.models import Vacancy
from api.serializers import CompanySerializer1, CompanySerializer2, VacancySerializer
import json


def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer1(companies, many=True)
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        serializer = CompanySerializer2(company)
        return JsonResponse(serializer.data, safe=False)



def company_by_id(request, *args, **kwargs):
    id = kwargs['id']
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer2(company)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        company.name = new_company_name
        company.save()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


def vacancy_list(request):
    if request.methd == 'GET':
        vacancies = Vacancy.objects.all()
        try:
            serializer = VacancySerializer(vacancies, many=True)
        except Company.DoesNotExist as e:
            return JsonResponse({'error': str(e)})
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        vacancy_name = data.get('name', '')
        vacancy = Vacancy.objects.create(name=vacancy_name)
        serializer = CompanySerializer2(vacancy)
        return JsonResponse(serializer.data, safe=False)


def vacancy_by_id(request, *args, **kwargs):
    id = kwargs['id']
    try:
        vacancy = Vacancy.objects.get(id=id)
        serializer = VacancySerializer(vacancy, many=False)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(serializer.data, safe=False)
    if request.method == 'PUT':
        data = json.loads(request.body)
        new_vacancy_name = data.get('name', vacancy.name)
        vacancy.name = new_vacancy_name
        vacancy.save()
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def vacancy_by_company(request, *args, **kwargs):
    company_id = kwargs['id']
    try:
        vacancies = Vacancy.objects.filter(company_id=company_id)
        serializer = VacancySerializer(vacancies, many=True)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(serializer.data, safe=False)


def vacancy_top_ten(request):
    vacancies = Vacancy.objects.annotate(max_salary=Max('salary')).order_by('-max_salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)
