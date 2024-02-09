import graphene
from graphene_django import DjangoObjectType
from .models import UserAccount

class UserAccountQuery(DjangoObjectType):
    class Meta:
        model = UserAccount
        fields = ('id', 'email', 'first_name', 'last_name', 'userType', 'is_superuser')

class Query(graphene.ObjectType):

    all_users = graphene.List(UserAccountQuery)
    user_by_first_name = graphene.Field(UserAccountQuery, first_name=graphene.String(required=True))
    user_by_last_name = graphene.Field(UserAccountQuery, last_name=graphene.String(required=True))
    user_by_email = graphene.Field(UserAccountQuery, email=graphene.String(required=True))
    user_by_user_type = graphene.Field(UserAccountQuery, user_type=graphene.Int(required=True))
    user_by_admin = graphene.Field(UserAccountQuery, admin=graphene.Boolean(required=True))


    def resolve_all_users(root, info):
        return UserAccount.objects.all()
    def resolve_user_by_first_name(root, info, first_name):
        try:
            return UserAccount.objects.filter(first_name=first_name).first()
        except UserAccount.DoesNotExist:
            return None
        
    def resolve_user_by_last_name(root, info, last_name):
        try:
            return UserAccount.objects.filter(last_name=last_name).first()
        except UserAccount.DoesNotExist:
            return None
        
    def resolve_user_by_email(root, info, email):
        try:
            return UserAccount.objects.filter(email=email).first()
        except UserAccount.DoesNotExist:
            return None
        
    def resolve_user_by_user_type(root, info, user_type):
        try:
            return UserAccount.objects.filter(userType=user_type).first()
        except UserAccount.DoesNotExist:
            return None
        
    def resolve_user_by_admin(root, info, admin):
        try:
            return UserAccount.objects.filter(is_superuser=admin).first()
        except UserAccount.DoesNotExist:
            return None

schema = graphene.Schema(query=Query)