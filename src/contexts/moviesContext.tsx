import React, { useState, useCallback } from "react";
import { BaseMovieProps, Review } from "../types/interfaces";


interface MovieContextInterface {
    favourites: number[];
    mustWatch: number[];
    addToFavourites: ((movie: BaseMovieProps) => void);
    removeFromFavourites: ((movie: BaseMovieProps) => void);
    addToMustWatch: (movie: BaseMovieProps) => void;
    addReview: ((movie: BaseMovieProps, review: Review) => void);
}
const initialContextState: MovieContextInterface = {
    favourites: [],
    mustWatch: [],
    addToFavourites: () => {},
    removeFromFavourites: () => {},
    addToMustWatch: () => {},
    addReview: (movie, review) => { movie.id, review}, 
};

export const MoviesContext = React.createContext<MovieContextInterface>(initialContextState);

const MoviesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
    const [mustWatch, setMustWatch] = useState<number[]>([]);
    const [myReviews, setMyReviews] = useState<Review[]>( [] )

    const addReview = (movie:BaseMovieProps, review: Review) => {   // NEW
        setMyReviews( {...myReviews, [movie.id]: review } )
      };

    const addToFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => {
            if (!prevFavourites.includes(movie.id)) {
                return [...prevFavourites, movie.id];
            }
            return prevFavourites;
        });
    }, []);

    const removeFromFavourites = useCallback((movie: BaseMovieProps) => {
        setFavourites((prevFavourites) => prevFavourites.filter((mId) => mId !== movie.id));
    }, []);

    const addToMustWatch = useCallback((movie: BaseMovieProps) => {
        setMustWatch((prev) => {
          const updated = prev.includes(movie.id) ? prev : [...prev, movie.id];
          console.log("Must Watch List:", updated); // ✅ Confirm it works
          return updated;
        });
      }, []);

    return (
        <MoviesContext.Provider
            value={{
                favourites,
                mustWatch,
                addToFavourites,
                removeFromFavourites,
                addToMustWatch,
                addReview,
            }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

export default MoviesContextProvider;
