import { useNavigate } from "react-router-dom";
import { useLibrary } from "../hooks/useLibrary";

function Favourites() {
    const navigate = useNavigate();
    const { items, removeItem } = useLibrary();

    return (
      <div id="favourites">
        <h1>Your favourite films</h1>
        {items.length === 0 ? (
          <p>No Favourited films</p>
        ) : (
          items.map((movie) => (
            <div key={movie.imdbID} id="ind-fave">
              <p>{movie.Title}</p>
              <p>{movie.Released}</p>
              <button onClick={() => removeItem(movie.imdbID)}>
                Remove from Favourites
              </button>
              <br></br>
            </div>
          ))
        )}
    
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    );
}

export default Favourites;
