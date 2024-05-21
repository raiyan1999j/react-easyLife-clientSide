import { FaImage, FaPlus } from "react-icons/fa";
import "../../App.css";
import "animate.css";
import { useContext, useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { CiCamera } from "react-icons/ci";
import { Fade } from "react-awesome-reveal";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import { InfoProvider } from "../../ContextProvider/Context";
import { useNavigate } from "react-router-dom";

const category = [
  "Consultation Services by Doctors",
  "Home Repair Services",
  "Consultation Services by Lawyers",
  "Electronic Item Repairing Services",
  "Consultation Services by psychologists",
  "Spiritual activity services",
  "Educational Services by Teachers",
  "Beauty and Grooming Services",
  "Event Management Services",
  "Fitness and Therapeutic Services",
];

export default function AddService() {
  const [condition, setCondition] = useState(false);
  const [imgUrl, setUrl] = useState(null);
  const [providerImg,setProviderImg] = useState(null);
  const [occupation, setOccupation] = useState(undefined);
  const navigate = useNavigate();
  const { user } = useContext(InfoProvider);

  const providerImgUrl=(event)=>{
    setProviderImg(event.target.value)
  }
  const imgChange = (event) => {
    setUrl(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const wrap = {
      category: form.category.value,
      service: form.service.value,
      price: form.price.value,
      description: form.description.value,
      photo: imgUrl,
      location: form.location.value,
      providerEmail:form.providerEmail.value,
      providerName: form.providerName.value,
      providerImg : providerImg,
      currentUserName:user.displayName
    };

    axios
      .post(`https://assignment-11-beige.vercel.app/addService?provider=${user.email}`, { wrap })
      .then(() => {
        toast.success("Successfully Added", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

        form.reset();
        setUrl("");
        navigate("/manage");
      });
  };

  useEffect(() => {
    axios(`https://assignment-11-beige.vercel.app/providerService?provider=${user.email}`).then(
      (data) => {
        if (data?.data?.category) {
          setOccupation(data.data.category);
        }
      }
    );
  }, []);
  return (
    <> 
      <section className="w-[1200px] mx-auto pt-[50px] animate__animated animate__fadeInLeft">
        <Fade direction="top" duration={3000} className="w-full text-center">
          <h2 className="font-bold font-mono text-4xl capitalize">
            Add your service
          </h2>
        </Fade>
          <div
            className={`w-[60%] mx-auto relative flip-card-inner ${
              condition ? "flip-rotate-180" : "flip-rotate-0"
            } h-[696px]`}
          >
            <div className="absolute w-full border border-gray-200/50 shadow-lg rounded-lg shadow-green-400 flip-card-front">
              <form className="py-4 px-10 " onSubmit={formHandler}>
                <div className="flex flex-row justify-between">
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">
                          {occupation
                            ? "You have already selected your service"
                            : "Select your service field"}
                        </span>
                      </div>
                      {occupation ? (
                        <input
                          className="input input-bordered w-full max-w-xs"
                          name="category"
                          value={occupation}
                          disabled
                        />
                      ) : (
                        <select
                          className="select select-bordered"
                          name="category"
                        >
                          <option>-- --</option>
                          {category.map((value, index) => {
                            return <option key={index}>{value}</option>;
                          })}
                        </select>
                      )}
                    </label>
                  </div>
                  <div>
                    <label className="form-control w-full max-w-xs -z-10">
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
                        <span className="label-text translate-x-[-140%]">
                          Service Image
                        </span>
                      </div>
                      <span
                        className="w-full max-w-ws translate-x-[-100%] transition-all duration-500 hover:cursor-pointer hover:text-blue-500"
                        onClick={() => {
                          setCondition(!condition);
                        }}
                      >
                        <FaImage className="text-5xl" />
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Provider Email</span>
                      </div>
                      <input
                        type="email"
                        placeholder="email"
                        name="providerEmail"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                  <div>
                  <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Provider Name</span>
                      </div>
                      <input
                        type="text"
                        placeholder="Name"
                        name="providerName"
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-row justify-between">
                  <div>
                    <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Provider Image</span>
                      </div>
                      <span className="h-[80px] w-[80px] rounded-full border flex justify-center items-center">
                        {providerImg?
                        <img src={providerImg} className="h-[90%] w-[90%] rounded-full object-cover"/>:
                        <FaImage  className="text-xl"/>
                        }
                      </span>
                    </label>
                  </div>
                  <div>
                  <label className="form-control w-full max-w-xs">
                      <div className="label">
                        <span className="label-text">Image URL</span>
                      </div>
                      <input
                        type="text"
                        placeholder="ImageUrl"
                        onChange={providerImgUrl}
                        className="input input-bordered w-full max-w-xs"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Service Area
                      </span>
                    </div>
                    <textarea
                      className="textarea textarea-bordered h-10"
                      placeholder="Your Service Area"
                      name="location"
                    ></textarea>
                  </label>
                </div>
                <div>
                  <label className="form-control">
                    <div className="label">
                      <span className="label-text">
                        Description of your activities
                      </span>
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
                  <FaPlus className="ml-4" />
                </button>
              </form>
            </div>
            <div className="absolute w-full h-full shadow-lg shadow-blue-400 rounded-lg px-10 py-10 flip-card-back flex justify-center items-center flex-col">
              <span
                className="text-blue-900 capitalize font-bold text-sm flex flex-row items-center mb-2 hover:cursor-pointer"
                onClick={() => {
                  setCondition(!condition);
                }}
              >
                <IoArrowBackSharp className="mr-4" />
                Go back to form
              </span>
              <div className="h-[400px] w-full border mx-auto rounded-lg flex justify-center items-center">
                {imgUrl ? (
                  <img src={imgUrl} className="h-full w-full rounded-lg" />
                ) : (
                  ""
                )}
                <div className="h-[50%] w-[50%] border flex flex-col items-center px-2 py-2 absolute">
                  <div>
                    <CiCamera className="text-8xl" />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Place your Image URL"
                      className="input input-bordered input-md w-full max-w-xs"
                      onChange={imgChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
