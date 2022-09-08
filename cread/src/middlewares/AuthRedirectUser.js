import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";


// create authenticate

const AuthRedirectUser = ({ children }) => {

    const {isUserLoggedIn} = useContext(AuthContext);

    return isUserLoggedIn ?  <Navigate to={'/'}/> : children


}

//  export middleware 

export default AuthRedirectUser;