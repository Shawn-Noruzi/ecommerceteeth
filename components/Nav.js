import Link from "next/link";
import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import Image from "next/image";
import { HamburgerElastic } from "react-animated-burgers";

export default function Nav({ size }) {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleCountry, setToggleCountry] = useState(false);
  console.log("togggle", toggleCountry);
  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setToggleCountry(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <div className="relative">
      <div className="width-full bg-black text-center pb-2 pt-2">
        <p className="text-white text-md font-medium ">
          Use WHITENOW for 20% Off
        </p>
      </div>
      <div className=" width-full bg-gray-200">
        <div className="relative text-center flex items-center justify-between max-w-6xl pt-2 pb-2 px-1 sm:px-4 mx-auto lg:max-w-screen-2xl ">
          <div
            onClick={() => setToggleCountry((prevState) => !prevState)}
            className=" ml-1 lg:ml-5 flex items-center cursor-pointer relative w-24"
            ref={wrapperRef}
          >
            <img
              alt="canada country icon"
              src="/Assets/canada.png"
              className="countryIcon transition-all hover:opacity-100"
            />
            <p className="text-black text-sm font-medium transition-all opacity-75 hover:opacity-100">
              Canada
            </p>
            <a
              href="https://www.beautifulbrightsmile.com"
              className={`absolute usContainer flex  ${
                toggleCountry ? "opacity-100 z-50" : "-z-100 opacity-0"
              }`}
            >
              <img
                alt="canada country icon"
                src="/Assets/us.png"
                className="countryIcon transition-all hover:opacity-100"
              />
              <p className="text-black text-sm font-medium transition-all opacity-75 hover:opacity-100">
                America
              </p>
            </a>
          </div>

          <a href="/login" className=" mr-1 lg:mr-5 flex items-center transition-all opacity-75 hover:opacity-100 cursor-pointer">
            <img
              alt="login icon"
              src="/Assets/login.png"
              className="loginIcon"
            />
            <p className="text-black text-sm font-medium">Login</p>
          </a>
        </div>
      </div>

      <header className="border-b sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-1 sm:px-4 mx-auto lg:max-w-screen-2xl">
          <div className="flex lg:hidden scale-50 sm:scale-75 burgerStyles">
            <HamburgerElastic
              isActive={toggleButton}
              toggleButton={() => setToggleButton(!toggleButton)}
              buttonColor="white"
              barColor="black"
            />
          </div>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-lg pt-1 font-bold navTitle">
                Beautiful Bright Smile
              </span>
            </a>
          </Link>
          <div className=" items-center justify-between hidden lg:flex -ml-36 w-80">
            <Link href="/professionals">
              <a className="text-lg font-medium text-gray-900 link-underline link-underline-black">
                Professionals{" "}
              </a>
            </Link>
            <Link href="/products">
              <a className="text-lg font-medium text-gray-900 link-underline link-underline-black">
                Products{" "}
              </a>
            </Link>
            <Link href="/faq">
              <a className="text-lg font-medium text-gray-900 link-underline link-underline-black">
                FAQ{" "}
              </a>
            </Link>
          </div>
          <a
            className="text-md font-bold cursor-pointer flex items-center mr-1 lg:mr-5"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <Image
              src="/Assets/icons/cart1.png"
              width="25px"
              height="25px"
              alt="cart icon"
            />{" "}
            ({cartQuantity})
          </a>
          <MiniCart cart={cart} />
        </div>
      </header>
      <div
        className={`absolute  w-1/2 left-0  bg-white transition-all duration-300 ease-in-out h-screen flex flex-col px-4 pt-10 ${
          toggleButton && size.width < 1025
            ? " translate-x-0"
            : "-translate-x-full"
        }`}
      >
        <Link href="/">
          <div className="flex justify-between">
            <a className="text-lg font-medium text-gray-900">
              Professionals Store{" "}
            </a>
            <img
              alt="Arrow"
              src="/Assets/home/arrow.png"
              className="navArrow"
            />
          </div>
        </Link>{" "}
        <div className="divider" />
        <Link href="/">
          <div className="flex justify-between">
            <a className=" text-lg font-medium text-gray-900">Products </a>
            <img
              alt="Arrow"
              src="/Assets/home/arrow.png"
              className="navArrow"
            />
          </div>
        </Link>
        <div className="divider" />
        <Link href="/faq">
          <div className="flex justify-between">
            <a className="text-lg font-medium text-gray-900 ">FAQ </a>
            <img
              alt="Arrow"
              src="/Assets/home/arrow.png"
              className="navArrow"
            />
          </div>
        </Link>
        <div className="divider" />
      </div>
    </div>
  );
}
// height: 100vh;
// width: 50%;
// position: absolute;
// background: white;
// z-index: 100;
