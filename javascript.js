
var imgPrincipal = document.getElementById("imgPrincipal");

//Now, we need to add an Event Listener to listen when the image gets mouse over.

imgPrincipal.addEventListener('mouseover', function(){
	imgPrincipal.src = "img/sistemasolar.jpg"
})

imgPrincipal.addEventListener('mouseout', function(){
    imgPrincipal.src = "img/sistemasolar2.jpg" 
})

//inicio parrafo.
var parrafo = document.getElementById("parrafo");
function mostrar(){
    document.getElementById('parrafo').style.display='block';
}

function ocultar(){
    document.getElementById('parrafo').style.display='none';
}

//inicio parrafo2.
var parrafo2 = document.getElementById('parrafo2');
function mostrar(){
    document.getElementById('parrafo2').style.display='block';
}

function ocultar(){
    document.getElementById('parrafo2').style.display='none';
}
