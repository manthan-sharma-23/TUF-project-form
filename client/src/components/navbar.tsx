import { useLocation, useNavigate } from "react-router-dom";

const routes = {
  forms: "/",
  responses: "/responses",
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full h-[7vh] bg-stone-100 flex justify-center items-center gap-10 text-black font-bold text-lg">
      <p
        className={`cursor-pointer hover:underline hover:text-blue-600 ${
          location.pathname === routes.forms && "text-blue-800"
        }`}
        onClick={() => navigate(routes.forms)}
      >
        Form
      </p>
      <p
        className={`cursor-pointer hover:underline hover:text-blue-600 ${
          location.pathname === routes.responses && "text-blue-800"
        }`}
        onClick={() => navigate("/responses")}
      >
        Responses
      </p>
    </div>
  );
};

export default Navbar;
