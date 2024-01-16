function Carousel({children}) {
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {children.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? " active" : ""}`}
            >
              {slide}
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          style={{paddingRight:"140px"}}

        >
          <span className="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:  "blue" , borderRadius: "5px"}}
></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
          style={{paddingLeft:"140px"}}

        >
          <span className="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:  "blue" , borderRadius: "5px"}}></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
    );
  }
  
  export default Carousel;