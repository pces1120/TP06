
//TP06
/*	Crear el modulo IMDB 
El array de peliculas tendra que ser privado del modulo 
El modulo tendra que poder agregar una pelicula (ID y titulo) 
Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error 
El modulo tendra que eliminar una pelicula por ID 
El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola 
El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando

*/




function Pelicula (id, titulo) {

	this.id = id;
	this.titulo = titulo;

}

var pelicula = new Pelicula(0, 'Strange Encounters Of The Third Kind');

var imdb = (function (){

	//Array de peliculas

	var peliculas = [] //Hacer privado del módulo


	//Metodos

	//Funcion para validar que la pelicula no fue ingresada previamente

	var peliculaNoIngresada = function (pelicula){

		var pos = -1;
		var peliculaActual;

		for (i = 0; i < peliculas.length && pos === -1; i++) {

			peliculaActual = peliculas[i];

			if (peliculaActual.id === pelicula.id){

				pos = i;

			}
		}

		return pos;
	}


	//Funcion para agregar la pelicula

	var agregarPelicula = function (pelicula){

		var pos = peliculaNoIngresada(pelicula);

		if (pos === -1){

			peliculas.push(pelicula);

			alert ('la pelicula ha sido agregada');

		} else {

			alert('Lo sentimos, la pelicula ' + pelicula.titulo + 'ya esta en nuestros archivos');

		}
	}



	//Funcion para eliminar una pelicula por ID


	var eliminarPelicula = function (idPelicula){
		
		for(i = 0; i <= peliculas.length ; i++){

			if (peliculas[i].id === idPelicula){

				peliculas.splice(i, 1);

				alert ('la pelicula de id ' + idPelicula + ' ha sido eliminada');

			} else {

				alert ('la pelicula de id ' + idPelicula + ' no figura en nuestros archivos')
			}

		}

	}


	//Funcion para ordenar peliculas por ID

	
	var compararId = function (peliculaA,peliculaB) {

		var resultado;

		if(peliculaA.id < peliculaB.id){

			resultado = -1;

		}

		if(peliculaB.id === peliculaB.id){

			resultado = 0;
			
		}

		if(peliculaA.id > peliculaB.id){

			resultado = 1;
			
		}

		return resultado;

		}


	var ordenarId = function() {

		console.log(peliculas.sort(this.compararId));

	}

	
	// Funcion para persistir peliculas en el local storage

	var guardarPelicula = function(){

		var datos = JSON.stringify(peliculas);

		localStorage.setItem('peliculas', datos);
	}


	// Funcion para recuperar peliculas en el local storage

	var recuperarPelicula = function(){
		
		var datos = localStorage.getItem('peliculas');

		if(datos !== null){

			 datos = JSON.parse(datos);

			 peliculas = datos;
		}
	}

	// Funcion para eliminar peliculas en el local storage

	var eliminarPeliculaLs = function(id){

		var datos = localStorage.getItem('peliculas');

		if(datos !== null){

			localStorage.removeItem(pelicula.id, id)

		}

	}


	return {

		agregarPelicula: agregarPelicula,
		eliminarPelicula: eliminarPelicula,
		guardarPeliculaLs: guardarPelicula,
		recuperarPeliculaLs: recuperarPelicula,
		eliminarPeliculaLs: eliminarPeliculaLs,
		ordenarId: ordenarId,

	};

})()