import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ChangeDetails() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
  }

  const handleUpdateDetails = async () => {
    const payload = {};

    if (password) payload.password = password;
    if (firstName) payload.firstName = firstName;
    if (lastName) payload.lastName = lastName;

    if (Object.keys(payload).length === 0) {
      console.log("No details to update");
    }
    console.log(payload);
    try {
      await axios
        .put("api/v1/user/updateDetails", payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response);
          navigate("/dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center text-nowrap">
        <div className="rounded-lg bg-white w-100 text-center p-2 h-max px-4">
          <Heading label={"Update Details"} />
          <SubHeading label={"Enter the details you want to update"} />
          <InputBox
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            placeholder="John"
            label={"First Name"}
          />
          <InputBox
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            placeholder="Doe"
            label={"Last Name"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button onClick={handleUpdateDetails} label={"Update Details"} />
          </div>
          <BottomWarning
            label={"Want to Sign out?"}
            buttonText={"Sign Out"}
            onClick={handleSignOut}
            to={"/"}
          />
        </div>
      </div>
    </div>
  );
}

export default ChangeDetails;
