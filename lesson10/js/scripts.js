function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}
function getDate(){
    var x= new Date(document.lastModified);
    document.getElementById("date").innerHTML= x;
    document.write("Last Modified: " + new Date(document.lastModified) + "");
}

    


