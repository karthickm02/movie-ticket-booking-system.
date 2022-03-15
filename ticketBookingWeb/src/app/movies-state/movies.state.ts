import { movie, theatre } from "../moviesDB";


export interface moviesState  {
    movies : movie[];
}

export interface theatreState  {
    theatres : theatre[];
}

export const initialMovieState : moviesState  = {
    movies : [],
}

export const initialTheatreState : theatreState  = {
    theatres : [],
}