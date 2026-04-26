import { Link } from "react-router-dom"
import { useState } from "react";
import { useAPI } from "../hooks/useAPI";

function Search() {
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

    const url = searchTerm
        ? `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        : null;
    

    const { data, loading, error } = useAPI(url);

     const handleSearch = () => {
       setSearchTerm(query);
     };
    
    return (
      <div id="search">
        <h1>Search for a movie</h1>
        <input
          type="text"
          placholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />

        {loading && <p>Search by movie title...</p>}
        {error && <p>Error: {error}</p>}
        {data?.Search?.map((movie) => (
          <Link key={movie.imdbID} to={`/movie-details/${movie.imdbID}`}>
            <div>
              <p>
                {movie.Title} ({movie.Year})
              </p>
            </div>
          </Link>
        ))}
        <br></br>
        <Link to="/favourites">See your favourited films</Link>
      </div>
    );
}



export default Search;