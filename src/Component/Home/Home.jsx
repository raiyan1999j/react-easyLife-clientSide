import { useEffect, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import axios from "axios";
import ServiceCard from "../Services/ServiceCard";
import Loading from '../../Loader/Loading';
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";

export default function Home(){
    const [info,setInfo] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axios('http://localhost:5000/popular')
        .then((data)=>{
            setInfo(data.data)
            console.log(data.data)
        })
    },[])
    return(
        <>
        <section className="w-[1200px] mx-auto fixed top-[50%] right-[-43%] rotate-[90deg]">
        
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
            </div>
        </section>
        <section id="section1" className="w-[1200px] h-[500px] mx-auto">
            <HomeCarousel/>
        </section>
        <section id="section2" className="w-[1200px] mx-auto mt-[50px]">
            <h2 className="capitalize text-xl font-mono font-bold text-center mb-[50px]">Popular services</h2>

            <div className="grid grid-cols-1 gap-y-6 w-[90%] mx-auto">
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
        <section id="section3" className="w-[1200px] mx-auto my-[50px]">
            <h2 className="text-center capitalize font-bold text-2xl font-mono">Most renowned services</h2>
            <div className="w-[90%] mx-auto mt-[50px]">
                <Marquee>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-blue-400">Consultation Services by Doctors</h2>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-lime-400">Home Repair Services</h2>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-red-400">Consultation Services by Lawyers</h2>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-purple-400">Electronic Item Repairing Services</h2>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-indigo-400">Educational Services by Teachers</h2>
                    <h2 className="font-bold text-xl font-mono capitalize mx-4 text-fuchsia-500">Beauty and Grooming Services</h2>
                </Marquee>
            </div>
        </section>

        <section id="section4" className="w-[1200px] mx-auto">
        <h2 className="text-center text-2xl font-bold font-mono mb-[50px]">FAQ</h2>
            <div className="w-[80%] mx-auto">
            <div className="join join-vertical w-full">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
    How do I book a service on your website?
    </div>
    <div className="collapse-content"> 
      <p>To book a service, simply visit our website and click on the "Book Now" button. Then, select the service you need and choose a date and time convenient for you. Fill in your details and proceed to confirm your booking.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    What services do you offer?
    </div>
    <div className="collapse-content"> 
      <p>We offer a wide range of services including doctor appointments, electrician services, plumbing, carpentry, house cleaning, and more. If you need a specific service that is not listed, feel free to contact us, and we'll do our best to assist you.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    Are your professionals qualified and experienced?
    </div>
    <div className="collapse-content"> 
      <p>Yes, all our professionals are highly qualified and experienced in their respective fields. We carefully vet each professional to ensure they meet our standards of quality and professionalism.</p>
    </div>
  </div>
</div>
            </div>
        </section>

        <section id="section5" className="w-[1200px] mx-auto my-[50px]">
            <div className="w-[80%] mx-auto">
                <h2 className="text-center font-bold text-2xl capitalize font-mono mb-[50px]">Give us feedback to improve</h2>

                <form className="">
                    <div className="mb-4">
                    <input type="text" placeholder="your email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                    <input type="text" placeholder="your name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="mb-4">
                    <input type="text" placeholder="subject" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <textarea className="textarea textarea-bordered w-full" placeholder="Description"></textarea>
                    </div>
                    <div className="w-full text-center">
                        <button className="btn btn-success text-white px-8">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
        </>
    )
}