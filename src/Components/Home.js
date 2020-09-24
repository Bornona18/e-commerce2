import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './CSS/home.css'
import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import Session from './../Session';
const constants = require('./../const')
const axios = require('axios')



//  stateless Component
function Home() {

    const reducers = {
        session: sessionReducer
      };
    
    const reducer = combineReducers(reducers);

    const history = useHistory();


    const [nameSignup, setNameSignup] = useState('')
    const [emailSignup, setEmailSignup] = useState('')
    const [passwordSignup, setPasswordSignup] = useState('')

    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')

    // handle  login  submit
    function signupHandler(event) {            

        // stay on same page
        event.preventDefault()        

        // get form data
        const params = JSON.stringify({
            "name": nameSignup,
            "email": emailSignup,
            "password": passwordSignup,         
        });

        // send post axios req
        axios.post(constants.API_URL + 'users/register', params,{
            "headers": {
              "content-type": "application/json", 
            },
        })
        .then( (response) => {            
            if(response.data === null) {
                alert("Account Registered.. You Can Now Login!!")              
            }            
            else {
                alert("Account with this email already exists")
            }
        })
        .catch( (err) => {
            console.log(err); 
        });
        
    }

    function loginHandler(event) {
        // stay on same page
        event.preventDefault()        

        // get form data
        const params = JSON.stringify({
            "email": emailLogin,
            "password": passwordLogin,         
        });

        // send post axios req
        axios.post(constants.API_URL + 'users/login', params,{
            "headers": {
              "content-type": "application/json", 
            },
        })
        .then( (response) => {
            if(response.data === null) {
                alert("Your Login Credentials are incorrect")
            }
            else {
                alert("Login Found. Welcome Back!")
                Session.setID(response.data.id)
                Session.setEmail(response.data.email)
                Session.setName(response.data.name)
                Session.checkCart()
                history.push("/choice/")
            }
        })
        .catch( (err) => {
            console.log(err); 
        });
    }


    return (
        <div className="myrow hero row justify-content-center">     

            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div className=" homecard card">
                    <div className="card-body">
                        <form >

                            {/* email */}
                            <div className="form-group">
                                <label >Email:</label>
                                <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} className="form-control" placeholder="Enter Email" />
                            </div>

                            {/* password */}
                            <div className="form-group">
                                <label >Password:</label>
                                <input type="password" value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} className="form-control" placeholder="Enter Password" />
                            </div>

                            <div className="form-group">
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className=" mybtn btn btn-primary" onClick={loginHandler}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>            


            <div class="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                <div className=" homecard card">
                    <div className="card-body">
                        <form >

                            {/* name */}
                            <div className="form-group">
                                <label >Name:</label>
                                <input type="text" value={nameSignup} onChange={(e) => setNameSignup(e.target.value)} className="form-control" placeholder="Enter Name" />
                            </div>

                            {/* email */}
                            <div className="form-group">
                                <label >Email:</label>
                                <input type="text" value={emailSignup} onChange={(e) => setEmailSignup(e.target.value)} className="form-control" placeholder="Enter Email" />
                            </div>

                            {/* password */}
                            <div className="form-group">
                                <label >Password:</label>
                                <input type="password" value={passwordSignup} onChange={(e) => setPasswordSignup(e.target.value)} className="form-control" placeholder="Enter Password" />
                            </div>

                            <div className="form-group">
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className=" mybtn btn btn-primary" onClick={signupHandler}>
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Home

