import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { InfoProvider } from "../../ContextProvider/Context"
import { Fade } from "react-awesome-reveal";
import { Flip } from "react-toastify";
import { toast } from "react-toastify";
import Loading from "../../Loader/Loading";
import "animate.css";

export default function Todo(){
    const {user} = useContext(InfoProvider);
    const [info,setInfo] = useState(null);
    const [getItemValue,setItemValue] = useState('pending')

    const updateValue=(event)=>{
        setItemValue(event.target.value)
    }
    const updateStatus=(value)=>{
        const wrap ={
            status: getItemValue,
            id: value
        }

        axios.put('https://assignment-11-beige.vercel.app/statusUpdate',{wrap})
        .then(()=>{
            toast.success('update success', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
        })
    }

    useEffect(()=>{
        axios(`https://assignment-11-beige.vercel.app/todoService?userMail=${user.email}`)
        .then((data)=>{
            setInfo(data.data) 
        })
    },[])
    return(
        <>
        <section className="w-[1200px] mx-auto pt-[50px]">
            <Fade cascade duration={100} className="capitalize text-2xl font-serif font-bold underline">
            Service have to perform
            </Fade>
        </section>
        <section className="w-[1200px] mx-auto pt-[50px]">
        <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ServiceId</th>
        <th>Receiver Email</th>
        <th>Service Name</th>
        <th>Provider Name</th>
        <th>Provider Email</th>
        <th>Date</th>
        <th>Additional Info</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
    {
        info?info.length==0?
        <tr className="text-red-600 font-bold text-4xl capitalize">
            <th>No Item Booked</th>
        </tr>:
        info.map((value,index)=>{
            return(
                <tr key={index} className="animate__animated animate__fadeIn">
                    <th>{index}</th>
                    <th>{value.serviceId}</th>
                    <th>{value.receiver}</th>
                    <th>{value.serviceName}</th>
                    <th>{value.serviceProviderName}</th>
                    <th>{value.serviceProviderEmail}</th>
                    <th>{value.date}</th>
                    <th>{value.instruction}</th>
                    <th>
                        <select onChange={updateValue}>
                            <option value="pending">Pending</option>
                            <option value="working">Working</option>
                            <option value="completed">Completed</option>
                        </select>
                    </th>
                    <th>
                        <button className="py-1 px-2 bg-green-400 rounded-lg capitalize text-white hover:bg-gray-400 hover:text-white transition-all duration-100 ease-in" onClick={()=>{updateStatus(value.serviceId)}}>update</button>
                    </th>
                </tr>
                )
        }):<div className="flex justify-center items-center w-full h-full">
            <Loading/>
        </div>
    }
    </tbody>
  </table>
        </section>
        </>
    )
}