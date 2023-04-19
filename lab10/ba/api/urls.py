from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.company_list),
    path('companies/<int:id>/', views.company_by_id),
    path('vacancies/', views.vacancy_list),
    path('vacancies/<int:id>/', views.vacancy_by_id),
    path('companies/<int:id>/vacancies/', views.vacancy_by_company),
    path('vacancies/top_ten/', views.vacancy_top_ten)
]