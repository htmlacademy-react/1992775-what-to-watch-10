import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import MainPage from '../../pages/Main-page/Main-page';
import AddRewiew from '../../pages/Add-rewiew/Add-rewiew';
import ErrorPage from '../../pages/Error-page/Error-page';
import MoviePage from '../../pages/Movie-page/Movie-page';
import MyList from '../../pages/My-list/My-list';
import Player from '../../pages/Player/Player';
import SignIn from '../../pages/Sign-in/Sign-in';
import { AppRoute, AuthorizationStatus } from '../../const';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              title={'The Grand Budapest Hotel'}
              genre={'драма'}
              year={2014}
            />
          }
        />
        <Route path={AppRoute.Login} element={<SignIn />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route
          path={AppRoute.List}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Review} element={<AddRewiew />} />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
