import { useLibrary } from "../hooks/useLibrary";
import { Link } from "react-router-dom";

function Header () {
    const { items, lastViewed } = useLibrary();

    return (
      <header>
        <div class="page-header">
          <div>
            <h1>
              <i class="fa-solid fa-clapperboard"></i>FilmGuru
            </h1>
            <p id="tag">These are the films you are looking for!</p>
          </div>
          <nav id="header-link">
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
            {lastViewed && (
                <Link to={`/movie-details/${lastViewed.imdbID}`}>
                    Last Viewed: {lastViewed.Title}
                </Link>
            )}
          </nav>
        </div>
      </header>
    );
}

export default Header;