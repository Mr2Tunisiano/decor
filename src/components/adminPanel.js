import Messages from "./messages";

function AdminPanel() {
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
              Messages
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
          <div
            className="tab-pane fade"
            id="projects"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            This is the list of projects
          </div>
          <div
            className="tab-pane fade"
            id="add-project"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            this is the form for adding new projects
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminPanel;
