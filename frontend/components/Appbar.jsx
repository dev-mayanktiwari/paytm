import { useNavigate } from "react-router-dom";

const Appbar = ({ user }) => {
  const navigate = useNavigate();
  const handleOnclick = () => {
    navigate("/updateDetails");
  };
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4"> {user} </div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
          <div
            onClick={handleOnclick}
            className="flex flex-col justify-center h-full text-xl cursor-pointer"
          >
            {user[0]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
