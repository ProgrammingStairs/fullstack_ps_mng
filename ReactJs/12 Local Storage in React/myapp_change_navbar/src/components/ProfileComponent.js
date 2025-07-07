import { useLocation } from "react-router-dom";
function ProfileComponent(){
    localStorage.setItem("navShow","profile");  
    const location = useLocation();
    return (<>
        <h1>Profile Page</h1>
        <h2>Welcome {location.state.email}</h2>
    </>);
}
export default ProfileComponent;