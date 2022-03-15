import { Action, createReducer, on } from "@ngrx/store";
import { dataAction, movies, theatres } from "./movies.action";
import { initialMovieState, initialTheatreState, moviesState, theatreState } from "./movies.state";


export const _moviesReducer = createReducer (
  initialMovieState,
    on(movies, (state, action) => {
        return {
            ...state,
            movies: action.moviesList,
        }
    })
)

export const _theatreReducer = createReducer (
  initialTheatreState,
    on(theatres, (state, action) => {
        return {
            ...state,
            theatres: action.theatresList,
        }
    })
)
/*
export function moviessReducer(state: moviesState | undefined, action: Action) {
    return _moviesReducer(state, action);
  }
  export function chatReducer(state: IChatState, action: ChatAction) {
    switch (action.type) {
      case EChatAction.ChatHistory: {
        return {
          ...state,
          [action.chatId]: action.chatHistory,
        };
      }
*/

  export function movieReducer(state:moviesState, action: any) {
    return _moviesReducer(state,action);
  }

    export function theatreReducer(state:theatreState, action: any) {
      return _theatreReducer(state,action);
    }

      // switch (action.type) {
      //     case dataAction.movies:
      //       return {
      //           ...state,
      //           movies : action.moviesList,
      //         };
      
      //     default:
      //         return state;
      //         break;
      // }
  