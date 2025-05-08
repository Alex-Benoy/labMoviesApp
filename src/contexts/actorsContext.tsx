import { createContext, useState } from "react";

export const ActorsContext = createContext({
    favourites: [] as number[],
    addToFavourites: (id: number) => {},
  });
  
  export const ActorsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [favourites, setFavourites] = useState<number[]>([]);
  
    const addToFavourites = (id: number) => {
      if (!favourites.includes(id)) {
        setFavourites([...favourites, id]);
      }
    };
  
    return (
      <ActorsContext.Provider value={{ favourites, addToFavourites }}>
        {children}
      </ActorsContext.Provider>
    );
  };