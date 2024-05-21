import { ImCross } from "react-icons/im";
import "../../App.css";
import "animate.css";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
import "animate.css";
import { Form } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { FaImage } from "react-icons/fa";

export default function UpdateService({ showModal, selectedInfo }) {
  const { _id, service, price, description, photo,location, providerName,providerEmail,providerImg } = selectedInfo;
  const [imgHandle, setImg] = useState(photo);
  const [proImgChange,setProImg] = useState(providerImg);

  const formHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const wrap = {
      service: form.service.value,
      price: form.price.value,
      description: form.description.value,
      photo: imgHandle,
      location:form.location.value,
      providerEmail: form.providerEmail.value,
      providerImg : proImgChange,
      providerName: form.providerName.value
    };

    axios
      .put(`https://assignment-11-beige.vercel.app/updateService/${_id}`, { wrap })
      .then(() => {
        toast.success("update successful", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      })
      .then(()=>{
        showModal(false)
      })
      .catch(() => {
        toast.error("something wrong try again latter", {
          position: "top-left",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      });
  };

  const imgChanger = (event) => {
    setImg(event.target.value);
  };

  const providerPhoto=(event)=>{
    setProImg(event.target.value)
  }
  return (
    <>
      <div
        className="h-[40px] w-[40px] flex justify-center items-center text-white rounded-full bg-success/50 absolute z-50 right-[4%] top-[50%] hover:cursor-pointer hover:bg-red-500/50 transition-all duration-500"
        onClick={() => {
          showModal(false);
        }}
      >
        <ImCross className="z-50"/>
      </div>
      <div className="w-[1200px] pt-[50px] mx-auto flex justify-center items-center h-screen absolute top-0 z-30 animate__animated animate__flipInX">
        <div className="w-[90%] py-6 px-4 modalCard grid grid-cols-2 gap-x-4 items-center">
          <div className="w-full h-[500px] modalImgCard rounded-lg flex justify-center items-center">
            <div className="h-[90%] w-[90%] border border-white rounded-lg absolute">
              <img
                src={photo}
                alt="serviceImg"
                className="h-full w-full object-cover rounded-lg absolute"
              />
              <span className="absolute text-5xl h-full w-full flex flex-col justify-center items-center">
                <CiCamera className="text-white" />
                <label className="form-control w-full max-w-xs">
                  <div className="label"></div>
                  <input
                    type="text"
                    placeholder="Image Url"
                    defaultValue={photo}
                    onChange={imgChanger}
                    className="input input-bordered w-full max-w-xs"
                  />
                </label>
              </span>
            </div>
          </div>
          <div>
            <Form onSubmit={formHandler}>
              <div className="flex flex-row justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Service Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Service Name"
                      defaultValue={service}
                      name="service"
                      className="py-3 px-3 w-full max-w-xs modalInput placeholder:text-white text-white font-mono capitalize"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">Price</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Price"
                      defaultValue={price}
                      name="price"
                      className="py-3 px-3 w-full max-w-xs modalInput placeholder:text-white text-white font-mono capitalize"
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Provider Name
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Provider Name"
                      defaultValue={providerName}
                      name="providerName"
                      className="py-3 px-3 w-full max-w-xs modalInput placeholder:text-white text-white font-mono capitalize"
                    />
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Provider Email
                      </span>
                    </div>
                    <input
                      type="text"
                      placeholder="Provider Email"
                      defaultValue={providerEmail}
                      name="providerEmail"
                      className="py-3 px-3 w-full max-w-xs modalInput placeholder:text-white text-white font-mono capitalize"
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">
                        Provider Image
                      </span>
                    </div>
                    <span className="h-[50px] w-[50px] rounded-full border flex justify-center items-center">
                      {
                        providerImg?<img src={proImgChange} className="h-full w-full object-cover rounded-full"/>:
                        <FaImage />
                      }
                    </span>
                  </label>
                </div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <div className="label">
                      <span className="label-text text-white">Provider Image Url</span>
                    </div>
                    <input
                      type="text"
                      placeholder="Provider Image"
                      defaultValue={proImgChange}
                      onChange={providerPhoto}
                      className="py-3 px-3 w-full max-w-xs modalInput placeholder:text-white text-white font-mono capitalize"
                    />
                  </label>
                </div>
              </div>
              <div className="w-full">
              <label className="form-control">
                  <div className="label">
                    <span className="label-text text-white">Location</span>
                  </div>
                  <textarea
                    className="h-[50px] modalInput px-4 py-4 placeholder:text-white text-white font-semibold font-mono"
                    placeholder="Location"
                    name="location"
                    defaultValue={location}
                  ></textarea>
                </label>
              </div>
              <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-white">Description</span>
                  </div>
                  <textarea
                    className="h-[150px] modalInput px-4 py-4 placeholder:text-white text-white font-semibold font-mono"
                    placeholder="Description"
                    name="description"
                    defaultValue={description}
                  ></textarea>
                </label>
              </div>
              <div className="mt-5">
                <button className="w-full text-center capitalize font-mono py-4 modalButton text-white font-bold transition-all duration-500 ease-out">
                  Update
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
