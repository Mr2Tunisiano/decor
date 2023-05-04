import { Link } from "react-router-dom";

function AdminHero() {
  return (
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-6 text-center">
            <h3>Admin Panel</h3>
            <p>
              This is meant for the owner of this webpage please go back to the website
            </p>
            <Link className="cta-btn" to="/">
              Go back to the website !
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default AdminHero