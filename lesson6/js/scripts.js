function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
}
function showBanner(){ 
    var d = new Date();
    if (d.getDay()==5){
    
    document.getElementById("banner").innerHTML= "Preston Pancakes in the Park! 9:00 am Saturday at the city park pavilion.";
    document.getElementById("banner").style.display= "block";
  }
}
showBanner(); 

function windChill(){
const temp= parseFloat(document.getElementById("temp").textContent);
const windSpeed= parseFloat(document.getElementById("windSpeed").textContent);

let windchill= 35.74 + (0.6215 * temp)-(35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16));

windchill= Math.round(windchill);

if (temp<51 && windspeed >3) {
    document.getElementById("chill").textContent= "Wind Chill Temperature: "+windchill + "F";
}
else
{document.getElementById("chill").textContent = "Wind Chill Temperature: N/A";

}

}
windChill();