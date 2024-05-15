import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/Context";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const { user } = useContext(InfoProvider);
  const [allService, setAllService] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotal] = useState(1);
  const pageContainer = [];

  useEffect(() => {
    axios(
      `http://localhost:5000/allServices?userEmail=${
        user ? user.email : undefined
      }&pageNumber=${page}`
    )
      .then((data) => {
        setAllService(data.data.result);
        setTotal(data.data.totalPage);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  for(let repeat=1; repeat<=totalPage; repeat++){
    pageContainer.push(repeat)
  }
  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="w-[50%] mx-auto text-center">
          <input
            type="text"
            placeholder="Search By service Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </section>

      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="grid grid-cols-1 gap-y-6 w-[90%] mx-auto">
          {allService?.map((value, index) => {
            return <ServiceCard key={value._id} info={value} />;
          })}
        </div>
      </section>
      <section className="w-[1200px] mx-auto pt-[50px] flex justify-end">
        {
          pageContainer.map((value,index)=>{
            return(
              <button className={`py-2 px-4 border rounded-lg ${page==value?"bg-red-400 text-white":"bg-transparent text-black"}`} onClick={()=>{setPage(value)}} key={index}>{value}</button>
            )
          })
        }
      </section>
    </>
  );
}
