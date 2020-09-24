import React, { useState, useEffect }from 'react'
import './CSS/choice.css'
import axios from 'axios'
import Session from './../Session'
import { useHistory,useParams } from 'react-router-dom'
const constants = require('./../const')

function Dashboard() {

    const [name, setName] = useState('')
    let [history, setHistory] = useState([])

    useEffect(() => {
        setName(Session.getName)
        axios.get(constants.API_URL + 'products/gethistory/?id=' + Session.getID())
            .then(res => {
                setHistory(res.data)
        }).catch(err => console.log(err))
    });    

    return (
        <div>
            <h2>History</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>PRODUCT NAME</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TYPE</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((h) => (
                        <tr>
                            <th>{h.name}</th>
                            <th>{h.quantity}</th>
                            <th>{h.price}</th>
                            <th>{h.type}</th>
                        </tr>    
                    ))}                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard