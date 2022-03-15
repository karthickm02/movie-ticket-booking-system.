import { createFeatureSelector, createSelector } from "@ngrx/store";
import { moviesState, theatreState } from "./movies.state";

const getMoviesState = createFeatureSelector<moviesState>("movies");

export const getMovies = createSelector(getMoviesState, (store) => {
    return store.movies;
})

const getTheatresState = createFeatureSelector<theatreState>("theatres");

export const getTheatres = createSelector(getTheatresState, (store) => {
    return store.theatres;
})