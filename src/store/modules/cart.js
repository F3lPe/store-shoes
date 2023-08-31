export default function Cart(state = [] , action){
    switch (action.type) {
        case 'add-to-cart':
        return [...state, action.product]

        default: 
            return state;
    }
}
