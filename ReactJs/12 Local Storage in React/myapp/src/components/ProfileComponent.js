import { useLocation } from "react-router-dom";
function ProfileComponent(){
    const location = useLocation();
    return (<>
        <h1>Profile Page</h1>
        <h2>Welcome {location.state.email}</h2>
    </>);
}
export default ProfileComponent;