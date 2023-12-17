import React from 'react';
import './Row.css';
import axios from './axios';
import { useState, useEffect } from 'react';

function Row({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            try {
                const request = await axios.get(fetchUrl);
                setMovies(request.data.results);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    // Check if movies is undefined before rendering
    if (!movies) {
        return null; // or render a loading spinner or some fallback UI
    }

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(
                    (movie) =>
                    ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.poster_path)) && (
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            key={movie.id}
                            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.name}
                        />
                    )
                )}
            </div>
        </div>
    );
}

export default Row;
