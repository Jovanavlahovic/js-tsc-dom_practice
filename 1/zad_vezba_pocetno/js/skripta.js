function proveraForme(forma) {
  var ime = forma.ime;
  if (ime.value == "") {
    alert("Ime mora biti uneto.");
    forma.ime.focus();
    return false;
  }
  var prezime = forma.prezime;
  if (prezime.value == "") {
    alert("Prezime mora biti uneto.");
    forma.prezime.focus();
    return false;
  }
  if (ime.value[0] != ime.value[0].toUpperCase()) {
    alert("Ime mora pocinjati velikim slovom.");
    forma.ime.focus();
    return false;
  }
  if (prezime.value[0] != prezime.value[0].toUpperCase()) {
    alert("Ime mora pocinjati velikim slovom.");
    forma.prezime.focus();
    return false;
  }
  return true;
}

function omoguciMembeship(polje){
    var sel1 = document.getElementById("sel1");
    if(polje.checked){
        sel1.disabled = false;
        changeColor(sel1);
    } else{
        sel1.disabled = true;
        document.getElementById("submitbtn").style.backgroundColor = "";
    }
}

function changeColor(polje){
    var btn = document.getElementById("submitbtn");
    if(polje.value == 1){
        btn.style.backgroundColor = "silver";
    } else if(polje.value == 2){
        btn.style.backgroundColor = "gold";
    } else {
        btn.style.backgroundColor = "skyblue";
    }
}
