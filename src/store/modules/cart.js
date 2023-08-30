export default function Cart(state = [] , action){
    console.log("state array:" ,state)
    switch (action.type) {
        case "add-to-cart":
        return [...state, action.product]

        default: 
            return [];
    }
}
