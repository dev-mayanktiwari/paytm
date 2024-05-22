import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pagenotfound from "../pages/Pagenotfound";
import SendMoney from "../pages/SendMoney";
import Dasboard from "../pages/Dasboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
