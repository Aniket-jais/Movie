import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/Card';
import { fetchMovieList } from '../../redux/actions/movies';
import * as Styled from './MovieList.style';

const MovieList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieList())
    }, []);

    const movieList = useSelector((state) => state?.movie?.movieList);

    return (
        <Styled.MovieWrapper>
            {
                (movieList || []).map(({ title, poster_path }) => {
                    const imgSrc = `https://image.tmdb.org/t/p/original/${poster_path}`
                    return <Card title={title} imgSrc={imgSrc} />
                })
            }
        </Styled.MovieWrapper>
    )
}

export default MovieList;