import { ImCross } from "react-icons/im";
import "../../App.css";
import "animate.css";

export default function UpdateService({showModal,selectedInfo}) {
    const {_id,service,price,description,photo} = selectedInfo;
  return (
    <>
    <div className="h-[40px] w-[40px] flex justify-center items-center text-white rounded-full modalInput absolute z-50 right-[4%] top-[200%] hover:cursor-pointer" onClick={()=>{showModal(false)}}>
    <ImCross />
    </div>
      <div className="w-[1200px] mx-auto flex justify-center items-center h-screen absolute top-0 z-30">
        <div className="w-[90%] py-6 px-4 modalCard grid grid-cols-2 gap-x-4">
          <div className="w-full h-[400px] modalImgCard rounded-lg"></div>
          <div>
            <div className="flex flex-row justify-between">
              <div>
                <label className="form-control w-full max-w-xs">
                  <div className="label">
                    <span className="label-text text-white">Service Name</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
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
                    placeholder="Type here"
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
                  
                ></textarea>
              </label>
            </div>
            <div className="mt-5">
                <button className="w-full text-center capitalize font-mono py-4 modalButton text-white font-bold transition-all duration-500 ease-out">
                    Update
                </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
