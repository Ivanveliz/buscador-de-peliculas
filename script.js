const urlBase = "https://api.themoviedb.org/3/search/movie";
const api_key = "08f43537a556009226f1a6122906d9e7";
const baseUrlImage = "https://image.tmdb.org/t/p/w200";

document.querySelector("#searchButton").addEventListener("click", seachMovies);

document.addEventListener("keydown", function (event) {
	if (event.key === "Enter") {
		seachMovies();
	}
});

function seachMovies() {
	const searchInput = document.querySelector("#searchInput").value;

	fetch(`${urlBase}?query=${searchInput}&api_key=${api_key}`)
		.then((response) => response.json())
		.then((response) => printMovies(response.results))

		.catch((err) => console.error(err));
}

function printMovies(movies) {
	let containerResults = document.querySelector("#results");
	containerResults.innerHTML = "";

	if (movies.length === 0) {
		containerResults.innerHTML = "<p>No se encontraron películas</p>";
		return;
	}

	movies.forEach((movie) => {
		let movieContainer = document.createElement("div");
		movieContainer.classList.add("movie");

		let title = document.createElement("h4");
		title.textContent = movie.original_title;

		let img = document.createElement("img");
		let urlPoster = baseUrlImage + movie.poster_path;

		img.src = urlPoster;

		movieContainer.appendChild(img);
		movieContainer.appendChild(title);

		containerResults.appendChild(movieContainer);

		movieContainer.addEventListener("click", function () {
			// Almacenar los detalles de la película seleccionada en localStorage
			localStorage.setItem("selectedMovie", JSON.stringify(movie));
			// Redireccionar a la página de detalles de la película
			window.location.href = "./movie.html";
		});
	});
}
