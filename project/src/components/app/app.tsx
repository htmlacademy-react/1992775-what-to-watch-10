import React from "react";
import MainPage from "../../pages/Main-page/Main-page";

type AboutFilm = {
  title: string;
  genre: string;
  year: number
};

function App(): JSX.Element {
  return (
    <MainPage
      title={'The Grand Budapest Hotel'}
      genre={'драма'}
      year={2014}
    />
  );
}

export default App;
