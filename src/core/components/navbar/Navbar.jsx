import React from "react";
import { Link } from "react-router-dom";
import { BiShoppingBag, BiUserCircle } from "react-icons/bi";
import { AiOutlineAlignRight } from "react-icons/ai";
import Cart from "../cart/Cart";

const Navbar = () => {
  return (
    <>
      <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <i className="bx bxs-watch nav__logo-icon"></i> Wotchy
        </Link>
        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#featured" className="nav__link">
               Shop
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
              New
              </a>
            </li>
            <li className="nav__item">
              <a href="#new" className="nav__link">
                Trending
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__btns">
          <div className="nav__shop" id="cart-shop">
            <BiUserCircle />
          </div>
          <div className="nav__shop" id="cart-shop">
            <BiShoppingBag />
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <AiOutlineAlignRight />
          </div>
        </div>
      </nav>
    </header>
    { /* */}
    <Cart />
    </>
  );
};

export default Navbar;
