// import { Navigate, Outlet } from "react-router-dom";
// import useAuth from "../../hooks/useAuth";
// import Loader from "../common/Loader";

// const ProtectedRoute = ({ allowedRoles = [] }) => {
//   const { user, isLoading, isAuthenticated } = useAuth();

//   if (isLoading) {
//     return <Loader fullScreen />;
//   }

//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   if (
//     allowedRoles.length > 0 &&
//     !allowedRoles.includes(user?.globalRole)
//   ) {
//     return <Navigate to="/unauthorized" replace />;
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;
