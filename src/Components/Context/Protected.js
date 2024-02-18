import {Navigate, useNavigate} from "react-router-dom";
import GlobalData from "./GlobalData";

const Protected = ({Candidate})=>{
    return localStorage.getItem("isLogin")==="true" ? <Navigate to="/" />:<Navigate to="/login"/>
}

export default Protected;