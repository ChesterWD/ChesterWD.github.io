cargarArticle1();
cargarArticle3();
cargarArticle2();
cargarArticle4();


//esta parte afecta al primer article del primer section para sacar la resolucion por pantalla
function cargarArticle1(){    
var reso;
    var vReso= screen.availWidth;
    var wReso= screen.availHeight;

    reso=document.getElementById("resolucion")
    .innerHTML="Nuestra ventana tiene un ancho de " +vReso+" px y un alto de "+wReso+" px";
   
}

//esta parte se encarga de cargar los datos necesarios del tercer article del primer section
function cargarArticle3(){
    var prot;
    var puerto;
    var navUrrl;

    prot=document.getElementById("proto").innerHTML="Protocolo: "+location.protocol;
    puerto=document.getElementById("puerto").innerHTML="Puerto: "+location.port;
    navUrrl=document.getElementById("navurl").innerHTML="URL: "+location.href+location.search;
  
    //no sabia como poner los pluggins lo deje así para continuar
}

//esta parte se encarga de sacar la informacion del segundo article del primer section
function cargarArticle2(){
    var naveCodeName;
    var naveName;
    var navVersion;
    var navCookies;
    var navLang;
    var navOnline;
    var navProduct;
    var navPlatform;
    var navUserAg;
    var navEspa;

    naveCodeName=document.getElementById("nombCodeNave").innerHTML="Browser CodeName: "+navigator.appCodeName;
    naveName=document.getElementById("nombNave").innerHTML="Browser Name: "+navigator.appName;
    navVersion=document.getElementById("version").innerHTML="Browser Version: "+navigator.appVersion;
    navCookies=document.getElementById("cookies").innerHTML="Cookies Enabled: "+navigator.cookieEnabled;
    navLang=document.getElementById("lang").innerHTML="Browser Language: "+navigator.language;
    navOnline=document.getElementById("online").innerHTML="Browser Online: "+navigator.onLine;
    navPlatform=document.getElementById("platform").innerHTML="Platform: "+navigator.platform;
    navProduct=document.getElementById("product").innerHTML="Product: "+navigator.product;
    navUserAg=document.getElementById("user-age-head").innerHTML="User-agent header: "+navigator.userAgent;
    navEspa=document.getElementById("navEsp").innerHTML="El navegador es: "+navigator.vendor;
 
}

function cargarArticle4(){
    var fechaToday;
    fechaToday=new Date();
    
   fechaToday=document.getElementById("fechaHoy");
   fechaToday.innerHTML=" Hoy es "+fechaToday.get+ " ";

}