//movies 를 랜더링 한다
import React from "react";
import ProTypes from "prop-types"
import "./Movies.css"

function Movies({year, title, summary, poster, genres}) {
    return (
        <div className = "movies">
          <img src={poster} alt={title} title={title}/>
          <div className="movie_data">
            <h3 className="movie_title">{title}</h3>
            <h5 className="movie_year">{year}</h5> 
            <ul className="genres">
                {genres.map((genre, index) => (
                    <li key={index} className="genres_genre">{genre}</li>
                ))}
            </ul>
            <p className="movie_summary">{summary.slice(0, 180)}...more</p>
        </div>
    </div>);
}
Movies.prototype = {
    id : ProTypes.number.isRequired,
    year : ProTypes.number.isRequired,
    title : ProTypes.string.isRequired,
    summary : ProTypes.string.isRequired,
    poster : ProTypes.string.isRequired,
    genres : ProTypes.arrayOf(ProTypes.string).isRequired,
}
export default Movies;

//style = {{}} react 에서 css를 쓰고싶을떄 더블 브라켓을 이용하면 사용가능!