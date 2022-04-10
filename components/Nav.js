import Link from "next/link";
import { useContext, useState } from "react";
import { CartContext } from "../context/shopContext";
import MiniCart from "./MiniCart";
import Image from "next/image";
import { HamburgerElastic } from "react-animated-burgers";


export default function Nav({size}) {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);
  const [toggleButton, setToggleButton] = useState(false);


  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });

  return (
    <div className="relative">
      <div className="width-full bg-black text-center pb-2 pt-2">
        <p className="text-white text-md font-medium ">Use WHITENOW for 20% Off</p>
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
              <a className="text-lg font-medium text-gray-900">
                Professionals {" "}

              </a>
            </Link>
            <Link href="/products">
              <a className="text-lg font-medium text-gray-900">
                Products{" "}

              </a>
            </Link>
            <Link href="/faq">
              <a className="text-lg font-medium text-gray-900">FAQ </a>
            </Link>
          </div>
          <a
            className="text-md font-bold cursor-pointer flex items-center sm:mr-5"
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
      <div className={toggleButton && size.width < 1025 ? "absolute z-20 left-0 w-1/2 h-screen  bg-white transition-all duration-300 ease-in-out translate-x-0 flex flex-col" : "absolute -z-10  bg-white transition-all ease-in-out -translate-x-full flex flex-col"}>

        <Link href="/">
          <a className="">
            Professionals Store{" "}

          </a>
        </Link>
        <Link href="/">
          <a className="mr-12">
            Products{" "}

          </a>
        </Link>
        <Link href="/faq">
          <a className="mr-12">FAQ </a>
        </Link>
      </div>
    </div>

  );
}
// height: 100vh;
// width: 50%;
// position: absolute;
// background: white;
// z-index: 100;