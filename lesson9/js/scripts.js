function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
    document.write("Last Modified: " + new Date(document.lastModified) + "");
}

    

//function showBanner(){ 
   // var d = new Date();
    //if (d.getDay()==5){
    
   // document.getElementById("banner").innerHTML= "Preston Pancakes in the Park! 9:00 am Saturday at the city park pavilion.";
   // document.getElementById("banner").style.display= "block";
  //}
//}
//showBanner(); 

