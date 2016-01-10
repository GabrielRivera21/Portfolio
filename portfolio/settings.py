import os

from configurations import Configuration, values


class Common(Configuration):
    # Build paths inside the project like this: os.path.join(BASE_DIR, ...)
    BASE_DIR = os.path.dirname(os.path.dirname(__file__))

    ENVIRONMENT = values.Value(environ_prefix=None, default='DEVELOPMENT')

    # SECURITY WARNING: keep the secret key used in production secret!
    SECRET_KEY = values.SecretValue()

    # SECURITY WARNING: don't run with debug turned on in production!
    DEBUG = values.BooleanValue(False)

    ALLOWED_HOSTS = ['grp-portfolio.herokuapp.com', '*']

    # Application definition
    INSTALLED_APPS = (
        'django.contrib.admin',
        'django.contrib.auth',
        'django.contrib.contenttypes',
        'django.contrib.sessions',
        'django.contrib.staticfiles',

        # Third party
        'django_extensions',
        'corsheaders',
        'rest_framework',
        'rest_framework_swagger',

        # Apps
        'portfolio.projects',
        'portfolio.skills',
        'portfolio.works',
    )

    MIDDLEWARE_CLASSES = (
        'django.middleware.security.SecurityMiddleware',
        'django.contrib.sessions.middleware.SessionMiddleware',
        'corsheaders.middleware.CorsMiddleware',
        'django.middleware.common.CommonMiddleware',
        'django.middleware.csrf.CsrfViewMiddleware',
        'django.contrib.auth.middleware.AuthenticationMiddleware',
        'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
        'django.contrib.messages.middleware.MessageMiddleware',
        'django.middleware.clickjacking.XFrameOptionsMiddleware',
    )

    ROOT_URLCONF = 'portfolio.urls'

    WSGI_APPLICATION = 'portfolio.wsgi.application'

    # Database
    # https://docs.djangoproject.com/en/1.9/ref/settings/#databases
    DATABASES = values.DatabaseURLValue(
        'sqlite:///{}'.format(os.path.join(BASE_DIR, 'db.sqlite3'))
    )

    # Internationalization
    # https://docs.djangoproject.com/en/1.9/topics/i18n/
    LANGUAGE_CODE = 'en-us'

    TIME_ZONE = 'UTC'

    USE_I18N = False

    USE_L10N = False

    USE_TZ = True

    # Static files (CSS, JavaScript, Images)
    # https://docs.djangoproject.com/en/1.9/howto/static-files/
    MEDIA_ROOT = 'media'
    MEDIA_URL = '/media/'

    STATIC_ROOT = 'staticfiles'
    STATIC_URL = '/static/'

    STATICFILES_DIRS = (os.path.join(BASE_DIR, 'static'),)

    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [
                os.path.join(BASE_DIR, 'templates')
            ],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    "django.contrib.auth.context_processors.auth",
                    "django.core.context_processors.debug",
                    "django.core.context_processors.i18n",
                    "django.core.context_processors.media",
                    "django.core.context_processors.static",
                    "django.core.context_processors.request",
                    "django.contrib.messages.context_processors.messages",
                ],
                'debug': values.BooleanValue(DEBUG)
            },
        },
    ]

    # Password validation
    # https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators
    AUTH_PASSWORD_VALIDATORS = [
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

    REST_FRAMEWORK = {
        'PAGE_SIZE': 30,
        'DEFAULT_PAGINATION_CLASS': 'rest_framework.pagination.PageNumberPagination',
        'DEFAULT_AUTHENTICATION_CLASSES': (
            'rest_framework.authentication.SessionAuthentication',
        ),
        'DEFAULT_PERMISSION_CLASSES': (
            'rest_framework.permissions.IsAuthenticatedOrReadOnly',
        ),
        'DEFAULT_FILTER_BACKENDS': (
            'rest_framework.filters.DjangoFilterBackend',
            'rest_framework.filters.SearchFilter',
            'rest_framework.filters.OrderingFilter',
        )
    }

    SWAGGER_SETTINGS = {
        'exclude_namespaces': [],
        'api_version': '0.1',
        'api_path': '/',
        'enabled_methods': [
            'get',
        ],
        'api_key': '',
        'is_authenticated': False,
        'is_superuser': False,
        'permission_denied_handler': None,
        'info': {
            'contact': 'gabriel.rivera2192@gmail.com',
            'title': 'Portfolio API',
        },
        'doc_expansion': 'none',
    }

    PROTOCOL = 'http'

    DOMAIN = values.Value(environ_prefix=None)

    SITE_NAME = values.Value(environ_prefix=None)

    DEFAULT_FROM_EMAIL = values.Value()
    EMAIL_HOST = values.Value()
    EMAIL_HOST_USER = values.Value()
    EMAIL_HOST_PASSWORD = values.Value()
    EMAIL_PORT = values.IntegerValue()
    EMAIL_USE_TLS = values.BooleanValue(False)


class Development(Common):
    """
    The in-development settings and the default configuration.
    """
    DEBUG = True

    ALLOWED_HOSTS = []

    INSTALLED_APPS = Common.INSTALLED_APPS + (
        'debug_toolbar',
    )

    EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

    DEBUG_TOOLBAR_PATCH_SETTINGS = values.BooleanValue(True)


class Staging(Common):
    """
    The in-staging settings.
    """
    INSTALLED_APPS = Common.INSTALLED_APPS + (
        'storages',
    )

    # django-secure now integrated inside django 1.8+
    SESSION_COOKIE_SECURE = values.BooleanValue(True)
    SECURE_SSL_REDIRECT = values.BooleanValue(True)
    SECURE_HSTS_SECONDS = values.IntegerValue(31536000)
    SECURE_HSTS_INCLUDE_SUBDOMAINS = values.BooleanValue(True)
    SECURE_FRAME_DENY = values.BooleanValue(True)
    SECURE_CONTENT_TYPE_NOSNIFF = values.BooleanValue(True)
    SECURE_BROWSER_XSS_FILTER = values.BooleanValue(True)
    SECURE_PROXY_SSL_HEADER = values.TupleValue(
        ('HTTP_X_FORWARDED_PROTO', 'https')
    )

    AWS_ACCESS_KEY_ID = values.Value(environ_prefix=None)
    AWS_SECRET_ACCESS_KEY = values.Value(environ_prefix=None)
    AWS_STORAGE_BUCKET_NAME = 'portfolio'
    AWS_QUERYSTRING_AUTH = values.BooleanValue(False)

    S3_URL = 'http://%s.s3.amazonaws.com/' % AWS_STORAGE_BUCKET_NAME
    MEDIA_ROOT = '/media/'
    MEDIA_URL = S3_URL + MEDIA_ROOT
    DEFAULT_FILE_STORAGE = 'storages.backends.s3boto.S3BotoStorage'

    EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'

    PROTOCOL = 'https'


class Production(Staging):
    """
    The in-production settings.
    """
    pass
