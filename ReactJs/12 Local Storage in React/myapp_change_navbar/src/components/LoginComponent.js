import { useState } from "react";
import '../style.css';
import { useLocation, useNavigate } from "react-router-dom";
function LoginComponent(){  
    localStorage.setItem("navShow","login");  
    const [userObj,setUserObj] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const getData = (event)=>{
        const {name,value} = event.target;
        setUserObj({
            ...userObj,
            [name]:value
        });
    }
    const handleSubmit = (event)=>{
        event.preventDefault();
        var data = JSON.parse(localStorage.getItem("data"));
        //console.log(data);
        if(!data){
            navigate('/login',{
                state:{
                    message:"You need to Register First Before Login"
                }
            });
        }else{
            const res = data.find(obj=> obj.email==userObj.email && obj.password==userObj.password);
            if(!res){
                navigate('/login',{
                    state:{
                        message:"Email Id or Password is Incorrect"
                    }
                });               
            }else{
                navigate('/profile',{
                    state:{
                        email:userObj.email
                    }
                });
            }
        }
        event.target.reset();
    }
    return (<>
        <h1>Login Page</h1>
        {location.state?.message}
        <form onSubmit={handleSubmit}> 
            <input
                type='email'
                placeholder="Enter Email"
                name='email'
                required
                onChange={getData}
            /><br/>
            <input
                type='password'
                placeholder="Enter Password"
                name='password'
                required
                onChange={getData}
            /><br/>
            <input
                type='submit'
            /><br/>
            <input
                type='reset'
            />

        </form>
    </>);
}
export default LoginComponent;