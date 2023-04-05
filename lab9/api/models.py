from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=50, default="")
    description = models.TextField(default="")
    city = models.CharField(max_length=30, default="")
    address = models.TextField(default="")

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }

    def __str__(self):
        return f'{self.name}, {self.city}, {self.address}'


class Vacancy(models.Model):
    company = models.ForeignKey(to=Company, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, default="")
    description = models.TextField(default="")
    salary = models.FloatField(default=0.0)

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def to_json(self):
        return {
            'id': self.id,
            'company_id': self.company_id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary
        }

    def __str__(self):
        return f'{self.name}, {self.salary}, {self.company}'
