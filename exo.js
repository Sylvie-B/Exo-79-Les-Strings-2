let pomme = "Elle est belle ma pomme !";

let paraIdxPom = document.getElementById("index-pomme");

paraIdxPom.innerHTML = pomme.indexOf("pomme");

let lastIdxM = document.getElementById("last-index-m");

lastIdxM.innerHTML = pomme.lastIndexOf('m');
console.log(pomme.lastIndexOf('m'));


if(pomme.startsWith('Elle')){
    console.log('Elle est belle ma pomme ! Commence par Elle');
}
// exo 4
if(pomme.endsWith('!')){
    console.log('Elle est belle ma pomme ! Se termine par un point d\'exclamation');
}

// exo 5
let paraPom = document.getElementById('pomme');
let newPom = pomme.substring(18, 23);

paraPom.innerHTML = newPom;

// exo 6
let oneLine = document.getElementById("one-line");

for (let i = 0 ; i < pomme.length ; i++){
    oneLine.innerHTML += (pomme[i] + "<br>");
}
