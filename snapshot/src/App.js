import "./App.css";
import { Routes, Route } from "react-router-dom";
import Snapshot from "./Components/Snapshot";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<Snapshot />} />
    </Routes>
  );
}

export default App;
