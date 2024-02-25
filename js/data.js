function data(){
    var div;
    var date= new Date();
    var an, luna, zi;
    var text;

    an= date.getFullYear();
    luna = date.getMonth() + 1;
    zi = date.getDate();
    text = zi+ "/" + luna+ "/"+ an;

    div = document.getElementById("data");
    div.innerHTML = "© Programatori - Grosu Daniela, Tamazlîcari Maria " + " " + " SOLID IMOBIL " + " " + text; 
}
data();





