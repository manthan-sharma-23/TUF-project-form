import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Form from "./pages/form";
import Responses from "./pages/responses";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <div className="text-blac h-screen w-screen overflow-x-hidden">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Form />} />
            <Route path="/responses" element={<Responses />} />
            <Route path="/responses/:page" element={<Responses />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
