import { useReducer, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MovieList from "./cine/MovieList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { movieContext, themeContext } from "./context";
import { cartReducer, initialState } from "./reducers/cartReducer";

export default function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <div className={`h-full w-full ${darkMode ? "dark" : ""}`}>
      {/* <movieContext.Provider value={{ cartData, setCartData }}> */}
      {/* ekhon j j jaigai cartData, setCartData state  use korachilam se sob jaigai state r dispatch diye replace korte hobe. First e jai Header e. Tarpor movieCard e.*/}
      <movieContext.Provider value={{ state, dispatch }}>
        <themeContext.Provider value={{ darkMode, setDarkMode }}>
          <Header />
          <main>
            <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
              <Sidebar />
              <MovieList />
            </div>
          </main>
          <Footer />
          <ToastContainer />
        </themeContext.Provider>
      </movieContext.Provider>
    </div>
  );
}
