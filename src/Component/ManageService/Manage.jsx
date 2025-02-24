import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/Context";
import axios from "axios";
import ManageCard from "./ManageCard";
import UpdateService from "./UpdateService";
import { Flip, toast } from "react-toastify";
import Loading from "../../Loader/Loading";

export default function Manage() {
    const {user} = useContext(InfoProvider);
    const [allInfo,setInfo] = useState(null);
    const [container,setContainer] = useState([]);
    const [modal,setModal] = useState(false);

    useEffect(()=>{
        axios(`https://assignment-11-beige.vercel.app/providerAllData?user=${user?.email}`)
        .then((data)=>{
            setInfo(data.data)
        })
    },[modal])

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

    const itemClear=(value)=>{
      const step1 = allInfo.filter((val)=>{
        return val._id != value;
      })

      setInfo(step1);

      axios.delete(`https://assignment-11-beige.vercel.app/removeItem/${value}`)
      .then(()=>{
        toast.success('Item removed!', {
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
  return (
    <>
    
      <section className="w-[1200px] mx-auto pt-[50px] -z-10">
      {
        modal?<UpdateService 
        selectedInfo={container[0]}
        showModal={(value)=>{modalShow(value)}}/>:""
      }
        <div className="w-full grid grid-cols-3 gap-x-6 gap-y-6">
        {
          allInfo?allInfo?.map((value)=>{
                   return <ManageCard 
                   key={value._id} 
                   info={value} 
                   updateData={(value)=>{dataUpdate(value)}}
                   clearItem={(value)=>{itemClear(value)}}
                   />
                }):
                <div className="flex justify-center items-center h-full w-screen">
                  <Loading/>
                </div>
        }
        </div>
      </section>
    </>
  );
}
