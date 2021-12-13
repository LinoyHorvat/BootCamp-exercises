const inputTxt = document.querySelector("input");
const searchBtn = document.querySelector(".search");
const movieDiv = document.querySelector(".movie");

searchBtn.addEventListener("click",()=>{
  getMovie();
});

inputTxt.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    getMovie();
  }
});

inputTxt.value = "cruejhgjhglla"
getMovie()

async function getMovie() {
  if (inputTxt.value === "") throw new Error("Please enter a movie");
  else {
    try {
      const res = await fetch(`http://www.omdbapi.com/?t=${inputTxt.value}&apikey=f6a04941`);
      if (res.status === 200) {
        const data = await res.json();
        console.log(data);
        console.log(data.Response);
        if (data.Response === "True"){
          movieDiv.innerHTML = "";
          printMovie(data);
          inputTxt.value = "";
        }
        else {
          const errData = await res.json();
          return errMessage(errData);
          // throw new Error (res.status);
        }
      } 
    } catch (err) {
      return errMessage("IN CATCH!", err);
    }
  }
}
const errMessage = (err) => {
  const errContainer = document.querySelector(".err");
  errContainer.innerHTML = err;
}

function printMovie(movie){
  printImg(movie.Poster);
  printMovieTitle(movie.Title);
  printMovieTitle(movie.Genre);
  printMovieTitle(movie.Year);
  printMovieTitle(movie.Plot);
  printMovieTitle(movie.Director);
  printMovieRatings(movie.Ratings);
}

function printImg(movieImgSrc) {
  let movieImg = document.createElement("img");
  movieImg.src = movieImgSrc;
  movieImg.setAttribute("height", "300");
  movieImg.setAttribute("width", "300");
  movieDiv.appendChild(movieImg);
}

function printMovieTitle(title) {
  let movieTitle = document.createElement("p");
  movieDiv.appendChild(movieTitle);
  movieTitle.innerHTML = title;
}
function printMovieRatings(movieRatings){
  let Ratings = document.createElement("h4");
  movieDiv.appendChild(Ratings);
  Ratings.innerHTML = "Ratings:"
  movieRatings.forEach(source => {
    let movieRating = document.createElement("li");
    movieDiv.appendChild(movieRating);
    movieRating.innerHTML = `${source.Source} : ${source.Value}`;
  })
}
