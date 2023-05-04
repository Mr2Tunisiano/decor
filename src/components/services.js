function Services() {
  const prevent = (e) => {
    e.preventDefault()
  }
  return (
    <section id="services-list" className="services-list anchor">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Our Services</h2>
        </div>

        <div className="row gy-5">
          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-briefcase" style={{ color: "#f57813" }}></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Interior Design Consultation
                </a>
              </h4>
              <p className="description">
                This service provides a personalized design consultation with an
                experienced interior designer. During this consultation, you'll
                discuss your design preferences, goals, and budget, and receive
                expert advice and recommendations to help you create a
                beautiful, functional space.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon flex-shrink-0">
              <i
                className="bi bi-card-checklist"
                style={{ color: "#15a04a" }}
              ></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Space Planning and Furniture Layout
                </a>
              </h4>
              <p className="description">
                This service involves creating a custom floor plan and furniture
                layout for your home or business. The interior designer will
                take into account your design preferences, traffic flow, and
                functional needs to create a layout that maximizes space and
                enhances the overall look and feel of your space.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-bar-chart" style={{ color: "#d90769" }}></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Color Consultation
                </a>
              </h4>
              <p className="description">
                Choosing the right colors for your space can be overwhelming. A
                color consultation with an interior designer can help you select
                the perfect palette for your home or business, taking into
                account your personal style, lighting, and other factors.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon flex-shrink-0">
              <i className="bi bi-binoculars" style={{ color: "#15bfbc" }}></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Material and Finish Selection
                </a>
              </h4>
              <p className="description">
                From flooring to countertops to window treatments, the materials
                and finishes you choose for your space can have a big impact on
                the overall look and feel of the space. An interior designer can
                help you select the right materials and finishes that will
                enhance your space and suit your personal style.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon flex-shrink-0">
              <i
                className="bi bi-brightness-high"
                style={{ color: "#f5cf13" }}
              ></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Custom Furniture and Décor
                </a>
              </h4>
              <p className="description">
                If you're looking for something truly unique and tailored to
                your specific style and needs, consider working with an interior
                designer to create custom furniture or décor. This service
                involves collaborating with the designer to create a
                one-of-a-kind piece that perfectly complements your space and
                reflects your personal style.
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 service-item d-flex"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="icon flex-shrink-0">
              <i
                className="bi bi-calendar4-week"
                style={{ color: "#1335f5" }}
              ></i>
            </div>
            <div>
              <h4 className="title">
                <a
                  href="/"
                  onClick={prevent}
                  className="stretched-link"
                >
                  Project Management
                </a>
              </h4>
              <p className="description">
                Managing an interior design project can be time-consuming and
                overwhelming. A project management service can help you
                streamline the process, coordinating with contractors, vendors,
                and other professionals to ensure that your project is completed
                on time, within budget, and to your satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
