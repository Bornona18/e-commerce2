import {
    MEN_ADD_CART_DRESS,
    MEN_ADD_CART_SHOES,
    WOMEN_ADD_CART_DRESS,
    WOMEN_ADD_CART_SHOES,
    CHILDREN_ADD_CART_DRESS,
    CHILDREN_ADD_CART_SHOES
} from './actiontype'

//  creating all actions

export const menshoes = (data) => {
    return {
        type: MEN_ADD_CART_SHOES,
        payload: data

    }
}

export const mendress = (data) => {
    return {
        type: MEN_ADD_CART_DRESS,
        payload: data
    }
}

export const womenshoes = (data) => {
    return {
        type: WOMEN_ADD_CART_SHOES,
        payload: data

    }
}

export const womendress = (data) => {
    return {
        type: WOMEN_ADD_CART_DRESS,
        payload: data
    }
}

export const childrenshoes = (data) => {
    return {
        type: CHILDREN_ADD_CART_SHOES,
        payload: data

    }
}

export const childrendress = (data) => {
    return {
        type: CHILDREN_ADD_CART_DRESS,
        payload: data
    }
}