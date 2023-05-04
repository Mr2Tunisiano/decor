function Hero() {
  return (
    <section id="hero" className="hero d-flex align-items-center anchor">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <h2 data-aos="fade-up">Create Your Dream Space with G&G Designs</h2>
            <blockquote data-aos="fade-up" data-aos-delay="100">
              <p>
                Elevate your space with G&G Designs. Our interior design experts
                will help you create a beautiful, functional space that reflects
                your unique style. Get started today and experience the
                transformative power of great design.
              </p>
            </blockquote>
            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
              <a href="#contact" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero