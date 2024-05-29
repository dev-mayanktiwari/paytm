import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChangeDetails from "../pages/ChangeDetails";
import SendMoney from "../pages/SendMoney";
import Dasboard from "../pages/Dasboard";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import HomePage from "../pages/Homepage";
import About from "../pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dasboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/updateDetails" element={<ChangeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
