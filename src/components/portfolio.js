import AOS from "aos";
import Isotope from "isotope-layout";
import GLightbox from "glightbox";
import { useEffect } from "react";
import Modal from "./modal";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../rtk/slices/projectSlice";

function Portfolio() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  // eslint-disable-next-line no-unused-vars
  const glightbox = new GLightbox({
    selector: ".glightbox",
  });
  useEffect(() => {
    let portfolionIsotope = document.querySelector(".portfolio-isotope");

    if (portfolionIsotope) {
      let portfolioFilter = portfolionIsotope.getAttribute(
        "data-portfolio-filter"
      )
        ? portfolionIsotope.getAttribute("data-portfolio-filter")
        : "*";
      let portfolioLayout = portfolionIsotope.getAttribute(
        "data-portfolio-layout"
      )
        ? portfolionIsotope.getAttribute("data-portfolio-layout")
        : "masonry";
      let portfolioSort = portfolionIsotope.getAttribute("data-portfolio-sort")
        ? portfolionIsotope.getAttribute("data-portfolio-sort")
        : "original-order";

      window.addEventListener("load", () => {
        let portfolioIsotope = new Isotope(
          document.querySelector(".portfolio-container"),
          {
            itemSelector: ".portfolio-item",
            layoutMode: portfolioLayout,
            filter: portfolioFilter,
            sortBy: portfolioSort,
          }
        );

        let menuFilters = document.querySelectorAll(
          ".portfolio-isotope .portfolio-flters li"
        );
        menuFilters.forEach(function (el) {
          el.addEventListener(
            "click",
            function () {
              document
                .querySelector(
                  ".portfolio-isotope .portfolio-flters .filter-active"
                )
                .classList.remove("filter-active");
              this.classList.add("filter-active");
              portfolioIsotope.arrange({
                filter: this.getAttribute("data-filter"),
              });
              if (typeof aos_init === "function") {
                aos_init();
              }
            },
            false
          );
        });
      });
    }
    function aos_init() {
      AOS.init({
        duration: 800,
        easing: "slide",
        once: true,
        mirror: false,
      });
    }
    window.addEventListener("load", () => {
      aos_init();
    });
  }, []);
  return (
    <section id="portfolio" className="portfolio anchor">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Projects</h2>
        </div>
        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <ul
            className="portfolio-flters"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <li data-filter="*" className="filter-active">
              All
            </li>
            <li data-filter=".filter-bedroom">Bedroom</li>
            <li data-filter=".filter-living">Living Room</li>
            <li data-filter=".filter-bath">Bathroom</li>
            <li data-filter=".filter-restaurant">Restaurant</li>
            <li data-filter=".filter-kitchen">Kitchen</li>
            <li data-filter=".filter-admin">Administration</li>
            <li data-filter=".filter-glass">Glass Wall Seperation</li>
            <li data-filter=".filter-house">Full House</li>
          </ul>

          <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {
              // eslint-disable-next-line
              projects.map((project) => {
                const imgArray = project.img.split(",");
                switch (project.category) {
                  case "Bedroom":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-bedroom"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          <button
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </button>
                        </div>
                      </div>
                    );

                  case "Living Room":
                    return (
                      <>
                        <div
                          key={project.id}
                          className="col-lg-4 col-md-6 portfolio-item filter-living"
                        >
                          <img
                            src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            className="img-fluid"
                            alt=""
                          />
                          <div className="portfolio-info">
                            <h4>{project.name}</h4>
                            <p>{project.client}</p>
                            <a
                              href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                              title={project.name}
                              data-gallery="portfolio-gallery-product"
                              className="glightbox preview-link"
                            >
                              <i className="bi bi-zoom-in"></i>
                            </a>
                            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a
                              title="More Details"
                              className="details-link"
                              data-bs-toggle="modal"
                              data-bs-target={`#project${project.id}`}
                            >
                              <i className="bi bi-link-45deg"></i>
                            </a>
                          </div>
                        </div>
                      </>
                    );

                  case "Bathroom":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-bath"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );

                  case "Restaurant":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-restaurant"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );

                  case "Kitchen":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-kitchen"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );

                  case "Administration":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-admin"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );

                  case "Glass Wall Seperation":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-glass"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );

                  case "Full House":
                    return (
                      <div
                        key={project.id}
                        className="col-lg-4 col-md-6 portfolio-item filter-house"
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                          className="img-fluid"
                          alt=""
                        />
                        <div className="portfolio-info">
                          <h4>{project.name}</h4>
                          <p>{project.client}</p>
                          <a
                            href={require(`../../public/assets/img/Projects/${imgArray[0]}`)}
                            title={project.name}
                            data-gallery="portfolio-gallery-product"
                            className="glightbox preview-link"
                          >
                            <i className="bi bi-zoom-in"></i>
                          </a>
                          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                          <a
                            title="More Details"
                            className="details-link"
                            data-bs-toggle="modal"
                            data-bs-target={`#project${project.id}`}
                          >
                            <i className="bi bi-link-45deg"></i>
                          </a>
                        </div>
                      </div>
                    );
                  default:
                    break;
                }
              })
            }
          </div>
        </div>
      </div>
      {projects.map((project) => {
        return <Modal key={project.id} data={project} />;
      })}
    </section>
  );
}
export default Portfolio;
