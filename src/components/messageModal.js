import { useDispatch } from "react-redux";
import { deleteMsg } from "../rtk/slices/messageSlice";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

function MessageModal(props) {
  const mySwal = withReactContent(Swal)
  const dispatch = useDispatch()
  function HandleDelete(id) {
    mySwal.fire({
        title: "Are you sure you want to delete this item?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, do it!",
        cancelButtonText: "No, cancel",
      })
      .then((result) => {
        if (result.isConfirmed) {
          dispatch(deleteMsg(id));
        }
      });
  }
  return (
    <div
      className="modal fade"
      id={`message${props.msg.id}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {props.msg.name}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h3>{props.msg.email}</h3>
            <h5>{props.msg.subject}</h5>
            <p>{props.msg.message}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              <i className="bi bi-x-circle"></i> Close
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
              onClick={() => HandleDelete(props.msg.id)}
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageModal