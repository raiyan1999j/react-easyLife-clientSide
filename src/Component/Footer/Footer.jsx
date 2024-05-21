import { useContext } from "react";
import { FaFacebookF, FaFacebookSquare, FaLinkedin, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineCopyright } from "react-icons/md";

export default function Footer(){
  return(
    <>
      <section className="w-[1200px] mx-auto py-[40px] mobileS:w-[320px]">
        <div className="grid grid-cols-3 gap-x-6 items-center mobileS:grid-cols-1 mobileS:gap-y-6">
          <div className="mobileS:px-10">
            <h2 className="text-xl capitalize font-bold font-serif pb-4">About us</h2>
            <p className="text-base capitalize font-mono font-normal text-balance">
            Welcome to <span className="badge badge-neutral">easyLife</span>, the platform that connects service seekers with providers. Our mission is to create a trusted community where you can easily find and offer a variety of services. Join us today and discover endless opportunities right at your fingertips.
            </p>
          </div>
          <div>
            <div className="flex flex-col items-center mb-5">
              <div className="w-[50px]">
              <img src="https://i.postimg.cc/yxkKqRXY/vecteezy-dream-butterfly-png-ai-generative-24499854.png" alt="logoImg" className="h-full w-full object-contain" />
              </div>
              <div className="w-[150px]">
              <img src="https://i.postimg.cc/13WLSXX8/0000.png" alt="logoText" className="h-full w-full object-contain" />
              </div>
            </div>
            <div className="flex flex-row justify-center">
              <div className="mr-4">
                <a href="">
                <FaFacebookSquare className="text-3xl hover:text-indigo-600 transition-all duration-500 ease-in" />
                </a>
              </div>
              <div>
                <a href="">
                <FaLinkedin className="text-3xl hover:text-blue-600 transition all duration-500 ease-in" />
                </a>
              </div>
            </div>
            <div className="text-center mt-5">
              <span className="font-mono capitalize">copyright <span className="font-bold text-xl">&#169;</span> easyLife.All right reserve</span>
            </div>
          </div>
          <div>
          <h2 className="text-xl font-serif font-bold capitalize pb4">Contact us</h2>
            <div className="h-[250px] w-full">
              <a href="#section4">
              <img src="https://i.postimg.cc/y8Hq4dkm/world-map-12293.png" alt="location" className="h-full w-full object-cover" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}