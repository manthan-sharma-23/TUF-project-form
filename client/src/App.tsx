import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Form from "./components/form";

function App() {
  return (
    <div className="text-blac h-screen w-screen overflow-x-hidden">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
