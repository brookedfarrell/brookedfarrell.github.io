function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
}
function showBanner(){
    
    var day=  getDay();
    if (day== 5){
       document.getElementById("banner").style.display= "none";
    

    }
    
    
}
function showBanner(){
var day = getDay();

if( day == 5){
    document.getElementById("banner").style.display= "show";
}
}
