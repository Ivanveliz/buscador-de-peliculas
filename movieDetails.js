const baseUrlImage = "https://image.tmdb.org/t/p/w200";

// Recuperar los detalles de la película del localStorage
const selectedMovie = JSON.parse(localStorage.getItem("selectedMovie"));

if (selectedMovie) {
	addDetails(selectedMovie);
} else {
	// Si no se encontraron datos de película en el localStorage (Raro, por que ono habriamos llegado nunca aca, pero uno nuca sabe)
	console.log("No se encontraron detalles de la película.");
}

function addDetails(movie) {
	let containerDetails = document.querySelector("#containerDetails");
	let containerMovieDetails = document.querySelector("#movieDetails");
	let movieTitle = document.createElement("h2");

	containerMovieDetails.classList.add("containerMovieDetails");

	let containerImage = document.createElement("div");
	containerImage.classList.add("containerImage");

	let containerText = document.createElement("div");
	containerText.classList.add("containerText");
	movieTitle.classList.add("movieTitle");
	movieTitle.textContent = movie.original_title;

	let poster_path = movie.poster_path;
	let movieImg = document.createElement("img");

	movieImg.src = baseUrlImage + poster_path;
	movieImg.classList.add("movieImg");

	// Cambio de fecha:
	const fechaOriginal = movie.release_date;
	const fechaFormateada = formatFecha(fechaOriginal);

	let releaseDay = document.createElement("p");
	releaseDay.textContent = "Esta película se estrenó  " + fechaFormateada;

	let overview = document.createElement("p");
	overview.textContent = movie.overview;
	console.log(movie);

	containerDetails.appendChild(movieTitle);
	containerImage.appendChild(movieImg);
	containerMovieDetails.appendChild(containerImage);
	containerText.appendChild(releaseDay);
	containerText.appendChild(overview);
	containerMovieDetails.appendChild(containerText);
	containerDetails.appendChild(containerMovieDetails);
}

// Función para formatear la fecha
function formatFecha(fecha) {
	// Dividir la fecha en año, mes y día
	const partesFecha = fecha.split("-");
	const año = partesFecha[0];
	const mes = partesFecha[1];
	const dia = partesFecha[2];

	// Creo un objeto de fecha para obtener el nombre del mes
	const meses = [
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	];
	const fechaFormateada = `${dia} de ${meses[parseInt(mes) - 1]} de ${año}`;

	return fechaFormateada;
}

//boton volver al index
document.querySelector("#returnIndex").addEventListener("click", returnToHomePage);

function returnToHomePage(){
    window.location.href = './index.html';
}



