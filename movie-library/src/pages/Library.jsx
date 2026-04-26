import { useNavigate } from "react-router-dom";
import { useLibrary } from "../context/LibraryContext";

function Library() {
  const navigate = useNavigate();
  const { items } = useLibrary();

   console.log("Library items:", items);

  return (
    <div>
      <h1>Your movie library</h1>
      {items.length === 0 ? (
        <p>No movies yet</p>
      ) : (
        items.map((movie) => <p key={movie.id}>{movie.title}</p>)
      )}
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default Library;