import { FaImage } from "react-icons/fa";
import "../../App.css";

export default function ServiceCard({ info }) {
  const {
    _id,
    service,
    photo,
    description,
    providerName,
    providerImg,
    location,
    price,
    category,
  } = info;
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 shadow-[rgba(46,204,113,0.5)_0px_0px_20px_-2px] sh rounded-lg items-center px-4 py-4">
        <div className="w-full h-[350px] rounded-lg border flex justify-center items-center">
          <div className="h-[90%] w-[90%] border rounded-lg flex justify-center items-center">
            {photo ? (
              <img
                src={photo}
                className="h-full w-full rounded-lg object-cover"
              />
            ) : (
              <FaImage className="text-4xl" />
            )}
          </div>
        </div>
        <div className="px-4 py-2">
          <div className="flex flex-row justify-between">
            <div className="w-[50%]">
              <h2 className="font-serif font-bold text-xl">{category}</h2>
              <span className="badge badge-neutral mt-4 py-2 px-8">{service}</span>
            </div>
            <div>
              <button className="btn-17 capitalize">
                <span className="text-container">
                  <span className="text">View Details</span>
                </span>
              </button>
            </div>
          </div>
          <div className="rounded-lg my-4">
            <p className="py-2 px-2 font-mono limited-words">
            {description}
            </p>
          </div>
          <div className="flex flex-row justify-between mb-4">
            <div>
              <h4 className="font-bold text-lg font-serif">Provider Info</h4>
              <p className="badge badge-success px-4 py-2 text-white font-semibold">{providerName}</p>
            </div>
            <div>
              <div className="h-[50px] w-[50px] rounded-full border float-right">
                <img
                  src={providerImg}
                  alt="providerImg"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div>
              <h4 className="font-serif text-lg font-bold">Location</h4>
              <p className="badge badge-accent px-4 py-2 text-white font-semibold font-mono capitalize">{location}</p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold">Price</h4>
              <p className="badge badge-primary py-1 text-white font-bold font-serif">{price} $</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
