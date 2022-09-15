import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './SharedLayout/SharedLayout';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Cast from '../pages/Cast/Cast';
// import Reviews from '../pages/Reviews/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

// const Home = createAsyncComponent('');
// const Movies = createAsyncComponent('../pages/Movies/Movies');
// const MovieDetails = createAsyncComponent('../pages/MovieDetails/MovieDetails');
// const Cast = createAsyncComponent('../pages/Cast/Cast');
// const Reviews = createAsyncComponent('../pages/Reviews/Reviews');

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
            {/* <Route path="about" element={<div>About</div>} />
            <Route path="test" element={<div>TEST</div>} /> */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </>
    </div>
  );
};
