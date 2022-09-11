import { Routes, Route } from 'react-router-dom';

import { SharedLayout } from './SharedLayout/SharedLayout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';

// import { NavLinkStyled } from './App.styled';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="about" element={<div>About</div>} />
            <Route path="test" element={<div>TEST</div>} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    </div>
  );
};
