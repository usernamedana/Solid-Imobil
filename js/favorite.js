function Toggle(btnId) {
    var btnvar = document.getElementById(btnId);
    if (btnvar.style.color == "red") {
        btnvar.style.color = "grey";
    } else {
        btnvar.style.color = "red";
    }
}