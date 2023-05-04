import Swiper from "swiper"
import { useEffect } from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import 'swiper/swiper-bundle.css';

function WhyUs() {
SwiperCore.use([Autoplay, Navigation, Pagination]);
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const swiper1 = new Swiper(".slides-1", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // eslint-disable-next-line no-unused-vars
    const swiper3 = new Swiper(".slides-3", {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },

        1200: {
          slidesPerView: 3,
        },
      },
    });
  }, []);
  return(
    <section id="why-us" className="why-us anchor">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>

          <div className="row g-0" data-aos="fade-up" data-aos-delay="200">
            <div
              className="col-xl-5 img-bg"
              style={{backgroundImage: "url('assets/img/why-us-bg.jpg')"}}
            ></div>
            <div className="col-xl-7 slides position-relative">
              <div className="slides-1 swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="item">
                      <h3 className="mb-3">
                        Personalized Interior Design Services
                      </h3>
                      <p>
                        At G&G, we understand that your home or business is more
                        than just a space - it's a reflection of your
                        personality and style. That's why we take the time to
                        get to know you, your preferences, and your needs before
                        creating a customized design plan. Our experienced
                        interior designer and decorator has a keen eye for
                        detail and a passion for creating beautiful, functional
                        spaces that you'll love. Whether you're starting from
                        scratch or just need a little help refining your
                        existing décor, we're here to help.
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="item">
                      <h3 className="mb-3">Affordable Design Solutions</h3>
                      <p>
                        We believe that great design doesn't have to come at a
                        premium price. That's why we offer flexible pricing
                        options and work within your budget to ensure that you
                        get the most value for your investment. We'll provide
                        you with a detailed proposal that outlines all of the
                        costs involved upfront, so you can make an informed
                        decision about how to proceed. We're committed to
                        delivering exceptional service and quality workmanship,
                        without breaking the bank.
                      </p>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="item">
                      <h3 className="mb-3">
                        Professionalism and Attention to Detail
                      </h3>
                      <p>
                        When you choose G&G, you can rest assured that your
                        project is in good hands. We pride ourselves on our
                        professionalism, reliability, and attention to detail.
                        We'll communicate with you every step of the way, so
                        you'll always know what's going on and what to expect.
                        Our goal is to exceed your expectations and make your
                        interior design project a stress-free, enjoyable
                        experience. Don't settle for anything less than the best
                        - choose G&G Designs for all your interior design needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </div>
      </section>
  )
}
export default WhyUs;