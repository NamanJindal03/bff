import { Routes, Route } from "react-router-dom";
import { DeviceProvider } from "./context/DeviceContext";

import './global.css'

//pages
import Home from "./pages/Home";

function App() {
  return (
    <DeviceProvider>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </DeviceProvider>
  );
}

export default App;
