
emailjs.init("zC-2UXQzoyM_zCFOh");
function send() {

  if (document.getElementById("formular").checkValidity() == false) {
      document.getElementById("formular").reportValidity();
      return;
  }

  var date = {
      nume: document.getElementById("nume").value,
      email_id: document.getElementById("email_id").value,
      message: document.getElementById("message").value
  };

  console.log(date);

  emailjs.send("service_a7zdoof", "template_i41ckj9", date)
      .then(function (raspuns) {
          alert("Mesajul a fost transmis.")
          document.getElementById("formular").reset();
      }, function (error) {
          alert("Eroare la transmitere. Contactati programatorul.")
      })
}
