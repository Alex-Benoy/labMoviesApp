// import React from "react";
// import { Navigate } from "react-router-dom";
// import { useUser } from "../../contexts/loginContext"; // ✅ fixed path

// interface Props {
//   children: JSX.Element;
// }

// const ProtectedRoute: React.FC<Props> = ({ children }) => {
//   const { isLoggedIn } = useUser();

//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default ProtectedRoute;
