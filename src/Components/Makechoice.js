import React, { useState, useEffect }from 'react'
import './CSS/choice.css'
import Session from './../Session'
import { useHistory,useParams } from 'react-router-dom'

//  stateless Component
function Makechoice() {

    const history = useHistory()

    const [name, setName] = useState('')

    useEffect(() => {
        setName(Session.getName)
    });

    function menHandler() {
        history.push(`/men/`)  
    }

    function womenHandler() {
        history.push(`/women/`)  
    }    

    function childrenHandler() {
        history.push(`/children/`)  
    }

    return (
        <div className="container">            
            <h1 className="heading">Welcome {name}</h1>
            <h3><i>You're looking for</i></h3> <br/>
            <div class="row">

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="mycard card">
                        <div className="card-header" style={{backgroundColor: "none"}}>
                            <button onClick={menHandler} className="cardbutton  bg-dark text-white">Men</button>
                        </div>
                    </div>
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="mycard card">
                        <div className="card-header">
                            <button onClick={womenHandler} className=" cardbutton  bg-dark text-white">Women</button>
                        </div>
                    </div>
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="mycard card">
                        <div className="card-header">
                            <button onClick={childrenHandler} className=" cardbutton bg-dark text-white  ">Children</button>
                        </div>
                    </div>
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="mycard card">
                        <div className="card-header">
                            <button onClick={() => {
                                history.push(`/dashboard/`)  
                            }} className=" cardbutton bg-dark text-white  ">Dashboard</button>
                        </div>
                    </div>
                </div>

                <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4">
                    <div className="mycard card">
                        <div className="card-header">
                            <button onClick={() => {
                                history.push(`/settings/`)  
                            }} className=" cardbutton bg-dark text-white  ">Settings</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Makechoice