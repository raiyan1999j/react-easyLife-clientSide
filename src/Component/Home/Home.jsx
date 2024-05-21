import { useContext, useEffect, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import axios from "axios";
import ServiceCard from "../Services/ServiceCard";
import Loading from '../../Loader/Loading';
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { MdEmail, MdHomeRepairService } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrUserExpert } from "react-icons/gr";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import "../../App.css";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { InfoProvider } from "../../ContextProvider/Context";

AOS.init();

export default function Home(){
    const [info,setInfo] = useState([]);
    const navigate = useNavigate();
    const {darkTheme} = useContext(InfoProvider)
    useEffect(()=>{
        axios('https://assignment-11-beige.vercel.app/popular')
        .then((data)=>{
            setInfo(data.data)
        })
    },[])
    return(
        <>
        <section className="w-[1200px] mx-auto fixed top-[50%] right-[-43%] rotate-[90deg] mobileS:hidden">
        
            <div className="w-full flex flex-row justify-center">
            <a href="#section1">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 hover:cursor-pointer">
                </div>
                </a>
                <a href="#section2">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 ml-3 hover:cursor-pointer">
                </div>
                </a>
                <a href="#section3">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 ml-3 hover:cursor-pointer">
                </div>
                </a>
                <a href="#section4">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 ml-3 hover:cursor-pointer">
                </div>
                </a>
                <a href="#section5">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 ml-3 hover:cursor-pointer">
                </div>
                </a>
                <a href="#section6">
                <div className="h-[15px] w-[15px] rounded-full bg-gradient-to-tr from-green-400 to-blue-400 ml-3 hover:cursor-pointer">
                </div>
                </a>
            </div>
        </section>
        <section id="section1" className="w-[1200px] h-[500px] mx-auto animate__animated animate__fadeIn mobileS:w-[320px]">
            <HomeCarousel/>
        </section>
        <section id="section2" className="w-[1200px] mx-auto mt-[150px] mobileS:w-[320px] mobileS:mt-0">
            <h2 className="capitalize text-xl font-mono font-bold text-center mb-[50px]" data-aos="fade-up">Popular services</h2>

            <div className="grid grid-cols-1 gap-y-6 w-[90%] mx-auto mobileS:w-full" data-aos="fade-up">
                {
                    info.length===0?<div className="flex justify-center items-center">
                        <Loading/>
                    </div>
                    :info.map((value,index)=>{
                        return <ServiceCard key={index} info={value}/>
                    })
                }
            </div>
            <div className="w-full flex justify-end mt-[30px]">
                <button className="btn bg-green-400 text-white px-8 py-4 hover:bg-green-700 mr-[5%]" onClick={()=>{navigate('/service')}}>
                    Show all
                </button>
            </div>
        </section>
        <section id="section3" className="w-[1200px] mx-auto my-[100px]  mobileS:w-[320px]">
            <h2 className="text-center capitalize font-bold text-2xl font-mono" data-aos="fade-up">Most renowned services</h2>
            <div className="w-[90%] mx-auto mt-[50px]">
                <Marquee >
                    <div className="h-[50px] w-[350px] mr-6">
                        <img src="https://i.postimg.cc/PrfNSSdH/doctor.png" alt="doctor" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[50px] w-[350px] mr-6">
                        <img src="https://i.postimg.cc/gjzcB0Fs/education.png" alt="education" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[50px] w-[350px] mr-6">
                        <img src="https://i.postimg.cc/TPj6MXc4/electornics.png" alt="electronics" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[50px] w-[350px] mr-6">
                        <img src="https://i.postimg.cc/xjBnzgqg/grooming.png" alt="grooming" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[50px] w-[350px] mr-6">
                        <img src="https://i.postimg.cc/zDH18Wph/home.png" alt="homeRepair" className="h-full w-full object-cover" />
                    </div>
                    <div className="h-[50px] w-[350px]">
                        <img src="https://i.postimg.cc/02g1QQHB/lawyer.png" alt="lawyer" className="h-full w-full object-cover" />
                    </div>
                </Marquee>
            </div>
        </section>

        <section className="w-[1200px] mx-auto my-[100px] mobileS:w-[320px]" id="section4">
            <div className="grid grid-cols-2 gap-x-6 w-[90%] mx-auto mobileS:grid-cols-1 mobileS:gap-y-6">
                <div className="bg-homeCard1 px-9 py-9 rounded-xl mobileS:px-4" data-aos="flip-left">
                    <h2 className="text-2xl font-bold font-serif mb-9">
                        Contact Us
                    </h2>
                    <div className="flex flex-row items-center mb-9">
                        <div className="mr-6">
                        <IoCall className="text-4xl" />
                        </div>
                        <div>
                            <span className="capitalize badge badge-neutral">Call now</span>
                            <h3 className="text-xl font-normal text-fuchsia-600">01735433906</h3>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mb-9">
                        <div className="mr-6">
                        <MdEmail className="text-4xl"/>
                        </div>
                        <div>
                            <span className="badge badge-neutral capitalize">Mail Now</span>
                            <h3 className="text-xl font-normal text-lime-700">raiyank317@gmail.com</h3>
                        </div>
                    </div>
                    <div className="flex flex-row items-center mb-9">
                        <div className="mr-6">
                        <FaLocationDot className="text-4xl" />
                        </div>
                        <div>
                            <span className="badge badge-neutral capitalize">Location</span>
                            <h3 className="text-xl font-normal text-indigo-600">Mirpur-2,Dhaka-1216</h3>
                        </div>
                    </div>
                </div>
                <div className=" bg-homeCard2 rounded-xl px-9 py-9 bg-cover bg-no-repeat" data-aos="flip-right">
                    <h2 className="text-2xl font-bold font-serif capitalize mb-9">
                        let us know your feedback
                    </h2>
                    <div>
                        <div className="flex flex-row w-full mb-6 mobileS:flex-col">
                            <div>
                            <input type="text" placeholder="Your name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="ml-6 mobileS:ml-0 mobileS:mt-4">
                            <input type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="flex flex-row mb-6 mobileS:flex-col">
                            <div>
                            <input type="text" placeholder="Subject" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className="ml-6 mobileS:ml-0 mobileS:mt-6">
                            <input type="text" placeholder="Phone number" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div>
                        <textarea className="textarea textarea-bordered w-[88%] h-40 mobileS:w-full" placeholder="Message"></textarea>
                        </div>
                        <div className="w-full mt-4">
                            <button className="btn btn-success w-[88%] py-4 text-white">Send to us</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="my-[100px]" id="section5">
            <div className="text-center mb-[50px]">
                <h2 className="capitalize font-bold text-xl font-serif">Why choose Us</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-6 justify-between w-[90%] mx-auto mobileS:grid-cols-1 mobileS:gap-y-6">
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className="pb-6">
                    <MdHomeRepairService className=" text-7xl text-pink-700"/>
                    </div>
                    <div>
                        <h4 className="font-mono italic font-bold text-xl text-blue-500">Diverse Service Offerings</h4>
                        <p className={`text-justify font-serif text-base ${darkTheme?"text-blue-950":"text-white"} py-4 pr-4`}>
                        Our platform hosts a wide array of services, ensuring that you can find exactly what you need. From professional services like graphic design and writing to everyday help like home repairs and tutoring, our diverse community of providers covers it all.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="1000">
                    <div className="pb-6">
                    <VscWorkspaceTrusted className=" text-7xl text-green-700" />
                    </div>
                    <div>
                        <h4 className="font-mono italic font-bold text-xl text-blue-500">Trusted Community</h4>
                        <p className={`text-justify font-serif text-base ${darkTheme?"text-blue-950":"text-white"} py-4 pr-4`}>
                        We prioritize the safety and satisfaction of our users. Our platform includes robust verification processes, user reviews, and ratings, so you can confidently choose and provide services knowing that our community values trust and reliability.
                        </p>
                    </div>
                </div>
                <div data-aos="fade-right" data-aos-delay="1500">
                    <div className="pb-6">
                    <GrUserExpert className=" text-7xl text-indigo-600" />
                    </div>
                    <div>
                        <h4 className="font-mono italic font-bold text-xl text-blue-500"> Seamless Experience</h4>
                        <p className={`text-justify font-serif text-base ${darkTheme?"text-blue-950":"text-white"} py-4 pr-4`}>
                        Our user-friendly interface makes it easy to search for services, connect with providers, and manage your listings. With intuitive navigation, secure payment options, and responsive support, your experience on our platform is smooth and hassle-free.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}