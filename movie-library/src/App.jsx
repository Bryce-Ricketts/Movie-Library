import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Library from "./pages/Library";
import ItemDetails from "./pages/ItemDetails";
import Favourites from "./pages/Favourites";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/movie-details/:id" element={<ItemDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;

console.log(import.meta.env);