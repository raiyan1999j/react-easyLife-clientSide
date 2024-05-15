import { useLoaderData } from "react-router-dom";
import "../../App.css";
import "animate.css"

export default function Details() {
  const {
    _id,
    category,
    currentUser,
    description,
    location,
    photo,
    price,
    providerEmail,
    providerName,
    providerImg,
    service,
  } = useLoaderData();

  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="grid grid-cols-2 gap-x-4 w-full">
          <div className="h-[450px] w-full flex justify-center items-center border rounded-lg animate__animated animate__fadeInLeft">
            <div className="h-[90%] w-[90%] border rounded-lg">
              <img
                src={photo}
                alt="serviceImg"
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="animate__animated animate__fadeInRight">
            <div className="h-[50px] w-[50px] rounded-full mb-4 ">
              <img
                src={providerImg}
                alt="providerImg"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="font-bold font-mono capitalize text-base">
              {providerName}
            </p>
            <p className="font-bold font-mono capitalize text-base">
              {location}
            </p>
            <h2 className="font-bold font-mono text-xl capitalize">
              {category}
            </h2>
            <p className="font-bold text-base font-mono capitalize">
              Service Name:
              <span className="badge badge-secondary px-4 ml-4">
                {" "}
                {service}
              </span>
            </p>
            <div className="w-[90%] text-justify my-8">
              <p className="text-lg font-serif">{description}</p>
            </div>
            <div className="flex flex-row justify-between items-center w-[90%]">
              <p className="font-bold text-base font-mono capitalize">
                Price:{" "}
                <span className="badge badge-secondary px-4 ml-4">
                  {" "}
                  {price}${" "}
                </span>
              </p>
              <div>
                <button className="btn-17 capitalize py-2">
                  <span className="text-container">
                    <span className="text">Book now</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
