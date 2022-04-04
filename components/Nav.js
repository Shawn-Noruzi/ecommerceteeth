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
        <p className="text-white ">Use code: WHITENOW for 20% off</p>
      </div>
      <header className="border-b sticky top-0 z-20 bg-white">
        <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-2xl">
          <div className="flex lg:hidden">
            <HamburgerElastic
              isActive={toggleButton}
              toggleButton={() => setToggleButton(!toggleButton)}
              buttonColor="white"
              barColor="black"
            />
          </div>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <span className="text-lg pt-1 font-bold">
                Beautiful Bright Smile
              </span>
            </a>
          </Link>
          <div className=" items-center justify-between hidden space-x-8 lg:flex -ml-36">
            <Link href="/professionals">
              <a className="">
                Professionals {" "}

              </a>
            </Link>
            <Link href="/products">
              <a className="mr-12">
                Products{" "}

              </a>
            </Link>
            <Link href="/faq">
              <a className="mr-12">FAQ </a>
            </Link>
          </div>
          <a
            className="text-md font-bold cursor-pointer flex items-center"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <Image
              src="/Assets/icons/cart1.png"
              width="30px"
              height="30px"
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