//import cookie
import Cookies from "js-cookie";
//import react router dom
import { Navigate } from "react-router-dom";

function PrivateRoute ({ children }) {
    //token from cookie
    const token = Cookies.get('token');
    return (
        <> 
            { token ? children : <Navigate to="/admin/login" /> }
        </>
    ) 
}
export default PrivateRoute;