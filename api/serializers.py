from rest_framework import serializers
from .models import ( 
    Character,
    RockerLifepath,
    SoloLifepath,
    NetrunnerLifepath,
    TechLifepath,
    MedtechLifepath,
    MediaLifepath,
    ExecLifepath,
    LawmanLifepath,
    FixerLifepath,
    NomadLifepath,
)

class CharacterSerializer(serializers.ModelSerializer):
    role_lifepath = serializers.SerializerMethodField()

    class Meta:
        model = Character
        fields = '__all__'

    def get_role_lifepath(self, obj):
        if obj.role == 'rockerboy':
            pass