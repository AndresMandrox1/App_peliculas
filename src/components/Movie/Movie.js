import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import S from "./Movie.module.css";

class Movie extends React.Component {
  componentDidMount() {
    this.props.getMovieDetail(this.props.match.params.id);
  }

  render() {
    const movie = this.props.movie;
    return (
      <div className={S.boxi}>
        <div className={S.movie_detail}>
          <h3>{movie.Title} </h3>
          <p className={S.texto}>{movie.Plot}</p>
          <ul className={S.list_group}>
            <li> <b>Director</b>{` : ${movie.Director}`}</li>
            <li><b>Writer</b>{` : ${movie.Writer} `} </li>
            <li><b>Release date</b>{` : ${movie.Released}`} </li>
            <li><b>Gender</b>{` : ${movie.Genre} `} </li>
            <li><b>Duration</b>{` : ${movie.Runtime} `} </li>
            <li><b>Classification</b>{` : ${movie.Rated} `} </li>
          </ul>
          <img src={movie.Poster} alt="poster" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
