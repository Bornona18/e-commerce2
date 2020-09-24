import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css';
import { useHistory, useParams } from 'react-router';
import './CSS/choice.css'
import './CSS/home.css'
import './CSS/men.css'

function Checkout() {

    const [number, setNumber] = useState(424242424242)
    const [name, setName] = useState()
    const [cvc, setCVC] = useState()
    const [expiry, setExpiry] = useState()
    const [focus, setFocus] = useState()
    const { FullName, amount } = useParams()
    const history = useHistory()
    function paymentHandler(event) {
        if (number != undefined && name != undefined && cvc != undefined && expiry != undefined) {

            history.push('/final')
        }
        else {
            alert("Please fill Details")
        }
        event.preventDefault()
    }
    // let amount=useParams()
    return (
        <div>
            <div className=" row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="card">
                        <div className=" card-body">
                            <div className="heading " >
                                <b>Welcome {FullName}</b>
                            </div></div></div></div></div><br /><br /><br />
            <div className=" row">
                <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    <div className="card">
                        <div className=" card-body">
                            <p className="final">Please Pay to Place Your order <br /><br />
                                <b>You need to Pay us : $- {amount} /-</b>
                            </p></div></div></div>
                <div className="col-xs-7 col-sm-5 col-md-7 col-lg-7 col-xl-7">
                    <div className="card">
                        <div className=" card-body">


                            <Cards name={name} number={number} xpiry={expiry} cvc={cvc} focused={focus} />
                            <form >
                                <div className="form-group">
                                    <input type="tel" name="number" value={number} onChange={(e) => setNumber(e.target.value)} onFocus={(e) => setFocus(e.target.name)} className="form-control" placeholder="Card Number : xxxx xxxx xxxx xxxx" />
                                </div>

                                <div className="form-group">
                                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} onFocus={(e) => setFocus(e.target.name)} className="form-control" placeholder="Card Holder Name" />
                                </div>

                                <div className="form-group">
                                    <input type="tel" name="cvc" value={cvc} onChange={(e) => setCVC(e.target.value)} onFocus={(e) => setFocus(e.target.name)} className="form-control" placeholder="CVC" />
                                </div>

                                <div className="form-group">
                                    <input type="text" name="expiry" value={expiry} onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => setFocus(e.target.name)} className="form-control" placeholder="MM/YYYY" />
                                </div>

                                <button className=" mybtn btn btn-primary" onClick={paymentHandler}>PAY Rs-{amount}/-</button>
                            </form>
                        </div></div></div>
            </div>
        </div>
    )
}

export default Checkout