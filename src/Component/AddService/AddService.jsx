import { FaImage, FaPlus } from "react-icons/fa";
import "../../App.css";
import { useContext, useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { InfoProvider } from "../../ContextProvider/Context";

const category=[
    "Consultation Services by Doctors",
    "Home Repair Services",
    "Consultation Services by Lawyers",
    "Electronic Item Repairing Services",
    "Consultation Services by psychologists",
    "Spiritual activity services",
    "Educational Services by Teachers",
    "Beauty and Grooming Services",
    "Event Management Services",
    "Fitness and Therapeutic Services"
]

export default function AddService() {
    const [condition,setCondition] = useState(false);
    const [imgUrl,setUrl] = useState(null);
    const [occupation,setOccupation] = useState(undefined);
    const {user} = useContext(InfoProvider)

    const imgChange=(event)=>{
        setUrl(event.target.value)
    }
    const formHandler=(event)=>{
        event.preventDefault();

        const form = event.target;
        const wrap ={
            category: form.category.value,
            service: form.service.value,
            price: form.price.value,
            description: form.description.value,
            photo: imgUrl
        }

        axios.post(`http://localhost:5000/addService?provider=${user.email}`,{wrap})
        .then(()=>{
          toast.success('Successfully Added',{
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            })

            form.reset();
            setUrl(null)
        })
    }

    useEffect(()=>{
      axios(`http://localhost:5000/providerService?provider=${user.email}`)
      .then((data)=>{
        if(data?.data?.category){
          setOccupation(data.data.category)
        }
      })
    },[])
  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px]">
      <Fade direction="top" duration={3000} className="w-full text-center">
        <h2 className="font-bold font-mono text-4xl capitalize">Add your service</h2>
      </Fade>
      <Fade direction="left" duration={1000}>
        <div className={`w-[60%] mx-auto shadow-md shadow-black relative flip-card-inner ${condition?"flip-rotate-180":"flip-rotate-0"}`}>
          <div className="absolute w-full border border-gray-200/50 shadow-lg rounded-lg shadow-green-400 flip-card-front">
            <form className="py-4 px-10" onSubmit={formHandler}>
              <div className="flex flex-row justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">
                      {occupation?"You have already selected your service":"Select your service field"}
                      </span>
                    </div>
                    {
                      occupation?<input className="input input-bordered w-full max-w-xs" name="category" value={occupation} disabled/>:
                      <select className="select select-bordered" name="category">
                    <option>-- --</option>
                      {category.map((value,index)=>{
                        return(
                            <option key={index}>{value}</option>
                        )
                      })}
                    </select>
                    }
                    
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Service Name</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Type here"
                      name="service"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text">Price</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Price"
                      name="price"
                      className="input input-bordered w-full max-w-xs"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text translate-x-[-140%]">Upload Image</span>
                    </div>
                    <span className="w-full max-w-ws translate-x-[-100%] transition-all duration-500 hover:cursor-pointer hover:text-blue-500" onClick={()=>{setCondition(!condition)}}>
                        <FaImage className="text-5xl"/>
                    </span>
                  </label>
                </div>
              </div>
              <div>
                <label className="form-control">
                  <div className="label">
                    <span className="label-text">Description of your activities</span>
                  </div>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder="Bio"
                    name="description"
                  ></textarea>
                </label>
              </div>
              <button className="flex flex-row justify-center items-center btn w-full bg-success my-4 text-white">
                Add Service 
                <FaPlus className="ml-4"/>
              </button>
            </form>
          </div>
          <div className="absolute w-full shadow-lg shadow-blue-400 rounded-lg px-10 py-10 flip-card-back">
          <span className="text-blue-900 capitalize font-bold text-sm flex flex-row items-center mb-2 hover:cursor-pointer" onClick={()=>{setCondition(!condition)}}>
          <IoArrowBackSharp className="mr-4" />
            Go back to form
          </span>
            <div className="h-[400px] w-full border mx-auto rounded-lg flex justify-center items-center">
            {
                imgUrl?<img src={imgUrl} className="h-full w-full rounded-lg"/>:""
            }
                <div className="h-[50%] w-[50%] border flex flex-col items-center px-2 py-2 absolute">
                    <div>
                    <CiCamera className="text-8xl"/>
                    </div>
                    <div>
                    <input type="text" placeholder="Place your Image URL" className="input input-bordered input-md w-full max-w-xs" onChange={imgChange} />
                    </div>
                </div>
            </div>
          </div>
        </div>
        </Fade>
      </section>
    </>
  );
}
