import axios from "axios";
import "./style.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoggedIn } from "../rtk/slices/loginSlice";

function Login() {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  function HandleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost/decor/php/user.php", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (parseInt(response.status) === 200) {
          setMessage("success");
          setTimeout(() => {
            dispatch(LoggedIn());
          }, 1500);
        } else {
          setMessage("fail");
        }
      });
  }

  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="heading-section">Login To Admin Panel</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-10">
            <div className="wrap d-md-flex">
              <div
                className="img"
                style={{
                  backgroundImage: "url(/assets/img/bg-1.jpg)",
                }}
              ></div>
              <div className="login-wrap p-4 p-md-5">
                <div className="d-flex">
                  <div className="w-100">
                    <h3 className="mb-4">Sign In</h3>
                    <div className="d-line">
                      {message === "" ? (
                        ""
                      ) : message === "success" ? (
                        <div
                          className="alert alert-success bg-success text-light border-0 alert-dismissible fade show"
                          role="alert"
                        >
                          Connected Successfully! Redirecting ...
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      ) : (
                        <div
                          className="alert alert-danger bg-danger text-light border-0 alert-dismissible fade show"
                          role="alert"
                        >
                          Invalid Username or Password!
                          <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="alert"
                            aria-label="Close"
                          ></button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <form
                  action="#"
                  className="signin-form"
                  onSubmit={HandleSubmit}
                >
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="name">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label" htmlFor="password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="form-control btn btn-primary rounded submit px-3"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Login;
