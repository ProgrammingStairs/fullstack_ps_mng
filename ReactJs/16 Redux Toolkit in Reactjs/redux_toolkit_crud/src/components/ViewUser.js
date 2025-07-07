import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, updateUser } from "../store/userSlice.js";
import { useNavigate } from "react-router-dom";
function ViewUser(){
    const obj = useSelector(state=> state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return(<div style={{padding:"30px"}}>
        { obj.userArray.length==0 ? (<h1>No Record Found</h1>) : (
                <div>
                    <h2>User Data</h2>
                <table border={1} cellSpacing={0} cellPadding={10}>
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                    <th colspan="2">Action</th>
                </tr>
                {
                    obj.userArray.map((obj,index)=>{
                        return(<tr>
                            <td>{index+1}</td>
                            <td>{obj.username}</td>
                            <td>{obj.email}</td>
                            <td>{obj.password}</td>
                            <td>{obj.address}</td>
                            <td><button onClick={()=>{
                                dispatch(updateUser({obj,index}))
                                navigate('/addUser',{
                                    state: {
                                        titleMessage : "Update Form"
                                    }
                                })
                            }}>Update</button></td>    
                            <td><button onClick={()=>{dispatch(deleteUser(index))}}>Delete</button></td>    
                        </tr>);
                    })
                }
                </table>
                </div>
        )}
    </div>);
}
export default ViewUser;