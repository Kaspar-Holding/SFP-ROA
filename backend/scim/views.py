import secrets
from rest_framework.decorators import APIView
from .serializers import APIKeysSerializers
from .models import APIKeys
from data.models import UserAccount
from data.serializers import UserAccountsSerializers
from rest_framework.response import Response
from rest_framework import status

from django.contrib.auth.models import AnonymousUser

import environ
env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)

from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed

class APIKeyAuthentication(BaseAuthentication):
    def authenticate(self, request):
        api_key = request.headers.get('X-API-KEY')
        if not api_key:
            return None

        if not APIKeys.objects.filter(api_key=api_key).exists():
            raise AuthenticationFailed('Invalid API key')

        return (None, api_key)
    
from rest_framework.permissions import BasePermission

class IsAPIKeyAuthenticated(BasePermission):
    def has_permission(self, request, view):
        return bool(request.auth)

class scimAPIView(APIView):
    # Then in your view
    authentication_classes = [APIKeyAuthentication]
    permission_classes = [IsAPIKeyAuthenticated]

    def get(self, request, sanport_id, *args, **kwargs):
        # Your logic for getting the user based on SanPort data
        try:
            user = UserAccount.objects.get(sanport_id=sanport_id)
        except UserAccount.DoesNotExist:
            return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response(UserAccountsSerializers(user).data, status=status.HTTP_200_OK)


    def post(self, request, sanport_id, *args, **kwargs):
        # Your logic for creating a new user based on SanPort data
        if UserAccount.objects.filter(sanport_id=sanport_id).exists():
            return Response({'detail': 'User exists'}, status=status.HTTP_400_BAD_REQUEST)
        scim_data = request.data
        serializer = UserAccountsSerializers(data=scim_data)
        if serializer.is_valid():
            user = serializer.save()
            return Response(UserAccountsSerializers(user).data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, sanport_id, *args, **kwargs):
        # Your logic for updating an existing user based on SanPort data
        try:
            user = UserAccount.objects.get(sanport_id=sanport_id)
        except UserAccount.DoesNotExist:
            return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = UserAccountsSerializers(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(UserAccountsSerializers(user).data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, sanport_id, *args, **kwargs):
        # Your logic for deleting a user based on SanPort ID
        try:
            user = UserAccount.objects.get(sanport_id=sanport_id)
            user.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except UserAccount.DoesNotExist:
            return Response({'detail': 'User not found'}, status=status.HTTP_404_NOT_FOUND)


class APIKeyView(APIView):
    authentication_classes = [APIKeyAuthentication]
    permission_classes = [IsAPIKeyAuthenticated]
    def get(self, request, api_key):
        try:
            api_key = APIKeys.objects.get(api_key=api_key)
        except UserAccount.DoesNotExist:
            return Response({'detail': 'API Key not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response(APIKeysSerializers(api_key).data, status=status.HTTP_200_OK)
    
    def post(self, request, api_key):
        api_key = f"kcs_{secrets.token_hex(16)}"
        apiData = {
            "api_key": api_key,
            "expires": False,
            "expires_on": None
        }
        print(apiData)


        serializer = APIKeysSerializers(data=apiData)
        if serializer.is_valid():
            serializer.create(serializer.validated_data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, api_key):
        
        try:
            api_key = APIKeys.objects.get(api_key=api_key)
            api_key.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except APIKeys.DoesNotExist:
            return Response({'detail': 'API key not found'}, status=status.HTTP_404_NOT_FOUND)