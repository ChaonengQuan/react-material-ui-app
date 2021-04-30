import { Box } from "@material-ui/core"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Cart.css"

const Cart = () => {
    return (
        <div>
            <Box className="cartTitle"><ShoppingCartIcon style={{fontSize: "36px"}}/> Your Order</Box>
        </div>
    )
}

export default Cart
