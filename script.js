// Add your code to this file


document.querySelector("body").style.backgroundColor= 'rgba(0,0,139,255)';


let pokemonImages = document.querySelectorAll(".pokemon_images");

for(let bord =0; bord<pokemonImages.length;bord++){
    pokemonImages[bord].style.border = "8px dotted yellow";
}


let pokemonNames = document.querySelectorAll(".pokemon_names");

for(let names = 0; names<pokemonNames.length; names++){
    pokemonNames[names].innerText += "!"
    pokemonNames[names].style.color = "#fdefa7"
}

let strImg = document.querySelector("#starters_image_div img");
strImg.style.border = "8px dotted yellow"

let header2 =document.querySelector("h2");
header2.innerText = "Here are Pokemon's incredible Gen 1 starters!"
header2.style.textAlign = "center"


document.getElementById("bulbasaur_container").style.backgroundColor = "rgba(56,142,142,255)"
document.querySelector('h1').style.textDecoration = "underline"

let footer = document.querySelector("footer");
footer.innerText = "ALL STAR CODE - DOM PROJECT "
footer.style.textDecoration = "overline underline";


