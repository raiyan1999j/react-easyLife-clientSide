import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InfoProvider } from "../../ContextProvider/Context";
import ServiceCard from "./ServiceCard";
import "../../App.css";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const { user } = useContext(InfoProvider);
  const [allService, setAllService] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotal] = useState(1);
  const [searchService,setSearch] = useState(undefined);
  const pageContainer = [];

  useEffect(() => {
    axios(
      `http://localhost:5000/allServices?userEmail=${
        user ? user.email : undefined
      }&pageNumber=${page}&searchService=${searchService}`
    )
      .then((data) => {
        setAllService(data.data.result);
        setTotal(data.data.totalPage);

        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page,searchService]);

  const searchInfo=(event)=>{
    event.preventDefault();
    
    setSearch(event.target.search.value); 
  }

  for (let repeat = 1; repeat <= totalPage; repeat++) {
    pageContainer.push(repeat);
  }
  return (
    <>
      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="w-[50%] mx-auto text-center relative">
        <form onSubmit={searchInfo}>
          <input
            type="text"
            name="search"
            placeholder="Search By service Name"
            className="input input-bordered w-full max-w-xs"
          />
          <button
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02] absolute bottom-0 right-[140px]"
          >
            Search
          </button>
          </form>
        </div>
      </section>

      <section className="w-[1200px] mx-auto pt-[50px]">
        <div className="grid grid-cols-1 gap-y-6 w-[90%] mx-auto">
        {allService.length===0?
        <div className="h-full w-full flex justify-center items-center">
        
          <Fade cascade duration={100} className="text-4xl font-mono capitalize font-bold text-blue-400">
            No Items found
          </Fade>
        </div>:
        allService?.map((value, index) => {
            return <ServiceCard key={value._id} info={value} />;
          })
        }
          
        </div>
      </section>
      <section className="w-[1200px] mx-auto pt-[50px] flex justify-end">
        {pageContainer.map((value, index) => {
          return (
            <button
              className={`py-2 px-4 border rounded-lg ${
                page == value
                  ? "bg-red-400 text-white"
                  : "bg-transparent text-black"
              }`}
              onClick={() => {
                setPage(value);
              }}
              key={index}
            >
              {value}
            </button>
          );
        })}
      </section>
    </>
  );
}
