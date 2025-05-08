// contexts/tvSeriesContext.tsx
import React, { useState, useCallback } from "react";
import { TVSeriesProps } from "../types/interfaces";

interface TVSeriesContextInterface {
  favourites: number[];
  addToFavourites: (series: TVSeriesProps) => void;
  removeFromFavourites: (series: TVSeriesProps) => void;
}

export const TVSeriesContext = React.createContext<TVSeriesContextInterface>({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

const TVSeriesContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [favourites, setFavourites] = useState<number[]>([]);

  const addToFavourites = useCallback((series: TVSeriesProps) => {
    setFavourites((prev) => (!prev.includes(series.id) ? [...prev, series.id] : prev));
  }, []);

  const removeFromFavourites = useCallback((series: TVSeriesProps) => {
    setFavourites((prev) => prev.filter((id) => id !== series.id));
  }, []);

  return (
    <TVSeriesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </TVSeriesContext.Provider>
  );
};

export default TVSeriesContextProvider;
