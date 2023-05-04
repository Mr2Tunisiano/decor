import axios from "axios";
import { useEffect, useState } from "react";
import MessageModal from "./messageModal";

function Messages() {
  const [msg, setMsg] = useState([])
  useEffect(() => {
    axios.get("http://localhost/decor/php/messages.php").then((response) => {
      const sortedData = response.data.sort((a, b) => b.id - a.id);
      setMsg(sortedData);
    })
  },[])
  const handleUpdate = (obj) => {
    axios
      .put(`http://localhost/decor/php/messages.php`, {
        id: obj.id
      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div
      className="tab-pane fade show active mt-5"
      id="messages"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Received At</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {msg.map((line) => {
            if (line.is_read === "1") {
              return (
                <tr key={line.id}>
                  <th scope="row">{line.id}</th>
                  <td>{line.name}</td>
                  <td>{line.email}</td>
                  <td>{line.received_at}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target={`#message${line.id}`}
                    >
                      <b>
                        <i className="bi bi-eye" style={{ color: "white" }}></i>{" "}
                        Read
                      </b>
                    </button>
                  </td>
                </tr>
              );
            } else {
              return (
                <tr className="table-primary" key={line.id}>
                  <th scope="row">{line.id}</th>
                  <td>{line.name}</td>
                  <td>{line.email}</td>
                  <td>{line.received_at}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleUpdate(line);
                      }}
                      className="btn btn-info"
                      data-bs-toggle="modal"
                      data-bs-target={`#message${line.id}`}
                    >
                      <b>
                        <i className="bi bi-eye" style={{ color: "white" }}></i>{" "}
                        Read
                      </b>
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      {msg.map((line) => {
        return <MessageModal msg={line} key={line.id} />;
      })}
    </div>
  );
}
export default Messages