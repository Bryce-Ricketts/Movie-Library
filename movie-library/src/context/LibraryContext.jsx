import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [items, setItems] = useLocalStorage("library", []);


  const addItem = (movie) => {
    setItems((prev) => {
      const exists = prev.find((item) => item.imdbID === movie.imdbID);

      if (exists) {
        alert("You have already favourited this movie!");
        return prev;
      }

      return [...prev, movie];
    });
  };


  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.imdbID !== id));
  };

  const toggleFavorite = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isFavorite: !item.isFavorite } : item,
      ),
    );
  };

  return (
    <LibraryContext.Provider
      value={{ items, addItem, removeItem, toggleFavorite }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  return useContext(LibraryContext);
};
