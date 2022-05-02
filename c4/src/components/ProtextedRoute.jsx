 import { useContext } from "react";
// import { Navigate } from "react-router-dom";

// // /orders and /neworder are protected routes
// export const ProtectedRoute = ({ children }) => {
//   const{isAuth}=useContext(AuthContext);

//   if(!isAuth){
//       return <Navigate to="/login"/>;
//   }


// };import { useContext  } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from "../components/AuthContext";

export const ProtectedRoute =({ children}) => {
    const {isAuth}=useContext(AuthContext);

if( !isAuth) {
    return <Navigate to ="/login" />;
}
return children;
};