import { set } from "local-storage";

var Session = ( () => {
  
    var cartProducts = []

    var getID = function() {
        return localStorage.getItem('id')      
    };

    var setID = function(id) {
        localStorage.setItem('id', id)
    };

    var getName = function() {
        return localStorage.getItem('name')      
    };
  
    var setName = function(name) {
        localStorage.setItem('name', name)
    };

    var getEmail = function() {
        return localStorage.getItem('email')      
    };

    var setEmail = function(email) {
        localStorage.setItem('email', email)
    };

    var insertProductInCart = function(product) {
        cartProducts = JSON.parse(localStorage.getItem("cartProducts"))
        if(cartProducts === null) {
            var cartProducts = []
            cartProducts.push(product)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }
        else {
            cartProducts.push(product)
            localStorage.setItem("cartProducts", JSON.stringify(cartProducts))
        }        
    }

    var getCart = function() {
        return JSON.parse(localStorage.getItem("cartProducts"))
    }

    var clearCart = function() {
        localStorage.removeItem("cartProducts")
    }

    var checkCart = function() {
        if(localStorage.getItem("cartProducts") === null) {
            localStorage.setItem("cartProducts", "[]")
        }
    }
  
    return {
      getName: getName,
      setName: setName,
      insertProductInCart: insertProductInCart,
      getCart: getCart,
      getID: getID,
      setEmail: setEmail,
      setID: setID,
      getID: getID,
      clearCart: clearCart,
      checkCart: checkCart,
      getEmail: getEmail
    }
  
  })();
  
  export default Session;