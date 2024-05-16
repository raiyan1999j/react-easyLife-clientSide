import axios from "axios"
import { useContext, useEffect,useState } from "react"
import { InfoProvider } from "../../ContextProvider/Context"
import { Fade } from "react-awesome-reveal";
import "animate.css"

export default function Booked(){
    const {user} = useContext(InfoProvider);
    const [info,setInfo] = useState([]);

    useEffect(()=>{
        axios(`http://localhost:5000/bookedItem?userMail=${user.email}`)
        .then((data)=>{
            setInfo(data.data)
            console.log(data.data)
        })
    },[])
    return(
        <>
            <section className="w-[1200px] mx-auto pt-[50px]">
                <Fade cascade duration={100} className="text-2xl font-bold font-serif capitalize underline">Your booked list</Fade>
            </section>
            <section className="w-[1200px] mx-auto pt-[50px] animate__animated animate__fadeInRight">
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
        info.length==0?<tr className="text-red-600 font-bold text-4xl capitalize">
            <th>No Item Booked</th>
        </tr>
        : info.map((value,index)=>{
            return(
                <tr key={index}>
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
        })
    }
    </tbody>
  </table>
</div>
            </section>
        </>
    )
}