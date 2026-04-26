import { useContext } from "react";
import { LibraryContext } from "../context/LibraryContext";

export const useLibrary = () => {
  return useContext(LibraryContext);
};
