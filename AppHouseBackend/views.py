from django.shortcuts import render
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.core.context_processors import csrf
import xml.etree.ElementTree as ET
from xml.etree.ElementTree import Element
from django.utils import simplejson
import sqlite3
import json
import zipfile

# Create your views here.

def save_logic(request):
   code = request.GET['logic']
   f = open('./logics.js',"wb")
   f.write(code)
   f.close()

def get_ids(request):
   tree = ET.parse('./android.xml')
   root = tree.getroot()
   ids = []
   for elem in tree.findall('*'):
      ids.append(elem.get('id'))
   json = simplejson.dumps(ids)
   return HttpResponse(json, mimetype='application/json')
   
def create_zip(request):
   zf = zipfile.ZipFile('C:/AppHouse/MyApp.zip',"w")
   zf.write('c:/AppHouse/index.html')
   zf.write('c:/AppHouse/logics.js')
   zf.close()
   return HttpResponse("success")



def main_page(request):
   code = 'Hello World'
   return HttpResponse(code)
  
def page_load(request):
   f = open('./androidsource.txt',"r+" )
   lines = f.readlines()
   f.close()
   f = open('./index.html',"wb" )
   f.writelines(lines)
   f.close()
   tree = ET.parse('./android.xml')
   root = tree.getroot()
   root.clear()
   tree.write('./android.xml')
   code = 'Hello World'
   f = open('./logics.js',"wb")
   free = []
   logicmark = "\n<!---append logic here---!>\n"
   free.append(logicmark)
   f.writelines(free)
   f.close()
   f = open('./python.txt',"wb")
   free = []
   logicmark = "\n<!---append python code here---!>\n"
   free.append(logicmark)
   f.writelines(free)
   f.close()

   tree = ET.parse('./install/logics/logics.xml')
   root = tree.getroot()
   idhtml = []
   for elem in tree.findall('*'):
      idhtml.append(elem.get('id')+"-"+elem.get('innerhtml'))
   json = simplejson.dumps(idhtml)
   return HttpResponse(json, mimetype='application/json')
 
def save_page(request):
   code = 'Hello World'
   return HttpResponse(code)

def update_andprop(request):
    f = open('./index.html',"r+")
    lines = f.readlines()
    f.close()
    f = open('./index.html',"wb")
    tree = ET.parse('./android.xml')
    root = tree.getroot()
    xpstr = ".//*[@id='" + request.GET['id'] + "']"
    eid = request.GET['id']
    etype = request.GET['type']
    ename = request.GET['name']
    etext = request.GET['text']
    eevent = request.GET['event']
    for elem in tree.findall(xpstr):
       elem.set('name',ename)
       elem.set('text',etext)
       elem.set('event',eevent)
    tree.write('./android.xml')
    count = 0
    for line in lines:
       count = count + 1
       if line.find(eid)>-1:
          ind = count - 1
    lines.pop(ind)

    if etype == 'button':
        #tag = "<button id = '" eid + "' name = '" + ename + "' text = '" + etext + "'>\n"
        tag = "<input type = 'button' id = '" + eid + "' name = '" + ename + "' value = '" + etext + "' onClick=" + eevent +"()" + ">\n"
    elif elemtype == 'br':
        tag = "<br id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"
    elif elemtype == 'check':
        tag = "<input type = 'checkbox' id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"
    elif elemtype == 'combo':
        tag = "<select id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'><option></option></select>\n" 
    elif elemtype == 'password':
        tag = "<input type = 'password' id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"    
    elif elemtype == 'image':
        tag = "<img src = '' id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"       
    elif elemtype == 'radio':
        tag = "<input type = 'radio' id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"
    elif elemtype == 'text':
        tag = "<input type = 'text' id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"
    elif elemtype == 'label':
        tag = "<div id = '" + eid + "' name = '" + ename + "' text = '" + etext + "'>\n"

    lines.insert(ind,tag)
    f.writelines(lines)
    f.close()
    return HttpResponse(tag)

def android_page(request):
    uiid = ""

    ty = request.GET['elem']
    if ty.find('text')>-1:
       ty = 'text'
    elif ty.find('button')>-1:
       ty = 'button'
    elif ty.find('calendar')>-1:
       ty = 'calendar'
    elif ty.find('camera')>-1:
       ty = 'camera'
    elif ty.find('gallery')>-1:
       ty = 'gallery'
    elif ty.find('br')>-1:
       ty = 'br'
    elif ty.find('check')>-1:
       ty = 'check'
    elif ty.find('combo')>-1:
       ty = 'combo'
    elif ty.find('password')>-1:
       ty = 'password'
    elif ty.find('image')>-1:
       ty = 'image'
    elif ty.find('radio')>-1:
       ty = 'radio'
    elif ty.find('label')>-1:
       ty = 'label'
    elif ty.find('helloworld')>-1:
       ty = 'helloworld'
    elif ty.find('addtwono')>-1:
       ty = 'addtwono'
    elif ty.find('subtwono')>-1:
       ty = 'subtwono'
    elif ty.find('addthreeno')>-1:
       ty = 'addthreeno'
    elif ty.find('table')>-1:
       ty = 'table'
    elif ty.find('div')>-1:
       ty = 'div'
       
    f = open('./index.html',"r+" )
    lines = f.readlines()
    f.close()

    tree = ET.parse('./android.xml')
    root = tree.getroot()
    xpstr = ".//*[@type='" + ty + "']"
    elemid = root.findall(xpstr)
    count = 0
    for el in elemid:
        count = count + 1
    ui = Element("UI")
    ui.set('type',ty)
    elemtype = ty
    
    if elemtype == 'button':
        ui.set('id','bt'+str(count)) 
        uiid = 'bt'+str(count)
        tag = "<input type = 'button' id = '" + 'bt'+str(count) + "'>\n"
    elif elemtype == 'br':
        ui.set('id','br'+str(count))
        uiid = 'br'+str(count)
        tag = "<br id = '" + 'br'+str(count) + "'>\n"
    elif elemtype == 'div':
        ui.set('id','dv'+str(count))
        uiid = 'dv'+str(count)
        tag = "<div id = '" + 'dv'+str(count) + "'>\n"
    elif elemtype == 'table':
        ui.set('id','ta'+str(count))
        uiid = 'ta'+str(count)
        tag = "<table border = '0' id = '" + 'ta'+str(count) + "'></table>\n"
    elif elemtype == 'calendar':
        ui.set('id','ca'+str(count))
        uiid = 'ca'+str(count)
        tag = "<input type = 'text' id = '" + 'ca'+str(count) + "'>\n"
        datepicker = "$(function() { $( '# " + 'ca'+str(count) + "' ).datepicker(); });"
    elif elemtype == 'check':
        ui.set('id','ch'+str(count))
        uiid = 'ch'+str(count)
        tag = "<input type = 'checkbox' id = '" + 'ch'+str(count) + "'>\n"
    elif elemtype == 'combo':
        ui.set('id','cm'+str(count))
        uiid = 'cm'+str(count)
        tag = "<select id = '" + 'cm'+str(count) + "'><option></option></select>\n" 
    elif elemtype == 'password':
        ui.set('id','pw'+str(count))
        uiid = 'pw'+str(count)
        tag = "<input type = 'password' id = '" + 'pw'+str(count) + "'>\n"    
    elif elemtype == 'image':
        ui.set('id','im'+str(count))
        uiid = 'im'+str(count)
        tag = "<img src = '' id = '" + 'im'+str(count) + "'>\n"       
    elif elemtype == 'radio':
        ui.set('id','ra'+str(count))
        uiid = 'ra'+str(count)
        tag = "<input type = 'radio' id = '" + 'ra'+str(count) + "'>\n"
    elif elemtype == 'text':
        ui.set('id','tb'+str(count))
        uiid = 'tb'+str(count)
        tag = "<input type = 'text' id = '" + 'tb'+str(count) + "'>\n"
    elif elemtype == 'label':
        ui.set('id','lb'+str(count))
        uiid = 'lb'+str(count)
        tag = "<div id = '" + 'lb'+str(count) + "'>\n"
    elif elemtype == 'helloworld':
        ui.set('id','hw'+str(count))
        uiid = 'hw'+str(count)
        tag = "<p id = '" + 'hw'+str(count) + "'>Hello World Logic</p>\n"
        #tag = ""
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/helloworld.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el + "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    elif elemtype == 'addtwono':
        ui.set('id','a2'+str(count))
        uiid = 'a2'+str(count)
        tag = "<p id = '" + 'a2'+str(count) + "'>Add two number Logic</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/addtwono.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    elif elemtype == 'subtwono':
        ui.set('id','s2'+str(count))
        uiid = 's2'+str(count)
        tag = "<p id = '" + 's2'+str(count) + "'>Sub two number Logic</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/subtwono.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    elif elemtype == 'addthreeno':
        ui.set('id','a3'+str(count))
        uiid = 'a3'+str(count)
        tag = "<p id = '" + 'a3'+str(count) + "'>Add three number Logic</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/addthreeno.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    elif elemtype == 'camera':
        ui.set('id','cp'+str(count))
        uiid = 'cp'+str(count)
        tag = "<p id = '" + 'cp'+str(count) + "'>Camera capture</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/camcapture.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    elif elemtype == 'gallery':
        ui.set('id','ga'+str(count))
        uiid = 'ga'+str(count)
        tag = "<p id = '" + 'ga'+str(count) + "'>Load gallery</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        f = open('./logics/gallery.txt',"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
    else:
        ui.set('id',elemtype+str(count))
        uiid = elemtype+str(count)
        tag = "<p id = '" + uiid + "'>" + uiid + "</p>\n"
        logicmark = "<!---append logic here---!>\n"
        f = open('./logics.js',"r+")
        logiclines = f.readlines()
        f.close()
        filename = elemtype+'.txt'
        f = open('./logics/' + filename,"r+")
        hwlines = f.readlines()
        f.close()
        lmindex = logiclines.index(logicmark)
        hwlines.reverse()
        for el in hwlines:
           logiclines.insert(lmindex,el +  "\n")
        f = open('./logics.js',"wb")
        f.writelines(logiclines)
        f.close()
        
        
    

        
                 
    root.append(ui)
    tree.write('./android.xml')

    bookmark = "<!---append code here---!>\n"

    ind = lines.index(bookmark)

    lines.insert(ind,tag)
    
    #content = tag + ' ' + bookmark
    #string = code.replace(bookmark,content)
    
    f = open('C:/AppHouse/index.html',"wb")
    f.writelines(lines)
    f.close()

    f = open('./index.html',"r+" )
    code = f.read()
    f.close()
       
    return HttpResponse(uiid)

def update_event(request):
    f = open('./index.html',"r+")
    elem = request.GET['elem']
    elemevent = elem.split("-")
    eventelem = elemevent[0]
    eventname = elemevent[1]
    lines = f.readlines()
    f.close()
    count = 0
    for el in lines:
       count = count + 1
       if el.find(eventelem) > -1:
          tag = el
          index = count
    tag = tag[:-2]
    event = "onclick = '" + eventname + "' "
    newtag = tag + " " + event + " >\n"
    lines.pop(index-1)
    lines.insert(index,newtag)
    f = open('./index.html',"wb")
    f.writelines(lines)
    f.close()
   
def android_remove(request):
    f = open('./index.html',"r+")
    delelem = request.GET['elem']
    lines = f.readlines()
    f.close()
    count = 0
    ind = 0
    for line in lines:
       count = count + 1
       if line.find(delelem)>-1:
          ind = count - 1
          lines.pop(ind)
    f = open('./index.html',"wb")
    f.writelines(lines)
    f.close()

    tree = ET.parse('./android.xml')
    root = tree.getroot()
    xpstr = ".//*[@id='" + request.GET['elem'] + "']"
    for elem in tree.findall(xpstr):
       root.remove(elem)
    tree.write('./android.xml')
    return HttpResponse(ind)

def android_code(request):
    f = open('./index.html',"r+")
    code = f.read()
    return HttpResponse(code)

def android_logic(request):
    f = open('./logics.js',"r+")
    code = f.read()
    return HttpResponse(code)

def python_code(request):
    f = open('./python.txt',"r+")
    code = f.read()
    return HttpResponse(code)

def android_prop(request):
    settings = {"type": "", "id": "","name": "","text": "","event" : ""}
    tree = ET.parse('./android.xml')
    root = tree.getroot()
    xpstr = ".//*[@id='" + request.GET['elem'] + "']"
    elemid = root.findall(xpstr)
    count = 0
    for el in elemid:
        count = count + 1
        settings['type'] = el.get('type')
        settings['id'] = el.get('id')
        settings['name'] = el.get('name')
        settings['text'] = el.get('text')
        settings['event'] = el.get('event')
        json = simplejson.dumps(settings)
    return HttpResponse(json, mimetype='application/json')

def get_doc(request):
    cname = request.GET['cname']
    strlist = cname.split()
    xpstr = ".//*[@name='" + strlist[0] + "']"
    tree = ET.parse('./jsdoc.xml')
    for el in tree.findall(xpstr):
       desc = el.get('description')
    return HttpResponse(desc)

def create_dbwithtable(request):
    dbname = request.GET['db'] + ".db"
    tbname = request.GET['tb']
    conn = sqlite3.connect(dbname)
    cursor = conn.cursor()
    tbcol = []
    jsonr = request.GET['tc']
    jsonar = json.loads(jsonr)
    cm = ''
    for el in jsonar:
       op = el.split('-')
       cname = op[0]
       ctype = op[1]
       cm = cm + cname + " " + ctype + ","
    cm = cm[:-1]
    cmd = 'CREATE TABLE ' + tbname + '(' + cm + ')'
    cursor.execute(cmd)
    conn.commit()

    f = open('./python/createdatabasewt.txt',"r+")
    crdlines = f.readlines()
    f.close()

    f = open('./python.txt',"r+")
    pythonlines = f.readlines()
    f.close()

    mark = "<!---append python code here---!>\n"
    ind = pythonlines.index(mark)

    crdlines.reverse()
    for el in crdlines:
       pythonlines.insert(ind,el+ "\n")

    f = open('./python.txt',"wb")
    f.writelines(pythonlines)
    f.close()
           
    return HttpResponse(cmd)

def get_tables(request):
   dbname = request.GET['db'] + ".db"
   conn = sqlite3.connect(dbname)
   cursor = conn.cursor()
   tables = cursor.execute("select name FROM sqlite_master WHERE type = 'table'")
   tab = []
   for row in tables:
      tab.append(row)
   json = simplejson.dumps(tab)

   
   f = open('./python/gettable.txt',"r+")
   crdlines = f.readlines()
   f.close()

   f = open('./python.txt',"r+")
   pythonlines = f.readlines()
   f.close()

   mark = "<!---append python code here---!>\n"
   ind = pythonlines.index(mark)
   crdlines.reverse()
   for el in crdlines:
      pythonlines.insert(ind,el+ "\n")

   f = open('./python.txt',"wb")
   f.writelines(pythonlines)
   f.close()
    
   return HttpResponse(json, mimetype='application/json')
      
def get_columns(request):
   dbname = request.GET['db'] + ".db"
   tbname = request.GET['tb']
   conn = sqlite3.connect(dbname)
   cursor = conn.cursor()
   cmd = "select * from " + tbname
   cursor.execute(cmd)
   columns = cursor.description
   json = simplejson.dumps(columns)

   f = open('./python/getcolumn.txt',"r+")
   crdlines = f.readlines()
   f.close()

   f = open('./python.txt',"r+")
   pythonlines = f.readlines()
   f.close()

   mark = "<!---append python code here---!>\n"
   ind = pythonlines.index(mark)
   crdlines.reverse()
   for el in crdlines:
      pythonlines.insert(ind,el+ "\n")

   f = open('./python.txt',"wb")
   f.writelines(pythonlines)
   f.close()


   
   return HttpResponse(json, mimetype='application/json')


def insert_table(request):
   dbname = request.GET['db'] + ".db"
   tbname = request.GET['tb']
   conn = sqlite3.connect(dbname)
   cursor = conn.cursor()
   jsonr = request.GET['tc']
   jsonar = json.loads(jsonr)
   cm = ''
   for el in jsonar:
       op = el.split('-')
       cname = op[0]
       cvalue = op[1]
       cm = cm + "'" + cvalue + "'" + ","
   cm = cm[:-1]
   cmd = 'INSERT INTO ' + tbname + ' VALUES (' + cm + ')'
   cursor.execute(cmd)
   conn.commit()
   res = "SUCCESS"

   f = open('./python/inserttable.txt',"r+")
   crdlines = f.readlines()
   f.close()

   f = open('./python.txt',"r+")
   pythonlines = f.readlines()
   f.close()

   mark = "<!---append python code here---!>\n"
   ind = pythonlines.index(mark)
   crdlines.reverse()
   for el in crdlines:
      pythonlines.insert(ind,el+ "\n")

   f = open('./python.txt',"wb")
   f.writelines(pythonlines)
   f.close()

   return HttpResponse(res)

def select_table(request):
   dbname = request.GET['db'] + ".db"
   tbname = request.GET['tb']
   #dbname = "testdb"
   #tbname = "testtb"
   conn = sqlite3.connect(dbname)
   cursor = conn.cursor()
   cmd = "select * from " + tbname
   cursor.execute(cmd)
   columns = cursor.description
   col = ""
  
   html = "<html><head></head><body><table>"
   res = ""
   for el in cursor.execute(cmd):
       a = ""
       c = 0
       for el2 in columns:
           col = col + "<td> %s </td>" %el[c]
           c = c + 1
       col = "<tr>" + col + "</tr>" 
       res = res + col
   html = html + res + "</table></body></html>"

   f = open('./python/selecttable.txt',"r+")
   crdlines = f.readlines()
   f.close()

   f = open('./python.txt',"r+")
   pythonlines = f.readlines()
   f.close()

   mark = "<!---append python code here---!>\n"
   ind = pythonlines.index(mark)
   crdlines.reverse()
   for el in crdlines:
      pythonlines.insert(ind,el+ "\n")

   f = open('./python.txt',"wb")
   f.writelines(pythonlines)
   f.close()
   
   return HttpResponse(html)

def get_json(request):
   jsonr = request.GET['js']
   jsonar = json.loads(jsonr)
   test = ""
   for el in jsonar:
      test = test + el
   return HttpResponse(test)



def write_android(type,id):
    f = open('./index.html',"r+")
    code = f.read()
    f.close()

    if type == 'button':
        content = "<input type = 'button' id = '" + id + "'>"
    elif type == 'check':
        content = "<input type = 'checkbox' id = '" + id + "'>"
    elif type == 'combo':
        content = "<select id = '" + id + "'><option></option></select>"       
    elif type == 'password':
        content = "<input type = 'password' id = '" + id + "'>"       
    elif type == 'image':
        content = "<img src = '' id = '" + id + "'>"       
    elif type == 'radio':
        content = "<input type = 'radio' id = '" + id + "'>"
    elif type == 'text':
        content = "<input type = 'text' id = '" + id + "'>"
    elif type == 'label':
        content = "<div id = '" + id + "'>"
    bookmark = " <!---append code here---!> " 
    st = content + bookmark
    
    f = open('./index.html',"wb" )
    newstring = code.replace(bookmark,st)
    f.write(newstring)
    #f.write('code')
    f.close()
    
