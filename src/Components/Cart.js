import React, { Component } from 'react'
import axios from 'axios'
import './CSS/men.css'
import './CSS/choice.css'
import './CSS/home.css'
import Session from './../Session'
import { shoes, dress } from './../redux/Action/actioncreator'
import { connect } from 'react-redux'
import { type } from 'os'
const constants = require('./../const')

class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cartItems : [],
        }
    }

    componentDidMount() {
       this.setState({
           cartItems: Session.getCart()
       })       
    }
    
    checkoutBtn = () => {

        for(let i = 0; i < this.state.cartItems.length; i++) {
            // get form data
            const params = JSON.stringify({
                "id": this.state.cartItems[i].id,
                "userID": Session.getID(),                
                "name": this.state.cartItems[i].name,
                "price": this.state.cartItems[i].price,
                "quantity": this.state.cartItems[i].quantity,
                "type": this.state.cartItems[i].type
            });

            // send post axios req
            axios.post(constants.API_URL + 'products/purchase', params,{
                "headers": {
                    "content-type": "application/json", 
                },
            })
            .then( (response) => {
                console.log(response)
            })
            .catch( (err) => {
                console.log(err); 
            });
        }       
        
        setTimeout(() => {
            alert("Products Purchased")
            this.setState({cartItems: []})
            Session.clearCart()
            Session.checkCart()
        }, 2500)
    }

    render() {

        return (
            <div>
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

                        {this.state.cartItems.map((product) => (
                            <tr>
                                <td>{product.name}</td>
                                <td>{product.quantity}</td>
                                <td>{product.price} $</td>
                                <td>{product.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div>
                    <button className="btn btn-primary ml-2" onClick={this.checkoutBtn}>Checkout</button>
                </div>
            </div>
        )        
        
    }
}

const mapStateToProps = state => {
    return {
        menshoes: state.menshoes,
        mendress: state.mendress,
        womenshoes: state.womenshoes,
        womendress: state.womendress,
        childrenshoes: state.childrenshoes,
        childrendress: state.childrendress
    }
}

const mapdispatchToProps = dispatch => {
    return {
        
    }
}
export default connect(mapStateToProps, mapdispatchToProps)(Cart)