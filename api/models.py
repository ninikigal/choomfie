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
    cultural_origin = models.CharField(max_length=50, null=True, blank=True)
    languages = models.CharField(max_length=50, null=True, blank=True)
    name = models.CharField(max_length=100)
    clothing_style = models.CharField(max_length=100, null=True, blank=True)
    hairstyle = models.CharField(max_length=100, null=True, blank=True)
    affectation = models.CharField(max_length=100, null=True, blank=True)
    value_most_core = models.CharField(max_length=100, null=True, blank=True)
    feelings_of_people = models.CharField(max_length=100, null=True, blank=True)
    value_most_person = models.CharField(max_length=100, null=True, blank=True)
    value_most_possession = models.CharField(max_length=100, null=True, blank=True)
    family_background = models.TextField(null=True, blank=True)
    childhood_environment = models.TextField(null=True, blank=True)
    family_crisis = models.TextField(null=True, blank=True)
    friends = models.JSONField(null=True, blank=True)
    enemies = models.JSONField(null=True, blank=True)
    lovers = models.JSONField(null=True, blank=True)
    goal = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return f"{self.name} ({self.role}) "

class RockerLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='rocker_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    is_in_group = models.BooleanField(null=True, blank=True)
    was_in_group = models.BooleanField(null=True, blank=True)
    leaving_reason = models.CharField(max_length=100, null=True, blank=True)
    performing_venue = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)

class SoloLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='solo_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    moral_compass = models.CharField(max_length=100, null=True, blank=True)
    territory = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)

class NetrunnerLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='netrunner_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    has_partner = models.BooleanField(null=True, blank=True)
    partner_type = models.CharField(max_length=100, null=True, blank=True)
    workspace = models.CharField(max_length=100, null=True, blank=True)
    clients = models.CharField(max_length=100, null=True, blank=True)
    gets_programs_at = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)

class TechLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='tech_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    has_partner = models.BooleanField(null=True, blank=True)
    partner_type = models.CharField(max_length=100, null=True, blank=True)
    workspace = models.CharField(max_length=100, null=True, blank=True)
    clients = models.CharField(max_length=100, null=True, blank=True)
    gets_supplies_at = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)

class MedtechLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='medtech_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    has_partner = models.BooleanField(null=True, blank=True)
    partner_type = models.CharField(max_length=100, null=True, blank=True)
    workspace = models.CharField(max_length=100, null=True, blank=True)
    clients = models.CharField(max_length=100, null=True, blank=True)
    gets_supplies_at = models.CharField(max_length=100, null=True, blank=True)

class MediaLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='media_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    publication = models.CharField(max_length=100, null=True, blank=True)
    ethics = models.CharField(max_length=100, null=True, blank=True)
    story = models.CharField(max_length=100, null=True, blank=True)

class ExecLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='exec_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    division = models.CharField(max_length=100, null=True, blank=True)
    morals = models.CharField(max_length=100, null=True, blank=True)
    based = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)
    boss_standing = models.CharField(max_length=100, null=True, blank=True)

class LawmanLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='lawman_lifepath')
    positions = models.CharField(max_length=100, null=True, blank=True)
    jurisdiction = models.CharField(max_length=100, null=True, blank=True)
    corrupt = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)
    target = models.CharField(max_length=100, null=True, blank=True)

class FixerLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='fixer_lifepath')
    type = models.CharField(max_length=100, null=True, blank=True)
    has_partner = models.BooleanField(null=True, blank=True)
    partner_type = models.CharField(max_length=100, null=True, blank=True)
    workspace = models.CharField(max_length=100, null=True, blank=True)
    clients = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)

class NomadLifepath(models.Model):
    character = models.OneToOneField(Character, on_delete=models.CASCADE, related_name='nomad_lifepath')
    pack_size = models.CharField(max_length=100, null=True, blank=True)
    work_type = models.CharField(max_length=100, null=True, blank=True)
    work = models.CharField(max_length=100, null=True, blank=True)
    type = models.CharField(max_length=100, null=True, blank=True)
    philosophy = models.CharField(max_length=100, null=True, blank=True)
    opposition = models.CharField(max_length=100, null=True, blank=True)