import { useState } from "react";
import { MdDelete } from "react-icons/md";
import "animate.css";
import "../../App.css"
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import "animate.css"

export default function ManageCard({info,updateData,clearItem}){
    const {category,service,price,description,photo,_id,location} = info;
    const [removeItem,setRemove] = useState(true);

    return(
        <>
        <div className="w-full flex flex-col items-center animate__animated animate__flipInX">
            <div className="w-[85%] h-[250px] static z-10 shadow-lg shadow-gray-400 overflow-hidden">
            <div className="h-full w-full relative">
                <img src={photo} alt="serviceImg" className="h-full w-full object-cover rounded-lg absolute -z-10" />
                <div className="absolute top-[-20px] right-[-20px] h-[100px] w-[100px] rounded-[50%] transition-all duration-500 ease-in bg-red-500 hover:cursor-pointer hover:rounded-lg hover:h-full hover:w-full hover:top-0 hover:right-0 overflow-hidden infoCard">
                    <span className="infoIcon absolute top-[30%] left-[30%] transition-all duration-500 ease-out infoIcon">
                    <IoIosInformationCircle className="text-4xl text-" />
                    </span>
                    <div className="cardDescription hidden transition-all duration-500 ease-in h-[50%] overflow-y-scroll px-4 py-2 text-white font-mono text-base">
                        {description}
                    </div>
                    <div className="absolute left-0 bottom-4 text-white px-4 hidden cardPrice w-full">
                    <div className="w-full font-bold text-base">
                        Location : {location}
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <div>
                            <h2 className="font-bold text-base">price : <span>{price}$</span></h2>
                        </div>
                        <div>
                            <button className="px-6 py-1 font-mono capitalize bg-white text-red-500 rounded-lg hover:bg-transparent hover:text-white hover:border hover:border-white transition-all duration-500 ease-out" onClick={()=>{updateData(_id)}}>update</button>
                        </div>
                    </div>
                    </div>
                </div>

                
                </div>
            </div>
            <div className="w-full rounded-lg shadow-lg shadow-black py-5 translate-y-[-30px]  border overflow-hidden relative">
                <div className={`py-5 px-4 flex flex-row justify-between items-center ${removeItem?"translate-x-[0%] transition-all duration-500 ease-in":"slide-left"}`}>
                    <div>
                    <h2 className="font-serif text-xl font-bold">
                        {category}
                    </h2>
                    <span className="font-serif text-lg font-medium capitalize badge badge-neutral mt-4">
                        {service}
                    </span>
                    </div>
                    <div>
                        <span className="">
                        <MdDelete className="text-4xl text-red-500 hover:cursor-pointer" onClick={()=>{
                            setRemove(!removeItem)
                        }} />
                        </span>
                    </div>
                </div>

                <div className={`flex flex-row overflow-hidden w-full absolute top-[80px] ${removeItem?"translate-x-[100%] transition-all ease-out duration-500":"slide-right"}`}>
                    <div className="w-[20%] flex justify-center items-center bg-green-500 text-white hover:cursor-pointer hover:bg-transparent hover:text-green-500 transition-all duration-500 ease-in" onClick={()=>{setRemove(!removeItem)}}>
                        <span>
                        <ImCross />
                        </span>
                    </div>
                    <div className="w-[60%] flex justify-center items-center">
                        <h2 className="text-lg font-serif font-bold">
                            Are you sure?
                        </h2>
                    </div>
                    <div className="w-[20%] flex justify-center items-center bg-red-500 text-white hover:cursor-pointer hover:bg-transparent hover:text-red-500 transition-all duration-500 ease-out" onClick={()=>{
                        clearItem(_id)
                    }}>
                        <span>
                        <FaCheck />
                        </span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}