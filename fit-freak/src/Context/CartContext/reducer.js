// reducer related to cart state;
import Swal from "sweetalert2";
const alert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item added to cart',
        showConfirmButton: false,
        timer: 1500
      })
}

const removeAlert = () => {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Item removed from cart',
        showConfirmButton: false,
        timer: 1500
      })
}
const reducer = (state,action) => {
    switch(action.type) {
        case "ADD_TO_CART" : {
            alert();
            return [...state, action.payload]
        }
        case "REMOVE_FROM_CART" : {
            removeAlert();
            const cartAfterRemoval = state.filter((item)=>
                item.id!==action.payload
            )
            return cartAfterRemoval;
        }
        case "CHECKOUT" : {
            return [];
        }
        default : {
            return state;
        }
    }
}
export default reducer;