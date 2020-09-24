import { MEN_ADD_CART_DRESS, MEN_ADD_CART_SHOES, WOMEN_ADD_CART_DRESS, WOMEN_ADD_CART_SHOES, CHILDREN_ADD_CART_DRESS, CHILDREN_ADD_CART_SHOES } from '../Action/actiontype'
const initialstate = {

    menshoes: [],
    mendress: [],
    womenshoes: [],
    womendress: [],
    childrenshoes: [],
    childrendress: []


}
const retailreducer = (state = initialstate, action) => {

    switch (action.type) {
        case MEN_ADD_CART_DRESS:
            return {
                ...state,
                mendress: [...state.mendress, action.payload]
            }

        case MEN_ADD_CART_SHOES:
            return {
                ...state,
                menshoes: [...state.menshoes, action.payload]
            }
        case WOMEN_ADD_CART_DRESS:
            return {
                ...state,
                womendress: [...state.womendress, action.payload]
            }

        case WOMEN_ADD_CART_SHOES:
            return {
                ...state,
                womenshoes: [...state.womenshoes, action.payload]
            }
        case CHILDREN_ADD_CART_DRESS:
            return {
                ...state,
                childrendress: [...state.childrendress, action.payload]
            }

        case CHILDREN_ADD_CART_SHOES:
            return {
                ...state,
                childrenshoes: [...state.childrenshoes, action.payload]
            }
        default:
            return state

    }

}

export default retailreducer