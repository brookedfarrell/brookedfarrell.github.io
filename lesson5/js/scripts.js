function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
}
function showBanner(){
  
    var d = new Date();
    var n = d.getDay()
    document.getElementById("banner").innerHTML = n;
    if (n=== 5){
      document.getElementById("banner").style.display= "block";
    }
    
  }
      