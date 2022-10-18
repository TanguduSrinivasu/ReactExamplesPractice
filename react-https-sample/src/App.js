import React, {useState} from 'react';

import MoviesList from './Components/MoviesList';
import AddMovie from './Components/AddMovie';
import './App.css';

function App() {
  // const dummyMovies = [
  //   {
  //     id: 1,
  //     title: 'Some Dummy Movie',
  //     openingText: 'This is the opening text of the movie',
  //     releaseDate: '2021-05-18',
  //   },
  //   {
  //     id: 2,
  //     title: 'Some Dummy Movie 2',
  //     openingText: 'This is the second opening text of the movie',
  //     releaseDate: '2021-05-19',
  //   },
  // ];

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null)

  // function fetchMovieHandler()
  // {
  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return  response.json();
  //   })
  //   .then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id : movieData.episode_id,
  //         title : movieData.title,
  //         releaseDate : movieData.release_date,
  //         openingText : movieData.opening_crawl
  //       }
  //     })
  //     setMovies(transformedMovies) 
  //   })
  // }


  // async function fetchMovieHandler()
  // {
  //   setIsLoading(true);
  //   setError(null);
  //   try
  //   {
  //   const response = await fetch('https://swapi.dev/api/films/');
  //   if(!response.ok)
  //   {
  //     throw new Error('Something Went Wrong!')
  //   }
  //   const data = await response.json()
  //   const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id : movieData.episode_id,
  //         title : movieData.title,
  //         releaseDate : movieData.release_date,
  //         openingText : movieData.opening_crawl
  //       }
  //     })
  //     setMovies(transformedMovies);
  //   }
  //   catch(error)
  //   {
  //     setError(error.message)
  //   }
  //   setIsLoading(false);
  // }

  async function fetchMovieHandler()
  {
    setIsLoading(true);
    setError(null);
    try
    {
    const response = await fetch('https://react-http-dca4f-default-rtdb.firebaseio.com/movies.json');
    if(!response.ok)
    {
      throw new Error('Something Went Wrong!')
    }
    const data = await response.json();
    console.log(data);
    
    const loadedMovies = [];

    for(const key in data)
    {
      loadedMovies.push({
        id : key,
        title: data[key].title,
        openingText : data[key].openingText,
        releaseDate : data[key].releaseDate
      })
    }

      setMovies(loadedMovies);
    }
    catch(error)
    {
      setError(error.message)
    }
    setIsLoading(false);
  }


  async function addMovieHandler(movie) {
    //console.log(movie);
    const response = await fetch('https://react-http-dca4f-default-rtdb.firebaseio.com/movies.json', {
      method : 'POST',
      body : JSON.stringify(movie),
      headers : {
        'Content-Type' : 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <p>Found No Movies</p>

  if(movies.length > 0)
  {
    content =  <MoviesList movies={movies} />
  }

  if(error)
  {
    content = <p>{error}</p>
  }

  if(isLoading)
  {
    content = <p>Loading .....</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {/* { !isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        { !isLoading && movies.length === 0 && !error && <p>Found No Movies</p>}
        { !isLoading && error && <p>{error}</p>}
        { isLoading && <p>Loading .....</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;