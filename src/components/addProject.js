import axios from "axios";
import { useRef, useState } from "react";
import ErrorMsg from "./errorMsg";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { fetchProjects } from "../rtk/slices/projectSlice";

function AddProject() {
  const mySwal =  withReactContent(Swal)
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [client, setClient] = useState("");
  const [files, setFiles] = useState([]);
  const [location, setLocation] = useState("");
  const [description, Setdescription] = useState("");
  const [fail, setFail] = useState(false);
  const [errors,setErrors] = useState({})
  const fileref = useRef()
  let form = new FormData();
  const dispatch = useDispatch()

  const handleFileInputChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setFiles(filesArray);
  };

  function handleSubmit(e) {
    e.preventDefault();
    form.append("name", name);
    form.append("category", category);
    form.append("client", client);
    form.append("location", location);
    form.append("description", description);
    for (let i = 0; i < files.length; i++) {
      form.append("files[]", files[i]);
    }
    axios
      .post("http://localhost/decor/php/projects.php", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 201) {
          setCategory("");
          setClient("");
          setFiles(null);
          setLocation("");
          setName("");
          Setdescription("");
          form = new FormData();
          fileref.current.value = "";
          mySwal.fire({
            title: <p>Successfully Added !!</p>,
            icon: "success",
            confirmButtonText: "OK",
          });
          setTimeout(() => {
            dispatch(fetchProjects())
          }, 3000);
        } else {
          form = new FormData();
          fileref.current.value = "";
          setFiles(null);
          setFail(true);
          setErrors(response.data)
        }
      });
  }

  return (
    <>
      <div
        className="tab-pane fade"
        id="add-project"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        {
          fail && <ErrorMsg data={errors} />
        }
        <form
          className="row g-3 mt-5"
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
              <option defaultChecked>Choose...</option>
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
            <label htmlFor="images" className="form-label">
              Images
            </label>
            <input
              multiple
              required
              onChange={handleFileInputChange}
              type="file"
              className="form-control"
              ref={fileref}
              id="images"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button type="reset" className="btn btn-secondary ms-2">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddProject;
