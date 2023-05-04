function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <section id="portfolio-details" className="portfolio-details">
              <div className="container" data-aos="fade-up">
                <div className="row gy-4">
                  <div className="col-lg-8">
                    <div className="slides-1 portfolio-details-slider swiper">
                      <div className="swiper-wrapper align-items-center">
                        <div className="swiper-slide">
                          <img src="assets/img/portfolio/app-1.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>Project information</h3>
                      <ul>
                        <li>
                          <strong>Category</strong>: Web design
                        </li>
                        <li>
                          <strong>Client</strong>: ASU Company
                        </li>
                        <li>
                          <strong>Project date</strong>: 01 March, 2020
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>This is an example of portfolio detail</h2>
                      <p>
                        Autem ipsum nam porro corporis rerum. Quis eos dolorem
                        eos itaque inventore commodi labore quia quia.
                        Exercitationem repudiandae officiis neque suscipit non
                        officia eaque itaque enim. Voluptatem officia
                        accusantium nesciunt est omnis tempora consectetur
                        dignissimos. Sequi nulla at esse enim cum deserunt eius.
                      </p>
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
