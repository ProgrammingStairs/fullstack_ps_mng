import { useState } from "react";
import '../style.css';
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../store/userSlice.js";
import { useLocation, useNavigate } from "react-router-dom";
function AddUser(){
    const obj = useSelector(state=> state.user);
// https://copilot.microsoft.com/chats/uWGDk945DVsSqCHquTn3g
// https://copilot.microsoft.com/chats/M16QDGxjkg8w2DMzc6Xvf

    const [userAddObj,setUserAddObj] = useState(obj.userObj);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserAddObj({
            ...userAddObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addUser(userAddObj));
        console.log("userObj : ",obj.userObj);
        navigate('/addUser',{
            state:{
                message: Object.keys(obj.userObj).length>0 ? "Data updated successfully" : "User Data Added successfully"
            }
        });
        event.target.reset();
        setUserAddObj({});
    }
    return(<div style={{padding:"30px"}}>      
        {location.state?.titleMessage ? <h2>{location.state.titleMessage}</h2> : <h2>Add Form</h2>}
        {location.state?.message ? location.state.message : ''}
        <form action="" onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Enter Username"
            name="username"
            value={userAddObj.username ?? ''}
            onChange={getData}
        /><br/>
        <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={userAddObj.email ?? ''}
            onChange={getData}
        /> <br/>
        <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={userAddObj.password ?? ''}
            onChange={getData}
        /> <br/>
        <input
            type="text"
            placeholder="Enter Address"
            name="address"
            value={userAddObj.address ?? ''}
            onChange={getData}
        /><br/>
        <input
            type="submit"
            value={location.state?.titleMessage ? "Update" : "Add User"}
        /><br/>
        <input
            type="reset"
        />
        </form>
    </div>);
}
export default AddUser;