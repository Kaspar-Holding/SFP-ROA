from django.db import models

# Create your models here.
class APIKeys(models.Model):
    api_key = models.TextField()
    expires = models.BooleanField(default=False)
    expires_on = models.DateTimeField(null=True, blank=True)