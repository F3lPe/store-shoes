import {produce} from 'immer'

export default function Cart(state = [] , action){
    switch (action.type) {
        case 'add-to-cart':
        return produce(state, draft => {
            const findIndicie = draft.findIndex(e => e.id === action.product.id);
            if(findIndicie >= 0){
                draft[findIndicie].quantidade++
            } else{
                draft.push({    
                    ...action.product,
                    quantidade: 1
                })
            }
       })
       case 'remove-product':
        return produce(state, draft => {
            const productIndex = draft.findIndex(e => e.id === action.id)
           
            if(productIndex >= 0){
                draft.splice(productIndex, 1)
            }
        })
        case 'update-amount': {
            if(action.amount <= 0){
                return state;
            }
            return produce(state, draft => {    

                    const productIndex = draft.findIndex(e => e.id === action.id)
                    if(productIndex >= 0){
                        draft[productIndex].quantidade = action.amount
                    }     
            })}
        default: 
            return state;
    }
}
