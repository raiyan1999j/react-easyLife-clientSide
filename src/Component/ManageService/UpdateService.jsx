import { ImCross } from "react-icons/im";
import "../../App.css";
import "animate.css";
import { CiCamera } from "react-icons/ci";
import { useState } from "react";
import "animate.css";
import { Form } from "react-router-dom";
import axios from "axios";
import { Bounce, toast } from "react-toastify";

export default function UpdateService({ showModal, selectedInfo }) {
  const { _id, service, price, description, photo } = selectedInfo;
  const [imgHandle, setImg] = useState(photo);

  const formHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const wrap = {
      service: form.service.value,
      price: form.price.value,
      description: form.description.value,
      photo: imgHandle,
    };

    axios
      .put(`http://localhost:5000/updateService/${_id}`, { wrap })
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
  return (
    <>
      <div
        className="h-[40px] w-[40px] flex justify-center items-center text-white rounded-full modalInput absolute z-50 right-[4%] top-[200%] hover:cursor-pointer"
        onClick={() => {
          showModal(false);
        }}
      >
        <ImCross />
      </div>
      <div className="w-[1200px] mx-auto flex justify-center items-center h-screen absolute top-0 z-30 animate__animated animate__flipInX">
        <div className="w-[90%] py-6 px-4 modalCard grid grid-cols-2 gap-x-4">
          <div className="w-full h-[400px] modalImgCard rounded-lg flex justify-center items-center">
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
              <div className="w-full">
                <label className="form-control">
                  <div className="label">
                    <span className="label-text text-white">Description</span>
                  </div>
                  <textarea
                    className="h-[200px] modalInput px-4 py-4 placeholder:text-white text-white font-semibold font-mono"
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
