import { useNavigate, useParams, Link } from "react-router-dom";
import { useAPI } from "../hooks/useAPI";
import { useLibrary } from "../hooks/useLibrary";

function ItemDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem } = useLibrary();

  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const url = id ? `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}` : null;

  const { data, loading, error } = useAPI(url);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!data) return null;

  return (
    <div id="chosen">
      <div id="summary">
        <h1 id="chosen-movie">{data.Title}</h1>
        <p id="year">{data.Year}</p>
        <p id="rating">IMDB Rating: {data.imdbRating}</p>
      </div>
      <div id="summary-two">
        <p id="plot">{data.Plot}</p>
        <p>Rated: {data.Rated}</p>
        <p>Released: {data.Released}</p>
        <p>Runtime: {data.Runtime}</p>
        <p>Genre: {data.Genre}</p>
        <p>Director: {data.Director}</p>
        <p>Writer: {data.Writer}</p>
        <p>Actors: {data.Actors}</p>
      </div>
      <div id="fave-buttons">
        <button onClick={() => addItem(data)}>Favourite</button>
        <br />
        <Link to="/favourites">Go to Favourites</Link>
        <br />
      </div>
      <div id="back-button">
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}

export default ItemDetails;
