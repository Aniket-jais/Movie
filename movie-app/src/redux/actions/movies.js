export const fetchMovieList = () => {
    return async(dispatch) => {
        const movieList = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=6a477c16a3868347a962435d0d42905d&language=en-US&page=');
        const result = await movieList.json();
        dispatch({
            type: 'FETCH_MOVIE_LIST',
            payload:result?.results,
        })
    }
}