import {produce} from 'immer'

export default function Cart(state = [] , action){
    switch (action.type) {
        case 'add-to-cart':
       return produce(state, draft => {
            const findIndicie = draft.findIndex(e => e.id === action.product.id);
            const valorTotal = draft.filter(e => e.id === action.product.id)
            console.log(valorTotal)
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
            const productIndex = draft.findIndex(e => e.id === action.product.id)
            if(productIndex >= 0){
                draft.splice(productIndex, 1)
            }
        })
        default: 
            return state;
    }
}
