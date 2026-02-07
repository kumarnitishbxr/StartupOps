import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
import { logoutUser } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
 const {user} = useSelector(s=>s.auth)
  const handleLogout = () => {
    dispatch(logoutUser())
  };

  return (
    <nav className="h-14 bg-white border-b px-6 flex items-center justify-between">
      <h1
        className="text-lg font-semibold cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        StartupOps
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">
          {user?.name}
        </span>

        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
