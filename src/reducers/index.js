
const initialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  movieDetail: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === "ADD_MOVIE_FAVORITE") {
    let a = false;
    state.moviesFavorites.forEach(element => {
       if (element.Title === action.payload.Title) a = true
     }); 
     if(!a){
       return {
         ...state,
         moviesFavorites: state.moviesFavorites.concat(action.payload)
       }
     }
  }
  if (action.type === "GET_MOVIES") {
      return {
        ...state,
        moviesLoaded: action.payload.Search
      };
  }

  if(action.type === 'REMOVE_MOVIE_FAVORITE'){
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(e => e.imdbID !== action.payload)
    }
  }

  if(action.type === 'GET_DETAIL'){
    return{
      ...state,
      movieDetail: action.payload
    }
  }
  return state;
}

export default rootReducer;