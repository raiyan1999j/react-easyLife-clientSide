
export default function HomeCarousel() {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/NFwYq2Bw/pexels-cedric-fauntleroy-4266931.jpg"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-[80%]">
            <a href="#slide4" className="btn btn-circle mr-2">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute w-[250px] text-white/90 py-4 px-4 font-mono text-justify rounded-lg bg-gradient-to-tr from-blue-400 to-blue-200 top-[30%] left-[0%] font-bold text-base">
            <p>Discover a curated collection of doctors on our website, ready to provide expert care.</p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/DyMjSk4S/jared-rice-Pibra-WHb4h8-unsplash.jpg"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-[80%]">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle ml-2">
              ❯
            </a>
          </div>
          <div className="absolute w-[250px] text-white/90 py-4 px-4 font-mono text-justify rounded-lg bg-gradient-to-tr from-yellow-400 to-blue-200 top-[30%] right-[0%] font-bold text-base">
            <p>Explore our home repair service for expert solutions to your household needs.</p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.postimg.cc/3JsjMKDF/pexels-cottonbro-4101143.jpg"
            className="w-full object-cover h-[500px]"
          />
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-[80%]">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle ml-2">
              ❯
            </a>
          </div>
          <div className="absolute w-[250px] text-white/90 py-4 px-4 font-mono text-justify rounded-lg bg-gradient-to-tr from-yellow-400 to-green-200 top-[0%] left-[40%] font-bold text-base">
            <p>Find trusted legal expertise with our curated selection of lawyers.</p>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-[80%]">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle ml-2">
              ❯
            </a>
          </div>
          <div className="absolute w-[250px] text-white/90 py-4 px-4 font-mono text-justify rounded-lg bg-gradient-to-tr from-blue-400 to-blue-200 top-[30%] left-[40%] font-bold text-base">
            <p>Experience reliable electronic services for all your technology needs.</p>
          </div>
        </div>
      </div>
    </>
  );
}
