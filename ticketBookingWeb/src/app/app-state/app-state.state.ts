import { movieReducer, theatreReducer } from "../movies-state/movies.reducer";
import { movie, theatre } from "../moviesDB";

export interface AppState {
    movies : movie[];
    theatres : theatre[]
}

export const appReducer = {
    movies : movieReducer,
    theatres : theatreReducer
}