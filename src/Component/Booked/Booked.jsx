import axios from "axios"
import { useContext, useEffect,useState } from "react"
import { InfoProvider } from "../../ContextProvider/Context"
import { Fade } from "react-awesome-reveal";
import "animate.css"
import Loading from "../../Loader/Loading";

export default function Booked(){
    const {user} = useContext(InfoProvider);
    const [info,setInfo] = useState(null);

    useEffect(()=>{
        axios(`https://assignment-11-beige.vercel.app/bookedItem?userMail=${user.email}`)
        .then((data)=>{
            setInfo(data.data)
            console.log(data.data)
        })
    },[])
    return(
        <>
            <section className="w-[1200px] mx-auto pt-[50px]">
                <h2 className="text-2xl font-bold font-serif capitalize underline animate__animated animate__flipInX">Your booked list</h2>
            </section>
            <section className="w-[1200px] mx-auto pt-[50px]">
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ServiceId</th>
        <th>Provider Email</th>
        <th>Provider Name</th>
        <th>Service Name</th>
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
                    <th>{value.serviceProviderEmail}</th>
                    <th>{value.serviceProviderName}</th>
                    <th>{value.serviceName}</th>
                    <th>{value.date}</th>
                    <th>{value.instruction}</th>
                    <th>{value.status}</th>
                </tr>
                )
        }):
        <div className="h-full w-full flex justify-center items-center">
            <Loading/>
        </div>
    }
    </tbody>
  </table>
</div>
            </section>
        </>
    )
}