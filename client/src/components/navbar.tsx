import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-[7vh] bg-stone-100 flex justify-center items-center gap-10 text-black font-bold text-lg">
      <p className="cursor-pointer hover:underline hover:text-blue-600 " onClick={()=>navigate("/")}>
        Form
      </p>
      <p className="cursor-pointer hover:underline hover:text-blue-600 " onClick={()=>navigate("/responses")}>
        Responses
      </p>
    </div>
  );
};

export default Navbar;
