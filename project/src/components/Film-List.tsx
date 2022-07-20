import React from "react";
import { films } from "../mocks/films";
import { FilmsCollection } from '../types/films';
import OneCard from "./One-card";

type OneCardScreen = {
  oneFilm: FilmsCollection[];
};

function FilmList(oneFilm: OneCardScreen) {
    <OneCard props={films}/>
}
