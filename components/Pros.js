import Link from "next/link";
import Image from "next/image";
export default function Pros({ size }) {
  return (
    <div className=" relative flex-col items-center  mx-auto py-16 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8  ">
      <div className="prosImageContainer relative w-full rounded-2xl roundedDiv brightness-50">
        <Image
          src={
            size.width > 992
              ? "/Assets/home/pro_desktop.jpg"
              : "/Assets/home/pro_mobile.jpg"
          }
          alt={"pros dentist"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col mt-6  absolute top-1/3 left-8 sm:left-12 md:left-24">
        <h2 className=" text-white section1Font pb-2 "> Become a Distributor</h2>
        <h3 className="text-xl text-white section2Font  pb-4 ">
          Get products designed specifically {size.width < 1024 ? <br /> : null}
          for your dental work.
        </h3>

        <a href="mailto:INFO@BEAUTIFULBRIGHTSMILE.COM">
          <button className="flex items-center max-w-sm mb-3 mt-1 border-white text-white transition-all hover:-translate-y-1  font-bold   rounded-full mr-3 w-full lg:w-auto">
              Join the Professionals Team <img alt="Arrow" src="/Assets/home/arrow.png" className="ml-2 arrow invert" /> 
          </button>
        </a>
      </div>
    </div>
  );
}
