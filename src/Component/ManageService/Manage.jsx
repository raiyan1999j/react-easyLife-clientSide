import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/Context";
import axios from "axios";
import ManageCard from "./ManageCard";
import UpdateService from "./UpdateService";

export default function Manage() {
    const {user} = useContext(InfoProvider);
    const [allInfo,setInfo] = useState([]);
    const [container,setContainer] = useState([]);
    const [modal,setModal] = useState(false);

    useEffect(()=>{
        axios(`http://localhost:5000/providerAllData?user=${user?.email}`)
        .then((data)=>{
            setInfo(data.data)
        })
    },[])

    const dataUpdate=(value)=>{
      setModal(true)
      const step1 = allInfo.filter((val)=>{
        return val._id == value;
      })

      setContainer(step1);
    }
    const modalShow=(value)=>{
      setModal(value)
      setContainer([])
    }
  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px] relative">
      {
        modal?<UpdateService 
        selectedInfo={container[0]}
        showModal={(value)=>{modalShow(value)}}/>:""
      }
        <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6 absolute">
            {
                allInfo?.map((value)=>{
                   return <ManageCard 
                   key={value._id} 
                   info={value} 
                   updateData={(value)=>{dataUpdate(value)}}
                   />
                })
            }
        </div>
      </section>
    </>
  );
}
