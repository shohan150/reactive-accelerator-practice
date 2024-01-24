import { useContext, useState } from "react";
import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import logo from "./assets/logo.svg";
import ring from "./assets/ring.svg";
import cart from "./assets/shopping-cart.svg";
import CartDetails from "./cine/CartDetails";
import { movieContext, themeContext } from "./context";
export default function Header() {
  const [showCart, setShowCart] = useState(false);
  // const { cartData } = useContext(movieContext);
  //ekhon r useContext theke cartData pabo na. Pabo state r dispatch.
  const { state } = useContext(movieContext);
  const { darkMode, setDarkMode } = useContext(themeContext);

  function handleCartShow() {
    setShowCart(true);
  }

  function handleCartClose() {
    setShowCart(false);
  }
  return (
    <header>
      {showCart && <CartDetails onClose={handleCartClose} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setDarkMode(!darkMode)}
            >
              <img src={darkMode ? sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={handleCartShow}
            >
              <img src={cart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && (
                <span className="rounded-full absolute top-[-12px] left-[28px] bg-[#12cf6f] text-white text-center p-[2px] w-[30px] h-[30px]">
                  {state.cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
