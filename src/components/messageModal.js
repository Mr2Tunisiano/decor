import axios from "axios";

function MessageModal(props) {
  function HandleDelete(id) {
      axios
        .delete(`http://localhost/decor/php/messages.php?id=${id}`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
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
              Close
            </button>
            <button type="button" className="btn btn-danger" onClick={() => HandleDelete(props.msg.id)}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MessageModal