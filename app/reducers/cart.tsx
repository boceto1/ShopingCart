import Product from '../model/Product'

import { ActionTypes, Action } from '../actions/cart'

export interface State {
    availableProducts: Product[],
    selectedProducts:Product[],
}

export const initialState: State = {
    availableProducts: [{id:1,name:"Celular Sony",price:250.36,stock:4}],
    selectedProducts:[]
}

export const reducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {

        case ActionTypes.ADD_PRODUCT: {
            const { currentAvailableProducts, selectedProduct } = action.payload;

            return {
                ...state,
                availableProducts: [currentAvailableProducts],
                selectedProducts:[...state.selectedProducts,selectedProduct]
            }
        }

        default:
            return state
    }
}


