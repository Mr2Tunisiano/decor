import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, fetchProjects } from "../rtk/slices/projectSlice";
import ProjectModal from "./projectModal";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Projects() {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);
  const MySwal = withReactContent(Swal);
  function handleDelete(id) {
    MySwal.fire({
      title: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, do it!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProject(id));
      }
    })
  }
  return (
    <div
      className="tab-pane fade mt-5"
      id="projects"
      role="tabpanel"
      aria-labelledby="profile-tab"
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Client</th>
            <th scope="col">Location</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            return (
              <tr key={project.id}>
                <th scope="row">{project.id}</th>
                <td>{project.name}</td>
                <td>{project.client}</td>
                <td>{project.location}</td>
                <td>{project.category}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target={`#editProject${project.id}`}
                  >
                    <i className="bi bi-eye"></i> View Détails
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(project.id)}
                  >
                    <i className="bi bi-trash"></i> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {projects.map((project) => {
        return <ProjectModal data={project} key={project.id} />;
      })}
    </div>
  );
}
export default Projects;
