import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import  S from "./Buscador.module.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className={S.container}>
        <h2>Search a movie</h2>
        <form
          className={S.form_container}
          onSubmit={(e) => this.handleSubmit(e)}
        >
          <div>
            <label className={S.label} htmlFor="title">
              Movie:{" "}
            </label>
            <input
              type="text"
              id="title"
              className={S.Buscador}
              // placeholder="Titulo De Tu Pelicula"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button className={S.btnA} type="submit">
            SEARCH
          </button>
        </form>
        <ul>
          {this.props.movies?.map((e, i) => (
            <div key={e.imdbID} className={S.big_box}>
              <div key={i} className={S.contenedor}>
                <Link className={S.link} to={`/movie/${e.imdbID}`}>
                  <li>{e.Title} </li>
                </Link>
              </div>
              <button
                className={S.btnA}
                onClick={() =>
                  this.props.addMovieFavorite({
                    Title: e.Title,
                    imdbID: e.imdbID,
                  })
                }
              >
                Add to Favorites
              </button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
  };
}

export default connect(mapStateToProps, { addMovieFavorite, getMovies })(
  Buscador
);
