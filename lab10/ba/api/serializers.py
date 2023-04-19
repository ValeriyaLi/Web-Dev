from rest_framework import serializers
from .models import Company, Vacancy


class CompanySerializer1 (serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    address = serializers.CharField()


class CompanySerializer2 (serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')


class VacancySerializer (serializers.ModelSerializer):
    class Meta:
        model = Vacancy
        fields = ('id', 'company', 'name', 'description', 'salary')