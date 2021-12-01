// sitas variantas, kai cookies islieka kompe kol narsykle atidaryta(uzdarius dingsta)
function setCookies() {
  document.cookie = "name=" + document.myform.name.value;
  document.cookie = "email=" + document.myform.email.value;
  document.cookie = "language=" + document.myform.lang.value;
  location.replace("antrasPage.html");
}

// sitas variantas, kai cookies islieka kompe nors narsykle buvo uzdaryta
// function setCookies() {
//   document.cookie =
//     "name=" + document.myform.name.value + "; max-age=" + 60 * 60 * 24 * 10;
//   document.cookie =
//     "email=" + document.myform.email.value + "; max-age=" + 60 * 60 * 24 * 10;
//   document.cookie =
//     "language=" + document.myform.lang.value + "; max-age=" + 60 * 60 * 24 * 10;
// }



// name=mantas kasiliauskis; email=mantaskasiliauskis@gmail.com; language=lietuviu
function getCookies() {
  var cookiesArray = document.cookie.split(";");
  for (var i = 0; i < cookiesArray.length; i++) {
    var valueArray = cookiesArray[i].split("=");
    if (valueArray[0].trim() == "name") {
      document.myform.name.value = valueArray[1];
    }
    if (valueArray[0].trim() == "email") {
      document.myform.email.value = valueArray[1];
    }
    if (valueArray[0].trim() == "language") {
      document.myform.lang.value = valueArray[1];
    }
  }
}
