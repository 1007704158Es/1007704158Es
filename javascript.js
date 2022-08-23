
var imgPrincipal = document.getElementById("imgPrincipal");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

imgPrincipal.addEventListener('mouseover', function(){
	imgPrincipal.src = "img/sistemasolar.jpg"
})

imgPrincipal.addEventListener('mouseout', function(){
    imgPrincipal.src = "img/sistemasolar2.jpg" 
})

//inicio parrafo.
function mostrar(idElement){
    document.getElementById(idElement).style.display='block';
}

function ocultar(){
    document.getElementById(idElement).style.display='none';
}


