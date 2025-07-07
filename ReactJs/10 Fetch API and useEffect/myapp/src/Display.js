import React from 'react';
import { createRoot } from 'react-dom/client';

function Display(props) {
    return (<>
        <center>
            <h2>Form Details</h2>
            
               {(props.userArray.length===0)
                    ?(<p>"No Record Found"</p>)
                        :( 
            
            <table border={1} cellSpacing={0} cellPadding={10} width="80%">
                <tr>
                    <th>S.No</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Address</th>
                </tr>
                {
                    props.userArray.map((obj, index) => {
                        return (<>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{obj.username}</td>
                                <td>{obj.email}</td>
                                <td>{obj.password}</td>
                                <td>{obj.address}</td>
                            </tr>
                        </>);
                    })
                }
            </table>
            )}
        </center>
    </>);
}
export default Display;