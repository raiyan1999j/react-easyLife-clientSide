import { useEffect, useState } from "react";
import HomeCarousel from "./HomeCarousel";
import axios from "axios";
import ServiceCard from "../Services/ServiceCard";
import Loading from '../../Loader/Loading';
import { useNavigate } from "react-router-dom";

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
        <section id="section3" className="w-[1200px] mx-auto"></section>
        </>
    )
}