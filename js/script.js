function generofilme(){
var genero = document.getElementsByName("genero")
var imgFilme = document.querySelector("#foto")
var numeroAleatorio = parseInt(Math.random()*10)
var trailerFilme = document.querySelector("#trailer")
if( genero[0].checked){
imgFilme.src = filmesAcao[numeroAleatorio ]
trailerFilme.href = trailerAcao[numeroAleatorio]
imgFilme.style.border = " solid 8px white "
}
else if (genero[1].checked){
imgFilme.src = filmesComedia[numeroAleatorio ]
imgFilme.style.border = " solid 8px white "
}
else if (genero[2].checked){
imgFilme.src = filmesTerror[numeroAleatorio ]
imgFilme.style.border = " solid 8px white "
}
else if (genero[3].checked){
imgFilme.src = filmesDrama[numeroAleatorio ]
imgFilme.style.border = " solid 8px white "
}
else if (genero[4].checked){
imgFilme.src = filmesFiccao[numeroAleatorio ]
imgFilme.style.border = " solid 8px white "
}
else if (genero[5].checked){
imgFilme.src = filmeSuspence[numeroAleatorio ]
imgFilme.style.border = " solid 8px white "
}else{
alert("[ERRO] Escolha um genero!")
}
}