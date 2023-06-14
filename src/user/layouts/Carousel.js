import React, { useEffect, useState } from 'react'
import Api from "../../api";

function Carousel() {
    const [carousel, setCarousel] = useState([]);
    const fetchData = async () => {
  
      await Api.get(`/api/web/carousel`).then(response => {
          setCarousel(response.data.data);
          // console.log(response.data.data)
      })
  }

  useEffect(() => {
    fetchData();
}, [])
  return (
    <React.Fragment>
        <div
            id="carouselExampleCrossfade"
            className="carousel slide carousel-fade relative"
            data-bs-ride="carousel"
            >
            <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                {
                    carousel.map((data, i) => (
                        <button
                        key={i}
                        type="button"
                        data-bs-target="#carouselExampleCrossfade"
                        data-bs-slide-to={i}
                        className={`${i===0 && 'active'}`}
                        aria-current={`${i===0 && 'true'}`}
                        aria-label={`Slide ${i+1}`}
                        ></button>
                    ))
                }
                
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
            {
                
                carousel.map((data, i) => (
                    <div key={i} className={`${i===0 && 'active'} carousel-item float-left w-full`}>
                        <img
                            src={data.image}
                            className="block w-full"
                            alt="..."
                        />
                    </div>
                ))
            }
                
            </div>
            <button
                className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                type="button"
                data-bs-target="#carouselExampleCrossfade"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
    </React.Fragment>
  )
}

export default Carousel