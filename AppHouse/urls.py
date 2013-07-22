from django.conf.urls import patterns, include, url
from AppHouseBackend.views import android_page
from AppHouseBackend.views import main_page
from AppHouseBackend.views import page_load
from AppHouseBackend.views import android_prop
from AppHouseBackend.views import update_event
from AppHouseBackend.views import android_code
from AppHouseBackend.views import python_code
from AppHouseBackend.views import android_logic
from AppHouseBackend.views import android_remove
from AppHouseBackend.views import update_andprop
from AppHouseBackend.views import get_ids
from AppHouseBackend.views import get_doc
from AppHouseBackend.views import get_tables
from AppHouseBackend.views import get_columns
from AppHouseBackend.views import create_dbwithtable
from AppHouseBackend.views import insert_table
from AppHouseBackend.views import select_table
from AppHouseBackend.views import create_zip
from AppHouseBackend.views import save_logic

from django.contrib import admin

from django.views.generic import TemplateView

from django.conf import settings

import os
static = os.path.join(os.path.dirname(__file__), 'static')

admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
     (r'^$',main_page),
     (r'^appboard/',TemplateView.as_view(template_name='Index.html')),

     
   
                       
     (r'^static/(?P<path>.*)$', 'django.views.static.serve',{ 'document_root': settings.STATIC_URL,'show_indexes': True }),

     (r'^savelogic/',save_logic),
     (r'^android/',android_page),
     (r'^addevent/',update_event),
     (r'^createzip/',create_zip),
     (r'^getids/',get_ids),                 
     (r'^pageload/',page_load),
     (r'^remandroid/',android_remove),
     (r'^acode/',android_code),
     (r'^alogic/',android_logic),
     (r'^aprop/',android_prop),
     (r'^updateaprop/',update_andprop),
     (r'^documentation/',get_doc),
     (r'^database/',create_dbwithtable),
     (r'^tables/',get_tables),
     (r'^columns/',get_columns),
     (r'^tbins/',insert_table),
     (r'^select/',select_table),
     (r'^pycode/',python_code),
    # url(r'^$', 'AppHouse.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
)
