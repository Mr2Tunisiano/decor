import { useDispatch, useSelector } from "react-redux";
import AddProject from "./addProject";
import Messages from "./messages";
import Projects from "./projects";
import { useEffect } from "react";
import { fetchMsg } from "../rtk/slices/messageSlice";

function AdminPanel() {
  const dispatch = useDispatch()
  const messages = useSelector((state) => state.messages)
  useEffect(() => {
    dispatch(fetchMsg())
  },[dispatch])
  const nonReadMsgs = messages.filter((msg) => msg.is_read === "0")
  const length = nonReadMsgs.length;
  return (
    <>
      <div className="container mt-5">
        <ul className="nav nav-tabs d-flex" id="myTabjustified" role="tablist">
          <li className="nav-item flex-fill" role="presentation">
            <button
              className="nav-link w-100 active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Messages{"  "}
              {length > 0 && (
                <i
                  className={`bi bi-${length}-circle-fill`}
                  style={{ color: "blue" }}
                ></i>
              )}
            </button>
          </li>
          <li className="nav-item flex-fill" role="presentation">
            <button
              className="nav-link w-100"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#projects"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Projects
            </button>
          </li>
          <li className="nav-item flex-fill" role="presentation">
            <button
              className="nav-link w-100"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#add-project"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Add New Project
            </button>
          </li>
        </ul>
        <div className="tab-content pt-2" id="myTabjustifiedContent">
          <Messages />
          <Projects />
          <AddProject />
        </div>
      </div>
    </>
  );
}
export default AdminPanel;
