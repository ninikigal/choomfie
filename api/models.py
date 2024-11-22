from django.db import models

# Create your models here.
class Character(models.Model):
    ROLE_CHOICES = [
        ("rockerboy", "Rockerboy"),
        ("solo", "Solo"),
        ("netrunner", "Netrunner"),
        ("tech", "Tech"),
        ("medtech", "Medtech"),
        ("exec", "Exec"),
        ("lawman", "Lawman"),
        ("fixer", "Fixer"),
        ("nomad", "Nomad"),
    ]

    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    cultural_origin = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.role}) "
