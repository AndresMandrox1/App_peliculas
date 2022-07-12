import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import S from "./Favorites.module.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>My Favorite Movies</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.movies?.map((e) => (
            <div key={e.imdbID} className={S.big_box}>
              <div className={S.contenedor}>
                <Link to={`/movie/${e.imdbID}`} className={S.link}>
                  <li>{e.Title}</li>
                </Link>
              </div>
                <button className={S.btnA} onClick={()=> this.props.removeMovieFavorite(e.imdbID)}>Remove</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
