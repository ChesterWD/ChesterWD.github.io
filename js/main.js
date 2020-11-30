/*<script>
function myFunction() {
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "red";
}

usar el evento addeventlistener para el keydown/up
codigo del globo decimal: 127880
code de la explosion: 128165

</script>*/
const globo = "&#127880";
const explosion="&#128165";
document.getElementById("animacion").innerHTML = globo;

document.addEventListener("´keyup", inflar());
document.addEventListener("keydown",desinflar());

function desinflar() {
  document.getElementById("animacion").style.fontSize=document.getElementById("animacion").style.fontSize-30;
}


function inflar() {
  if(document.getElementById("animacion").style.fontSize>=400){
    document.getElementById("button").style.visibility=visible;
    document.getElementById("animacion").innerHTML = explosion;
  }else{
    document.getElementById("animacion").style.fontSize=document.getElementById("animacion").style.fontSize+30;
  }  
}