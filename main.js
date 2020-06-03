window.onload = function identificar () {
	const identificarTitulo = document.getElementsByTagName('h1')
	const identificarParrafo = document.getElementsByTagName('p')
	const identificarImagenes = document.getElementsByTagName('img')
	const identificarNombre = document.getElementsById('nombre')

	const titulo = document.querySelector('h1')
	titulo.style.visibility = "hidden"

	const parrafo = document.querySelector('p')
	parrafo.style = "fontSize: large", "color: purple", " borderRadius: 5px"

	document.querySelector('.firma').addEventListener("click", function() {
		identificarNombre.style.visibility = "hidden"
	})

	document.querySelector('.firma').addEventListener("click", function() {
		identificarNombre.style.visibility = "visible"
	})
}