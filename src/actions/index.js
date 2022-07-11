export function addMovieFavorite(payload) {
  return { type: "ADD_MOVIE_FAVORITE",
   payload
  };
}

export function getMovies(titulo) {
  return function(dispatch) {
    return fetch("https://www.omdbapi.com/?apikey=b9bc14fe&s=" + titulo)
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "GET_MOVIES",
         payload: json });
      });
  };
}

export function removeMovieFavorite(idMovie){
  return {
    type: 'REMOVE_MOVIE_FAVORITE',
    payload: idMovie,
  }
}

export function getMovieDetail(idMovie){
  return function(dispatch){
    fetch('https://www.omdbapi.com/?apikey=b9bc14fe&i='+idMovie)
    .then(response => response.json())
    .then(json =>{
      dispatch({ type: 'GET_DETAIL',
      payload: json})
    })
  }
}