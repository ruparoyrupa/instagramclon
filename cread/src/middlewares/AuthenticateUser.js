import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";


// create authenticate

const AuthenticateUser = ({ children }) => {

    const {isUserLoggedIn} = useContext(AuthContext);

    return isUserLoggedIn ? children : <Navigate to={'/login'}/>


}

//  export middleware 

export default AuthenticateUser;