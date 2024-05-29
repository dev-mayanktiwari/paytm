import { useEffect, useState } from "react";
import Button from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useDebounced = (value, timeout) => {
  const [val, setVal] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVal(value);
    }, timeout);

    return () => clearTimeout(timer);
  }, [value, timeout]);

  return val;
};

const Users = () => {
  // Replace with backend call

  const [users, setUsers] = useState([]);
  const [input, setInput] = useState("");
  const debouncedVal = useDebounced(input, 500);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + debouncedVal, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [debouncedVal]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        ></input>
      </div>
      <div>
        {users.map((user) => (
          <User user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  const handleSendMoney = () => {
    navigate("/send?userId=" + user._id + "&fname=" + user.firstName) ;
  }
  return (
    <div className="flex justify-between">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        <Button onClick={handleSendMoney} label={"Send Money"} />
      </div>
    </div>
  );
}

export default Users;
