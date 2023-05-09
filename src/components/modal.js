function Modal(props) {
  const project = props.data
  const images = project.img.split(",");
  return (
    <div
      className="modal fade"
      id={`project${project.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-body">
            <section id="portfolio-details" className="portfolio-details">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-8">
                    <div
                      id={`imagesCarousel${project.id}`}
                      className="carousel slide"
                    >
                      <div className="carousel-inner">
                        {images.map((img, index) => {
                          return (
                            <div
                              key={img}
                              className={`carousel-item${
                                index === 0 ? " active" : ""
                              }`}
                              style={{ maxHeight: "100%" }}
                            >
                              <img
                                src={require(`../../public/assets/img/Projects/${img}`)}
                                className="d-block w-100"
                                alt={`img${index}`}
                                height={400}
                              />
                            </div>
                          );
                        })}
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target={`#imagesCarousel${project.id}`}
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          style={{ backgroundColor: "black" }}
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target={`#imagesCarousel${project.id}`}
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                          style={{ backgroundColor: "black" }}
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>Project information</h3>
                      <ul>
                        <li>
                          <strong>Category</strong>: {project.category}
                        </li>
                        <li>
                          <strong>Client</strong>: {project.client}
                        </li>
                        <li>
                          <strong>Project Location</strong>: {project.location}
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>{project.name}</h2>
                      <p>{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
