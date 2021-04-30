import { Box } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Cart.css"

const Cart = () => {
    return (
        <div>
            <Box className="cartTitle"><ShoppingCartIcon/> Your Order</Box>
        </div>
    )
}

export default Cart
