import { useContext } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import "animate.css";
import { ImCross } from "react-icons/im";
import { InfoProvider } from "../../ContextProvider/Context";
import axios from "axios";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DetailsModal({ info,hideModal }) {
  const { _id, service, photo, providerEmail, providerName, price,currentUser,currentUserName } = info;
  const {user} = useContext(InfoProvider);

  const purchaseItems=(event)=>{
    event.preventDefault();
    const wrap ={
      receiver: user.email,
      serviceId: _id,
      serviceProviderEmail:providerEmail,
      serviceProviderName:providerName,
      serviceName : service,
      date: event.target.date.value,
      instruction: event.target.instruction.value,
      provider:currentUser,
      status:'pending'
    }

    axios.post('http://localhost:5000/purchaseItem',{wrap})
    .then(()=>{
      toast.success('Item booked for you', {
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
  }
  return (
    <>
    <ToastContainer/>
      <div className="grid grid-cols-2 gap-x-4 w-[95%] mx-auto absolute z-20 ">
        <div className="h-[450px] w-full rounded-lg modalCard flex justify-center items-center animate__animated animate__flipInX">
          <div className="h-[90%] w-[90%] rounded-lg">
            <img
              src={photo}
              alt="serviceImg"
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="modalCard w-full px-4 py-4 animate__animated animate__flipInY">
        <span className="h-[40px] w-[40px] bg-gray-600 rounded-full absolute right-[-2px] top-[-2px] flex justify-center items-center text-white hover:cursor-pointer" onClick={()=>{hideModal(false)}}>
        <ImCross />
        </span>
        <form onSubmit={purchaseItems}>
          <div className="flex flex-row justify-between">
            <div>
              <p className="text-white font-bold font-mono text-base">Service Id</p>
              <span className="font-bold font-mono badge badge-neutral">{_id}</span>
            </div>
            <div>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Name of Service</span>
                </div>
                <input
                  type="text"
                  placeholder={service}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Provider Email</span>
                </div>
                <input
                  type="text"
                  placeholder={providerEmail}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Provider Name</span>
                </div>
                <input
                  type="text"
                  placeholder={providerName}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Current User Email</span>
                </div>
                <input
                  type="text"
                  placeholder={currentUser}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Current User Name</span>
                </div>
                <input
                  type="text"
                  placeholder={currentUserName}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Service Taking Date</span>
                </div>
                <input
                  type="date"
                  name="date"
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold text-white"
                />
              </label>
            </div>
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">
                  Special Instruction 
                  <span className="tooltip" data-tip="address,area,customize plan">
                  <IoIosInformationCircleOutline className="text-xl"/>
                  </span>
                  </span>
                </div>
                <input
                  type="text"
                  name="instruction"
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div>
            <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text font-bold font-mono text-base capitalize">Price ($)</span>
                </div>
                <input
                  type="text"
                  placeholder={price}
                  className="py-1 px-2 rounded-lg modalInput placeholder:text-white font-bold"
                  disabled
                />
              </label>
            </div>
            <div>
                <button className="btn btn-success text-white">
                    Purchase Now
                </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}
