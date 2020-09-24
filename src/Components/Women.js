import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CSS/men.css'
import { useParams, useHistory } from 'react-router-dom'
import './CSS/choice.css'
import './CSS/home.css'
import { womenshoes, womendress } from './../redux/Action/actioncreator'
import { connect } from 'react-redux'
import Session from './../Session'
const constants = require('./../const')

//  stateless Component
function Women(props) {    

    const [name, setName] = useState('')

    const history = useHistory()

    const [dress, setDress] = useState([])
    const [shoes, setShoes] = useState([])
    const [DressData, setdata] = useState(true)
    const [Quantity, setQuantity] = useState(0)

    // Api call For Women's dresses
    useEffect(() => {
        setName(Session.getName)
        axios.get(constants.API_URL + 'products/getall?type=womendress')
            .then(res => {
                console.log(res.data)
                setDress(res.data)
            }).catch(err => console.log(err))
    }, [])

    // Api call For Women's shoes
    useEffect(() => {
        setName(Session.getName)
        axios.get(constants.API_URL + 'products/getall?type=womenshoes')
            .then(res => {
                console.log(res.data)
                setShoes(res.data)
            }).catch(err => console.log(err))
    }, [])



    // on Pressing Add to cart , selected  data will be pushed into array
    function submitProduct(id, value , price, type) {
        Session.insertProductInCart(
            { 
                id: id,
                name: value,
                price: price,
                quantity: Quantity,
                type: type
            }
        );
        setQuantity(0)
        console.log("Product added")
    }


    function ShowDress() {
        setQuantity(0)
        setdata(true)
    }   

    // navigate to cart after pressing go to cart and at same time it will store data on redux
    function checkout(event) {
        function checkout() {
            history.push("/cart/")
        }
    }

    function showShoes() {
        setQuantity(0)
        setdata(false)
    }

    let data

    // setting dress data 
    if (DressData) {
        data = <div>
            <div className="  row">
                {
                    dress.map(p =>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" key={p.id}>
                            <div className=" homecard card">
                                <div className="card-body">
                                    <img className="mydress" src={p.imagelink} alt="Logo" /> <br /><br /><br />
                                    <form >
                                        <div className="form-group">
                                            <input type="number" min="0" max="10" onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder="Enter quantity" />
                                        </div></form>
                                    <br /> <br />
                                    <b>  <p className="pricetag">Rs {p.price} /-</p></b>
                
                                    <button className=" mybtn btn btn-primary" onClick={() => {
                                        submitProduct(p.id, p.value, p.price, p.type)
                                    }} name={p.price} value={p.value}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    }
    // setting shoes data 
    else {
        data = <div>
            <div className=" hero row">
                {
                    shoes.map(p =>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" key={p.id}>
                            <div className=" homecard card">
                                <div className="card-body">
                                    <img className="mydress" src={p.imagelink} alt="Logo" /> <br />
                                    <br /><br />
                                    <form >
                                        <div className="form-group">
                                            <input type="number" onChange={(e) => setQuantity(e.target.value)} className="form-control" placeholder="Enter quantity" />
                                        </div></form>
                                    <br /> <br />
                                    <b>  <p className="pricetag">$ {p.price} /-</p></b>
                
                                    <button className=" mybtn btn btn-primary" onClick={() => {
                                        submitProduct(p.id, p.value, p.price, p.type)
                                    }} name={p.price} value={p.value}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    }
    return (
        <div>
            <div className="heading ">
                <b>Welcome {name}</b>
            </div><br /><br /><br /><br />
            <div className="row" style={{textAlign: "center"}}>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                    <button className="choice  btn btn-dark" onClick={ShowDress}>Dress</button>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-4 col-lg-6 col-xl-6">
                    <button className=" choice btn btn-dark" onClick={showShoes}>Shoes</button>
                </div>
            </div>
            <br /><br /><br /><br />

            <div>
                {data}
            </div>
            <br /><br /><br /><br />
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <button className="chckout btn btn-primary" onClick={checkout}>Go To Cart</button>
                </div>
            </div>
        </div>
    )
}

// mapping variable from redux state
const mapStateToProps = state => {
    return {
        shoes: state.womenshoes,
        dress: state.womendress
    }
}


// mapping action creator functions from redux state
const mapdispatchToProps = dispatch => {
    return {
        addshoes: (d) => dispatch(womenshoes(d)),
        adddress: (d) => dispatch(womendress(d))
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Women)
