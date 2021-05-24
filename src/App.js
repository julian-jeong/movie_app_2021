import React from 'react';
import axios from 'axios'; // fetch 의 얇은 레이어다.
import Movie from "./Movies";
import "./App.css"

class App extends React.Component{
  state = {
    isLoading : true,
    movies : []
  };

  getMovies = async () => { //비동기 , es6에서 나온 선언 방법
    const {
      data : {
        data : { movies } 
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");

    this.setState({ movies, isLoading : false })
    };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className = "container">  
        {isLoading
          ? <div className = "loader">
            <span className = "loader_text">Loading...</span>
          </div>
          : 
          <div className = "movies">
          {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
            </div>
            }
      </section>
    );
  }
}

export default App;

//react 에서 return 하는 html 의 class 와  component class 를 헷갈려하기 때문에 html은 classname 로 변경한다