"use strict";

// let ad1 = prompt("Ilk Adi Daxil Edin");
// let ad2 = prompt("Ikinci Adi Daxil Edin");
// let ad3 = prompt("ucuncu Daxil Edin");

// function showname(ad1, ad2, ad3) {

//     document.write(`${ad1}  bey Sizi Salamlariyiq <br/>`);
//     document.write(`${ad2}  bey Sizi Salamlariyiq <br/>`);
//     document.write(`${ad3}  bey Sizi Salamlariyiq <br/>`);

//     return ad1 + ad2 + ad3
// }

// showname(ad1, ad2, ad3);






let ad = prompt("ADINIZI DAXIL EDIN")
let dollar = prompt("Məbləği daxil edin")
let rubl = 89.43
let manat = 1.70

function calcrubl() {
    document.write(`${ad}'nin Balansı <br/>`)
    let hasil = dollar * rubl
    document.write("Məbləğ : $ ", dollar, " <br />")
    document.write("Rubl : ₽ ")

    return hasil
}
document.write(calcrubl());