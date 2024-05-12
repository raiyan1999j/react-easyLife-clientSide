import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/Context";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast,Flip, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../Loader/Loading";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [imgPreview, setImg] = useState(null);
  const [txtPass, setTxtPass] = useState(false);
  const navigate = useNavigate();
  const { registration,user,load } = useContext(InfoProvider);

  const formHandler = (event) => {
    event.preventDefault();

    const emailVerification =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passVerification = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    const urlVerification = /^(ftp|http|https):\/\/[^ "]+$/;

    const form = event.target;
    const wrap = {
      name: form.name.value,
      email: form.email.value,
      pass: form.pass.value,
      photo: form.photo.value,
    };

    const condition = {
      name: false,
      email: false,
      pass: false,
      photo: false,
    };

    if (wrap.name.length < 3) {
      toast.error('name should be at least 3 character', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }else{
      condition.name = true;
    }

    if(!emailVerification.test(wrap.email)){
      toast.error('please insert valid email', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }else{
      condition.email = true;
    }

    if(!passVerification.test(wrap.pass)){
      toast.error('Passwords must be at least 6 characters long and include one uppercase letter, one lowercase letter, and one number.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Flip,
        });
    }else{
      condition.pass = true;
    }

    if(!urlVerification.test(wrap.photo)){
      toast.error('Please insert valid URL ', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
        });
    }else{
      condition.photo = true;
    }

    if(condition.email && condition.name && condition.pass && condition.photo){
      registration(wrap);
    }

    form.reset();
  };

  const imgHandle = (event) => {
    const val = event.target.value;

    setImg(val);
  };

  const textPassCon = () => {
    setTxtPass(!txtPass);
  };

  useEffect(()=>{
    if(user){
      navigate('/home')
    }
  },[user])
  return (
    <>
    {
      load?
      <div className="h-screen w-full flex justify-center items-center">
      <Loading/>
      </div>:
      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="w-[30%] mx-auto border rounded-xl shadow-xl">
          <div className="h-[80px] w-full bg-navBarImg bg-cover rounded-t-xl flex justify-center items-center">
            <h2 className="text-white text-xl font-serif capitalize">
              Create a account
            </h2>
          </div>
          <div className="px-6 py-6">
            <div className="w-full">
              <div className="h-[80px] w-[80px] rounded-full border flex justify-center items-center">
                <img
                  src={
                    imgPreview
                      ? imgPreview
                      : "https://i.postimg.cc/VkN04VPM/image.png"
                  }
                  alt="profileImg"
                  className={`${
                    imgPreview
                      ? "h-[90%] w-[90%] rounded-full"
                      : "h-[30px] w-[30px]"
                  } object-cover`}
                />
              </div>
            </div>

            <div>
              <form onSubmit={formHandler}>
                <label className="input input-bordered flex items-center gap-2 mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    name="email"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 my-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                  </svg>
                  <input
                    type="text"
                    className="grow"
                    placeholder="Username"
                    name="name"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type={txtPass ? "text" : "password"}
                    className="grow"
                    name="pass"
                    placeholder="Password"
                  />
                  <span
                    className="absolute right-4 hover:cursor-pointer"
                    onClick={textPassCon}
                  >
                    {txtPass ? <FaRegEye /> : <FaEyeSlash />}
                  </span>
                </label>

                <label className="input input-bordered flex items-center gap-2 my-6">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Photo URL"
                    name="photo"
                    onChange={imgHandle}
                  />
                </label>
                <button className="btn bg-[#2ecc71] mt-4 w-full text-white capitalize transition-all duration-500 ease-in-out hover:bg-white hover:text-[#2ecc71]">
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    }
    <ToastContainer/>
    </>
  );
}
