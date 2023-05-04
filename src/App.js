import { Route, Routes } from "react-router-dom";
import Frontpage from "./Fontpage";
import Adminpage from "./Adminpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/admin" element={<Adminpage />} />
      </Routes>
    </div>
  );
}

export default App;
