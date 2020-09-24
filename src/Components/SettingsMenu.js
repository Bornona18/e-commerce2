import React, { useState, useEffect }from 'react'
import './CSS/choice.css'
import axios from 'axios'
import Session from '../Session'
import { useHistory,useParams } from 'react-router-dom'
const constants = require('../const')

function SettingsMenu() {

    const [name, setName] = useState('')
    var [emailLogin, setEmailLogin] = useState('')
    var [oldPasswordLogin, setOldPasswordLogin] = useState('')
    var [newPasswordLogin, setNewPasswordLogin] = useState('')

    useEffect(() => {
        setName(Session.getName)
        setEmailLogin(Session.getEmail)
    });

    function changeSettingsHandler(event) {        
        event.preventDefault()     
        if(oldPasswordLogin.length < 1 || newPasswordLogin.length < 1) {
            alert("Empty Fields")
            return
        }        
        else {
            const params = JSON.stringify({
                "email": emailLogin,
                "password": oldPasswordLogin,
                "newPassword": newPasswordLogin
            });
    
            // send post axios req
            axios.post(constants.API_URL + 'users/changepass', params,{
                "headers": {
                  "content-type": "application/json", 
                },
            })
            .then( (response) => {
                if(response.data === true) {
                    alert("Password Updated")
                }
                else {
                    alert("Current Password is wrong")
                }
            })
            .catch( (err) => {
                console.log(err); 
            });
        }
    }

    return(
        <div style={{padding: "15px 15px"}}>
            <h2>Update Settings</h2>
            <form >
                {/* email */}
                <div className="form-group">
                    <label >Email:</label>
                    <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} className="form-control" disabled/>
                </div>
                {/* password */}
                <div className="form-group">
                    <label >Old Password:</label>
                    <input type="password" value={oldPasswordLogin} onChange={(e) => setOldPasswordLogin(e.target.value)} className="form-control" placeholder="Enter Password" />
                </div>
                {/* New Password */}
                <div className="form-group">
                    <label >New Password:</label>
                    <input type="password" value={newPasswordLogin} onChange={(e) => setNewPasswordLogin(e.target.value)} className="form-control" placeholder="Enter Password" />
                </div> 
                <div style={{textAlign: "center"}}>
                    <button className="btn btn-primary" onClick={changeSettingsHandler}>
                        Change Password                        
                    </button>
                </div>               
            </form>
        </div>
    )
}

export default SettingsMenu