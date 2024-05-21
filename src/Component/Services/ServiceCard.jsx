import { FaImage } from "react-icons/fa";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

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
  const navigate = useNavigate();

  const detailPage=()=>{
    navigate(`/details/${_id}`)
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 shadow-[rgba(46,204,113,0.5)_0px_0px_20px_-2px] sh rounded-lg items-center px-4 py-4 mobileS:grid-cols-1 mobileS:grid-y-6" data-aos="fade-left">
        <div className="w-full h-[350px] rounded-lg border flex justify-center items-center">
          <div className="h-[90%] w-[90%] border rounded-lg flex justify-center items-center mobileS:w-full">
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
          <div className="flex flex-row justify-between mobileS:flex-col mobileS:items-center">
            <div className="w-[50%]">
              <h2 className="font-serif font-bold text-xl">{category}</h2>
              <span className="badge badge-neutral mt-4 py-2 px-8 mobileS:py-5 mobileS:text-center mobileS:my-4">{service}</span>
            </div>
            <div className="mobileS:z-50">
              <button className="btn-17 capitalize" onClick={detailPage}>
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
          <div className="flex flex-row justify-between mb-4 mobileS:flex-col mobileS:items-center mobileS:text-center">
            <div>
              <h4 className="font-bold text-lg font-serif">Provider Info</h4>
              <p className="badge badge-success px-4 py-2 text-white font-semibold">{providerName}</p>
            </div>
            <div>
              <div className="h-[50px] w-[50px] rounded-full border float-right mobileS:mt-4">
                <img
                  src={providerImg}
                  alt="providerImg"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between mobileS:flex-col mobileS:items-center mobileS:text-center">
            <div>
              <h4 className="font-serif text-lg font-bold">Location</h4>
              <p className="badge badge-accent px-4 py-2 text-white font-semibold font-mono capitalize">{location}</p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-bold mobileS:mt-4">Price</h4>
              <p className="badge badge-primary py-1 text-white font-bold font-serif">{price} $</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
