import { useState } from "react";
import '../style.css';
import { useLocation, useNavigate } from "react-router-dom";
function RegisterComponent(){    
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
        // console.log(data);
        if(!data){
            localStorage.setItem("data",JSON.stringify([...data||[],userObj])); 
            navigate('/login',{
                    state : {
                        message:"Successfully Registered | Login Here"
                    }
            })
        }else{
            const res = data.find(obj=> obj.email==userObj.email);
            if(res){
                navigate('/register',{
                    state : {
                        message:"Email Id already Exist"
                    }
                })
            }else{
                localStorage.setItem("data",JSON.stringify([...data||[],userObj]));
                navigate('/login',{
                    state : {
                        message:"Successfully Registered | Login Here"
                    }
            })
            }
        }    
        event.target.reset();
    }
    return (<>
        <h1>Register Page</h1>
        {location.state?.message}
        <form onSubmit={handleSubmit}> 
            <input
                type='text'
                placeholder="Enter Username"
                name='username'
                required
                onChange={getData}
            /><br/>
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
                type='text'
                placeholder="Enter Address"
                name='address'
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
export default RegisterComponent;