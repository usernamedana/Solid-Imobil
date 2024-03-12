function popUp(oferta) {
    let popUpElement = document.querySelector(".pop-up-js");
    if (oferta == 0) {
      document.body.style.overflow = "scroll";
      popUpElement.style.display = "none";
    } else {
      if (oferta == 1) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img1.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img1.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare casă de locuit pe str. <i> Podul de Flori </i> cu teren aferent 0,1291 ha, acces la toate rețelele inginerești. <br> Drumul de acces pietriș. Casa este amplasată în apropiere de vama Leova-Bumbăta, un loc cu vedere către lunca prutului, o zonă liniștită și plăcută pentru toți cei care iubesc natura.";
        document.querySelector(".date-js").innerHTML = "Postat: 23 august 2023";
        document.querySelector(".price-js").innerHTML = "Preț: 20,000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Podul de Flori";
      } else if (oferta == 2) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img2.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img2.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "Ofertă specială pentru cei care doresc să investească în comerț!!! Avem spre vînzare sau arendă un magazin comercial cu toate condițiile și utilități conectate, este o activitate comercială înregistrată ca SRL, care la fel face parte din ofertă. Facilități: conectate rețelele edilitare, apă, electricitate!, amplasate în centrul orașului Iargara, actele pentru activitatea comercială sunt înregistrate oficial!";
        document.querySelector(".date-js").innerHTML = "2 august 2023";
        document.querySelector(".price-js").innerHTML = "SUPER OFERTĂ!!! ";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 3) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img3.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img3.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,0950 ha în or. Leova, amplasat pe str. Cîmpiilor, cu iesire la drumul național care duce la Vama Leova-Bumbăta. Este acces la rețele edilitare, apă, gaz și electricitate. Cu un cumpărător real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = " 7 iulie 2023";
        document.querySelector(".price-js").innerHTML = "Preț: 10 000 €";
        document.querySelector(".adresa-js").innerHTML = "Adresa: str. Cîmpiilor";
      } else if (oferta == 4) {
        document.querySelector(".pop-up-img-1").style.display = "none";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img4.0.jpg";
        document.querySelector(".pop-up-img-3").src = "popupimagini/img4.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren aferent Casei de locuit, cu suprafața de 0,1500 ha, este amplasat pe strada Unirii în apropiere de Centrul Multifuncțional.Casa de locuit este conectată la gaz, apă, electricitate. ";
        document.querySelector(".date-js").innerHTML = " 28 aprilie 2023";
        document.querySelector(".price-js").innerHTML = "Preț : 20 500 €";
        document.querySelector(".adresa-js").innerHTML = "Adresa: str. Unirii";
      } else if (oferta == 5) {
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-1").src = "popupimagini/img5.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img5.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare Casă de locuit cu 1 nivel, cu teren aferent 0,1700 ha, amenajat cu viță de vie și alte utilități.";
        document.querySelector(".date-js").innerHTML = " 3 aprilie 2023";
        document.querySelector(".price-js").innerHTML = "Preț: 10 500 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Podul de Flori";
      } else if (oferta == 6) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img6.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img6.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare Casă de locuit cu două nivele, zona centru, cu teren aferent 0,06 ha, amenajat cu viță de vie, seră, și alte utilități, rețelele inginerești sunt conectate. Casa de locuit este dotată cu: Cazangerie cu Cazan nou, podea caldă etaj 1 și etaj 2, sistemul de încălzire este dotat si cu radiatoare, electricitatea conectată după standarde, panou de siguranțe pentru fiecare etaj, garaj cu uși rulante, beci cu gîrlici.";
        document.querySelector(".date-js").innerHTML = " 9 martie 2023";
        document.querySelector(".price-js").innerHTML = "Preț: 75 000 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 7) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img7.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img7.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,06 ha, amplasat într-o zonă pitorească, liniștită, zona perfectă pentru construcția unei case de locuit de vis. Drum de acces cu piețriș, rețelele inginerești sunt conectate. Cu un cumpărător real prețul se mai discută. ";
        document.querySelector(".date-js").innerHTML = " 18 ianuarie 2022";
        document.querySelector(".price-js").innerHTML = "Preț: 6200 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 8) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img8.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img8.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "  De vînzare teren pentru construcții cu suprafața de 0,0860 ha în or. Leova, amplasat pe str. Constantin Stere, în zona centru. Cu un cumpărător real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = " 9 noiembrie 2021";
        document.querySelector(".price-js").innerHTML = "Preț: 10500 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Constantin Stere";
      } else if (oferta == 9) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img9.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img9.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,0703 ha în or. Leova, amplasat pe str. Liviu Damian nr. 55, în zona locurilor de casă atribuite pentru familiile tinere.";
        document.querySelector(".date-js").innerHTML = "28 aprilie 2021";
        document.querySelector(".price-js").innerHTML = "Preț: 3000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Liviu Damian";
      } else if (oferta == 10) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img10.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img10.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,1230 ha amplasat în sat. Hănășenii Noi, r-nul Leova, în apropiere de drumul național R34 Cahul-Chișinău. Pe teren există fundament pentru o viitoare construcție.";
        document.querySelector(".date-js").innerHTML = "23 februarie 2021";
        document.querySelector(".price-js").innerHTML = "Preț: 4000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: sat. Hănășenii Noi, raionul Leova";
      } else if (oferta == 11) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img11.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img11.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare Teren pentru Construcții cu suprafața de 0,0700 ha în or. Leova, amplasat în zona locurilor de casă atribuite pentru familiile tinere, la ROZA. Cu un cumpărător real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = "20 ianuarie 2021";
        document.querySelector(".price-js").innerHTML = "Preț: 3500 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 12) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img12.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img12.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare Casă de locuit pe str. M. Sadoveanu, cu teren aferent 0,060 ha, rețelele inginerești sunt conectate. Drumul de acces pietriș. În proiect există posibilitatea de a construi și Mansardă.";
        document.querySelector(".date-js").innerHTML = "4 septembrie 2020";
        document.querySelector(".price-js").innerHTML = "Preț: 20000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. M. Sadoveanu";
      } else if (oferta == 13) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img13.0.jpg";
        document.querySelector(".pop-up-img-2").style.display = "none";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,0600 ha pe str. Dimitrie Cantemir. Există acces la toate rețelele inginerești. Cu un cumpărător real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = "18 august 2020";
        document.querySelector(".price-js").innerHTML = "Preț : 4000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Dimitrie Cantemir";
      } else if (oferta == 14) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img14.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img14.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construții cu suprafața de 0,0649 ha, amplasat în zona centru, drumul asfaltat pînă la teren, există acces la toate rețelele inginerești. Cu un cumpărător real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = "13 august 2020";
        document.querySelector(".price-js").innerHTML = "Preț : 9000 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 15) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img15.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img15.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,0706 ha. Amplasat pe str. Petru Dudnic.";
        document.querySelector(".date-js").innerHTML = "16 iulie 2020";
        document.querySelector(".price-js").innerHTML = "Preț: 5000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Petru Dudnic.";
      } else if (oferta == 16) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img16.0.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img16.1.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          " De vînzare teren pentru construcții cu suprafața de 0,18 ha. Amplasat pe str. Mihai Eminescu, intrare de la strada asfaltată, există acces la toate rețelele inginerești. Cu un cumpărator real prețul se mai discută.";
        document.querySelector(".date-js").innerHTML = "16 iulie 2020";
        document.querySelector(".price-js").innerHTML = "Preț: 18 000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Mihai Eminescu";
      } else if (oferta == 17) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img17.0.jpg";
        document.querySelector(".pop-up-img-2").style.display = "none";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare teren pentru construcții cu suprafața de 0,0769 ha. Amplasare în centrul orașului Leova, există acces la toate rețelele inginerești.";
        document.querySelector(".date-js").innerHTML = "10 iulie 2020";
        document.querySelector(".price-js").innerHTML = "Preț : 10 000 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 18) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img18.0.jpg";
        document.querySelector(".pop-up-img-2").style.display = "none";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "Se vând 2 terenuri pentru construcție cu suprafața totală de 0,1286 ha, str. Burebista, cu acces la drum fiecare, se poate de vîndut și aparte. Este acces la toate rețelele, gaz, electricitate, canalizare și apa";
        document.querySelector(".date-js").innerHTML = "1 iunie 2020";
        document.querySelector(".price-js").innerHTML = "Preț: 10 000 €";
        document.querySelector(".adresa-js").innerHTML = "Adresa: str. Burebista";
      } else if (oferta == 19) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img19.0.jpg";
        document.querySelector(".pop-up-img-2").style.display = "none";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "De vînzare Casă de locuit cu teren aferent de 0,0800 ha. Zona - Centru. Apă, canalizare, gaz.";
        document.querySelector(".date-js").innerHTML = "26 mai 2020";
        document.querySelector(".price-js").innerHTML = "Preț: 12 000 €";
        document.querySelector(".adresa-js").innerHTML = " ";
      } else if (oferta == 20) {
        document.querySelector(".pop-up-img-1").src = "popupimagini/img20.1.jpg";
        document.querySelector(".pop-up-img-2").src = "popupimagini/img20.2.jpg";
        document.querySelector(".pop-up-img-3").style.display = "none";
        document.querySelector(".pop-up-img-4").style.display = "none";
        document.querySelector(".pop-up-img-5").style.display = "none";
        document.querySelector(".pop-up-img-6").style.display = "none";
        document.querySelector(".pop-up-img-7").style.display = "none";
        document.querySelector(".pop-up-img-8").style.display = "none";
        document.querySelector(".pop-up-img-9").style.display = "none";
        document.querySelector(".pop-up-img-10").style.display = "none";
        document.querySelector(".main-txt-js").innerHTML =
          "Se vinde teren pentru construcții cu suprafata 0,10 ha situat pe adresa raionul Leova, or. Leova, str. Podul de flori nr. 46. Apeduct conectat. Canalizare centrală. Acces la conectarea la reteaua de gaz centralizată. Locul ideal pentru construcția unei Casute de vacanța cu priveliștea spre lunca prutului.";
        document.querySelector(".date-js").innerHTML = "22 mai 2020";
        document.querySelector(".price-js").innerHTML = "Preţ: 15 000 €";
        document.querySelector(".adresa-js").innerHTML =
          "Adresa: str. Podul de flori nr. 46";
      }
      popUpElement.style.display = "flex";
    }
  }
  
  function scrollFunction(location) {
    const element = document.querySelector(`.${location}`);
    element.scrollIntoView({ behavior: "smooth" });
  }
  
  
  function mobileMenu() {
    var x = document.getElementsByTagName("nav")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
  }
  