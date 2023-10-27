'''
Django settings for sfp project.

Generated by 'django-admin startproject' using Django 4.1.2.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
'''

from urllib.parse import quote
import django
django.utils.http.urlquote = quote
from datetime import timedelta
import os
from pathlib import Path
import environ

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
env = environ.Env(
    # set casting, default value
    DEBUG=(bool, False)
)
environ.Env.read_env(os.path.join(BASE_DIR, '.env'))

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS=['*']

CORS_ORIGIN_ALLOW_ALL = True


CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
)




# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django.contrib.postgres',
    'wkhtmltopdf',
    'data',
    'compliance',
    'printingApp',
    'emailApp',
    'rest_framework',
    'rest_framework.authtoken',
    'djoser',
    'rest_framework_simplejwt',
    'rest_framework_simplejwt.token_blacklist',
    'social_django',
    'frontend',
    'users',
    'insights',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'social_django.middleware.SocialAuthExceptionMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'sfp.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
                'social_django.context_processors.backends',
                'social_django.context_processors.login_redirect',
            ],
        },
    },
]

WSGI_APPLICATION = 'sfp.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.1/ref/settings/#databases

DATABASES = {
    'default': {
        # 'ENGINE': 'django.db.backends.sqlite3',
        # 'NAME': BASE_DIR / 'db.sqlite3',
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': env('DJANGO_DATABASE_NAME'),
        'USER' : env('DJANGO_DATABASE_USER'),
        'PASSWORD' : env('DJANGO_DATABASE_PASSWORD'),
        'HOST' : env('DJANGO_DATABASE_HOST'),
        'PORT' : env('DJANGO_DATABASE_PORT')
    }
}


# Password validation
# https://docs.djangoproject.com/en/4.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

# WKHTMLTOPDF_CMD = 'C:/Program Files/wkhtmltopdf/bin/wkhtmltopdf'
WKHTMLTOPDF_CMD_OPTIONS = {
    'quiet': True, 'enable-local-file-access': True, 'disable-javascript' : True
}

# Internationalization
# https://docs.djangoproject.com/en/4.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True

STATIC_ROOT = BASE_DIR

STATIC_URL = '/static/'

STATICFILES_DIRS = ('static',)
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static/'),
    os.path.join(BASE_DIR, 'static'),
]
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images/')

# STATICFILES_DIRS = [
#     os.path.join(BASE_DIR, 'static')
# ]

# STATIC_ROUTE = os.path.join(BASE_DIR,'static')

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES' : [
        'rest_framework.permissions.IsAuthenticated',
        # 'rest_framework.permissions.IsAdminUser'
    ] ,
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    ),
}


SIMPLE_JWT = {
    'AUTH_HEADER_TYPES': ('JWT',),
    'ACCESS_TOKEN_LIFETIME': timedelta(hours=10),
    'REFRESH_TOKEN_LIFETIME': timedelta(hours=10),
}

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_HOST_USER = 'sfpkcstesting@gmail.com'
EMAIL_HOST_PASSWORD = 'qxgcuapwdoizdkzt'
EMAIL_USE_TLS = True

 

AUTHENTICATION_BACKENDS = (
    'social_core.backends.azuread.AzureADOAuth2',
    'social_core.backends.google.GoogleOAuth2',
    'django.contrib.auth.backends.ModelBackend',
)

DJOSER = {
    'LOGIN_FIELD' : 'email',
    'USER_CREATE_PASSWORD_RETYPE': True,
    'USERNAME_CHANGED_EMAIL_CONFIRMATION': True,
    'PASSWORD_CHANGED_EMAIL_CONFIRMATION': True,
    'SEND_EMAIL_CONFIRMATION': True,
    'LOGOUT_ON_PASSWORD_CHANGE': False,
    'ACTIVATION_URL': 'activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': False,
    'SET_USERNAME_RETYPE': True,
    'SET_PASSWORD_RETYPE': True,
    'PASSWORD_RESET_CONFIRM_URL': 'password/reset/confirm/{uid}/{token}',
    'PASSWORD_RESET_SHOW_EMAIL_NOT_FOUND': 'password/reset/confirm/{uid}/{token}',
    'USERNAME_RESET_SHOW_EMAIL_NOT_FOUND': 'email/reset/confirm/{uid}/{token}',
    'SOCIAL_AUTH_TOKEN_STRATEGY': 'djoser.social.token.jwt.TokenStrategy',
    'SOCIAL_AUTH_ALLOWED_REDIRECT_URIS': [env('SOCIAL_REDIRECT_URI')],
    'SERIALIZERS': {
        'user_create' : 'data.serializers.UserCreateSerializer',
        'user_delete' : 'djoser.serializers.UserDeleteSerializer',
        'user' : 'djoser.serializers.UserSerializer'
    },
    'EMAIL' : {
        'password_reset': 'emailApp.views.PasswordResetEmail',
        'password_changed_confirmation': 'emailApp.views.PasswordChangedConfirmationEmail',
    }
}


# SOCIAL_AUTH_GOOGLE_OAUTH2_KEY = env('SOCIAL_AUTH_GOOGLE_OAUTH2_KEY')
# SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET = env('SOCIAL_AUTH_GOOGLE_OAUTH2_SECRET')
# SOCIAL_AUTH_GOOGLE_OAUTH2_SCOPE = ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'openid']
# SOCIAL_AUTH_GOOGLE_OAUTH2_EXTRA_DATA = ['first_name','last_name']

SOCIAL_AUTH_AZUREAD_OAUTH2_KEY = env('SOCIAL_AUTH_AZUREAD_OAUTH2_KEY')
SOCIAL_AUTH_AZUREAD_OAUTH2_SECRET = env('SOCIAL_AUTH_AZUREAD_OAUTH2_SECRET')
SOCIAL_AUTH_AZUREAD_OAUTH2_SCOPE = ['https://graph.microsoft.com/User.Read','openid']
SOCIAL_AUTH_AZUREAD_OAUTH2_EXTRA_DATA = ['first_name','last_name']

SOCIAL_AUTH_SAML_SP_ENTITY_ID = "https://saml.kasparholdings.com/saml2_auth/acs/"
SOCIAL_AUTH_SAML_SP_PUBLIC_CERT = "MIIDqjCCApKgAwIBAgIGAYr59OhEMA0GCSqGSIb3DQEBCwUAMIGVMQswCQYDVQQGEwJVUzETMBEG A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU MBIGA1UECwwLU1NPUHJvdmlkZXIxFjAUBgNVBAMMDXRyaWFsLTg2OTEyMDcxHDAaBgkqhkiG9w0B CQEWDWluZm9Ab2t0YS5jb20wHhcNMjMxMDA0MDkxMDMxWhcNMzMxMDA0MDkxMTMxWjCBlTELMAkG A1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTAL BgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRYwFAYDVQQDDA10cmlhbC04NjkxMjA3 MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB CgKCAQEAuvGYcWh0H3Y8oMPPtokAfJYPgW0uWlTbcbRJHCX8ZzVGVb8Uykf02WjqW0jXZA7z1oZc QJDZkltd/JTLxEqETQfvq60FrsGHgMMNDNfoWY4461yflo/NxZyROwUdRDnVpxxWRamSQqujxRlP pXhM742gFtxplEtahqBpH/p3eIDbLTroTdrO1kkgfjv9tWC4IWvjMomlLJE9jhEp3wAgIVQ+Epjf 09hjuIZ+Zv4tYI02ntS8OiCPZOk3AzKV7tXoIXn6YKVK1PGjtWNEk/0inSjACKMUDAyBJjL/8OaU gwxjjtcWQf0MbyLwPecjAU5o6zdDcrBuy1tlOSjqlFfBlwIDAQABMA0GCSqGSIb3DQEBCwUAA4IB AQBX1jKoBjCnJXOb3NcoS+oBrRbEb/VZpoKJnfGRb5qyiljPElo8nQMcHYWYpKwFqpqNaTpwNHox sfT/Jm+dETMsrPMmC9cysV/8WeP5rIDpNMWh7qZX/m15b81pq5B/ZpsMI1qSBu5UBvVDlfHFF5wT 4jpZfXQUMyNGSbjX7WC8/wF3nARrheTr0JF80lpzN//9hctIOnFv18mGN0PXWtnFKgneH/CtU1mc txxqogs7n2aQIhApYDrIRGKefoLVTxCVTLGHXbkK8IJxEHsKfAU6nAIfgCn2YcXpBf1OXfN6Hj4f u0AnhRIdhp32B9sDbnRZfbEWk0Kgd3DxtpDyIIhZ"
SOCIAL_AUTH_SAML_ORG_INFO = {
    "en-US": {
        "name": "KASPAR",
        "displayname": "KASPAR",
        "url": "https://kasparholdings.com"
    }
}
SOCIAL_AUTH_SAML_TECHNICAL_CONTACT = {
    "givenName": "Armughan",
    "emailAddress": "armughan.ahmad@kasparholdings.com"
}
SOCIAL_AUTH_SAML_SUPPORT_CONTACT = {
    "givenName": "Armughan",
    "emailAddress": "armughan.ahmad@kasparholdings.com"
}
SOCIAL_AUTH_SAML_ENABLED_IDPS = {
    "okta": {
        "entity_id": "http://www.okta.com/exk8kh9g2gFSsEB0u697",
        "url": "https://trial-8691207.okta.com/app/trial-8691207_djangosso_1/exk8kh9g2gFSsEB0u697/sso/saml",
        "x509cert": "MIIDqjCCApKgAwIBAgIGAYr59OhEMA0GCSqGSIb3DQEBCwUAMIGVMQswCQYDVQQGEwJVUzETMBEG A1UECAwKQ2FsaWZvcm5pYTEWMBQGA1UEBwwNU2FuIEZyYW5jaXNjbzENMAsGA1UECgwET2t0YTEU MBIGA1UECwwLU1NPUHJvdmlkZXIxFjAUBgNVBAMMDXRyaWFsLTg2OTEyMDcxHDAaBgkqhkiG9w0B CQEWDWluZm9Ab2t0YS5jb20wHhcNMjMxMDA0MDkxMDMxWhcNMzMxMDA0MDkxMTMxWjCBlTELMAkG A1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExFjAUBgNVBAcMDVNhbiBGcmFuY2lzY28xDTAL BgNVBAoMBE9rdGExFDASBgNVBAsMC1NTT1Byb3ZpZGVyMRYwFAYDVQQDDA10cmlhbC04NjkxMjA3 MRwwGgYJKoZIhvcNAQkBFg1pbmZvQG9rdGEuY29tMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB CgKCAQEAuvGYcWh0H3Y8oMPPtokAfJYPgW0uWlTbcbRJHCX8ZzVGVb8Uykf02WjqW0jXZA7z1oZc QJDZkltd/JTLxEqETQfvq60FrsGHgMMNDNfoWY4461yflo/NxZyROwUdRDnVpxxWRamSQqujxRlP pXhM742gFtxplEtahqBpH/p3eIDbLTroTdrO1kkgfjv9tWC4IWvjMomlLJE9jhEp3wAgIVQ+Epjf 09hjuIZ+Zv4tYI02ntS8OiCPZOk3AzKV7tXoIXn6YKVK1PGjtWNEk/0inSjACKMUDAyBJjL/8OaU gwxjjtcWQf0MbyLwPecjAU5o6zdDcrBuy1tlOSjqlFfBlwIDAQABMA0GCSqGSIb3DQEBCwUAA4IB AQBX1jKoBjCnJXOb3NcoS+oBrRbEb/VZpoKJnfGRb5qyiljPElo8nQMcHYWYpKwFqpqNaTpwNHox sfT/Jm+dETMsrPMmC9cysV/8WeP5rIDpNMWh7qZX/m15b81pq5B/ZpsMI1qSBu5UBvVDlfHFF5wT 4jpZfXQUMyNGSbjX7WC8/wF3nARrheTr0JF80lpzN//9hctIOnFv18mGN0PXWtnFKgneH/CtU1mc txxqogs7n2aQIhApYDrIRGKefoLVTxCVTLGHXbkK8IJxEHsKfAU6nAIfgCn2YcXpBf1OXfN6Hj4f u0AnhRIdhp32B9sDbnRZfbEWk0Kgd3DxtpDyIIhZ",
        "attr_user_permanent_id": "Email",
        "attr_first_name": "FirstName",
        "attr_last_name": "LastName",
        "attr_username": "Email",
        "attr_email": "Email",
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.1/howto/static-files/

# STATIC_URL = 'static/'

# Default primary key field type
# https://docs.djangoproject.com/en/4.1/ref/settings/#default-auto-field


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTH_USER_MODEL = 'data.UserAccount'