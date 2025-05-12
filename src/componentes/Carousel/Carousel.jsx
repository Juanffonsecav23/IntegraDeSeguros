function Carousel({children}) {
    return (
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {children.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item${index === 0 ? "active" : ""}`}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Carousel;