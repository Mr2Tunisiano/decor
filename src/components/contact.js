import axios from "axios";
import { useState } from "react"

function Contact() {
  const [name,SetName] = useState("");
  const [email,SetEmail] = useState("");
  const [subject,SetSubject] = useState("");
  const [message,SetMessage] = useState("");
  const [success, setSuccess] = useState(false);
  function HandleSubmit(e) {
    e.preventDefault();
    const Inputs = {name, email, subject, message}
    axios
      .post("http://localhost/decor/php/messages.php", Inputs)
      .then((response) => {
        console.log(`Message Sent Successfully : ${response.data.name}`);
        SetEmail("");
        SetName("");
        SetMessage("");
        SetSubject("");
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false)
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 5000);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <section id="contact" className="contact anchor">
      <div className="container position-relative" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact Us</h2>
        </div>
        <div className="row gy-4 d-flex justify-content-end">
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h4>Location:</h4>
                <p>High River, Calgary</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h4>Email:</h4>
                <p>ghadagharbi15@gmail.com</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-phone flex-shrink-0"></i>
              <div>
                <h4>Call:</h4>
                <p>+1 403-652-0769</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              onSubmit={HandleSubmit}
            >
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => {
                      let value = e.target.value;
                      SetName(value);
                    }}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Your Email"
                    onChange={(e) => {
                      let value = e.target.value;
                      SetEmail(value);
                    }}
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  placeholder="Subject"
                  onChange={(e) => {
                    let value = e.target.value;
                    SetSubject(value);
                  }}
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  value={message}
                  placeholder="Message"
                  onChange={(e) => {
                    let value = e.target.value;
                    SetMessage(value);
                  }}
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className={`sent-message ${success ? "d-block" : false}`}>
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact