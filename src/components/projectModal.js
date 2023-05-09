import { useState } from "react";
import { useDispatch } from "react-redux";
import { editProject } from "../rtk/slices/projectSlice";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ProjectModal(props) {
  const MySwal = withReactContent(Swal);
  const dispatch = useDispatch();
  const project = props.data;
  const images = project.img.split(",");
  const [name, setName] = useState(project.name);
  const [category, setCategory] = useState(project.category);
  const [client, setClient] = useState(project.client);
  const [location, setLocation] = useState(project.location);
  const [description, Setdescription] = useState(project.description);

  function handleSubmit(e) {
    e.preventDefault();
    const newUpdates = {
      id: project.id,
      name,
      category,
      client,
      location,
      description,
    };
    dispatch(editProject(newUpdates));
    MySwal.fire({
      title: <p>Successfully Updated !</p>,
      icon: "success",
      confirmButtonText: "OK",
    });
  }
  return (
    <>
      <div
        className="modal fade"
        id={`editProject${project.id}`}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Project ID : #{project.id}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form
                className="row g-3 mt-2"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="col-md-8">
                  <label htmlFor="projectName" className="form-label">
                    Project Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="projectName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="category" className="form-label">
                    Category
                  </label>
                  <select
                    id="category"
                    className="form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option>Choose...</option>
                    <option>Bedroom</option>
                    <option>Living Room</option>
                    <option>Bathroom</option>
                    <option>Restaurant</option>
                    <option>Kitchen</option>
                    <option>Administration</option>
                    <option>Glass Wall Seperation</option>
                    <option>Full House</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label htmlFor="client" className="form-label">
                    Client
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="client"
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="location" className="form-label">
                    Location
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="location"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    value={description}
                    onChange={(e) => Setdescription(e.target.value)}
                    type="text"
                    className="form-control"
                    id="description"
                    placeholder="Type project description"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="col-12">
                  <div className="d-grid gap-2 mt-3">
                    <button
                      className="btn btn-info"
                      type="button"
                      data-bs-target={`#images${project.id}`}
                      data-bs-toggle="modal"
                    >
                      <i className="bi bi-eye"></i> View Images
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id={`images${project.id}`}
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">
                {project.name} Gallery
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div
                id={`imagesCarousel${project.id}`}
                className="carousel slide"
              >
                <div className="carousel-inner">
                  {images.map((img, index) => {
                    return (
                      <div
                        key={img}
                        className={`carousel-item${
                          index === 0 ? " active" : ""
                        }`}
                        style={{ maxHeight: "100%" }}
                      >
                        <img
                          src={require(`../../public/assets/img/Projects/${img}`)}
                          className="d-block w-100"
                          alt={`img${index}`}
                          width={400}
                          height={400}
                        />
                      </div>
                    );
                  })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#imagesCarousel${project.id}`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    style={{ backgroundColor: "black" }}
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#imagesCarousel${project.id}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                    style={{ backgroundColor: "black" }}
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-primary"
                data-bs-target={`#editProject${project.id}`}
                data-bs-toggle="modal"
              >
                Back to details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProjectModal;
