function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
}
function showBanner(){
    var day= new Date().getDay;
    var banner;
    if(day= "friday"){
        banner.show();
    }else{
        banner.hide();
    }
    document.getElementById("banner").innerHTML = banner;
}