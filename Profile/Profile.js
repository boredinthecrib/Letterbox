window.onload = () => {
  var homeBtn = document.querySelector(".home-button");
  homeBtn.addEventListener("click", () => {
    var url = "http://127.0.0.1:5500/Homepage/Homepage.html";
    window.location.replace(url);
  });

  async function foo() {
    const response = await fetch("./data.json");
    const result = await response.json();
    return result;
  }

  renderMovies();

  async function renderMovies() {
    try {
      const data = await foo();
      console.log(data);
      const movieRecs = document.querySelector(".movies-recommendations");

      movieRecs.innerHTML = data
        .map(
          (movie) => `
            <div class="movie-card">
                <img src='${movie.thumbnail}' alt="${movie.title}" class="poster">
                <div class="title">${movie.title}</div>
            </div>
                      `
        )
        .join("");
    } catch (error) {
      console.error("Error rendering movies:", error);
    }
  }
};
