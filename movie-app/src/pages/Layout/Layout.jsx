import React from "react";
import { useSelector } from "react-redux";
import Home from "../Home";
import MovieList from "../MovieList";
import * as Styled from './Layout.style';

const Layout = () => {
    const user = useSelector((state) => state?.user?.user);
    const showMovieList = Object.keys(user).length > 0;
    return (
        <Styled.LayoutWrapper>
            {
                showMovieList
                    ? <MovieList />
                    : <Home />
            }

        </Styled.LayoutWrapper>
    )
}

export default Layout;