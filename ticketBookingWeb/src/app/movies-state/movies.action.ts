import { Action, createAction, props } from "@ngrx/store";
import { movie, theatre } from "../moviesDB";

export  enum dataAction  {
    movies = "[movies] load movies",
    theatres = "[theatres] load theatres"
}

export const movies = createAction(dataAction.movies , props<{moviesList: movie[]}>())

export const theatres = createAction(dataAction.theatres , props<{theatresList: theatre[]}>())

