import { Box, Button, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";

const Cart = () => {
    return (
        <>
            <Grid
                container
                direction="column"
                justify="center"
            >
                <Box className="cartTitle">
                    <ShoppingCartIcon style={{ fontSize: "36px" }} /> Your Order
                </Box>

                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>
                <Box style={{fontSize:100}}> Item </Box>


                
                <Box className="cartCheckoutBox">
                    <div>Subtotal: $99.99</div>
                    <Button
                        variant="contained"
                        onClick={() => {
                            alert("Checkout");
                        }}
                    >
                        Checkout
                    </Button>
                </Box>
            </Grid>
        </>
    );
};

export default Cart;
