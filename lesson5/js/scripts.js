function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
}
function showBanner(){
  document.getElementById("banner");
  
    var d = new Date();
    var n = d.getDay();
    document.getElementById("banner").innerHTML = n;
    if (n== 0){
     message= "pancakes!";
    document.getElementById("banner").innerHTML= message; }
    document.getElementById("banner").style.display= "block";
  }
      