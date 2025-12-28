import React from 'react';
import { movies } from '../data/movies';
import Movie from './Movie';

const fetchMovieData = ()=>{
    return movies;
}

const MovieComponent = () => {

const movieData = fetchMovieData()

    return (
        <div className='movieContainer'>
            <h1>this is movie component contain {movies.length} movies</h1>
            <ul className='movieList'>

                {
                    movieData.map((movie)=>{
                        return <Movie key={movie.id} movie={movie}></Movie>
                    })
                }

            </ul>
        </div>
    );
};

export default MovieComponent;