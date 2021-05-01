import { Box, Button, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Cart = ({ cart, incrementCount, decrementCount }) => {
    function getSubTotal(cart){
        let sum = cart.map(item => item.itemCount * item.itemPrice ).reduce( (acc, cur) => (acc + cur), 0);
        return sum.toFixed(2);
    }

    return (
        <>
            <Grid container direction="column" justify="center">
                <Box className="cartTitle">
                    <ShoppingCartIcon style={{ fontSize: "36px" }} /> Your Order
                </Box>

                {Object.values(cart).map((value, valueIndex) => {
                    return (
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="flex-start"
                            key={value.itemName}
                            style={{
                                fontSize: "20px",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            }}
                        >
                            <Grid
                                item
                                style={{
                                    flex: 1,
                                    textAlign: "left",
                                    maxWidth: "100px"
                                }}
                            >
                                <Grid
                                    container
                                    direction="row"
                                    justify="space-between"
                                    alignItems="center"
                                >
                                    <Button
                                        variant="contained"
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px"
                                        }}
                                        onClick={() => {
                                            incrementCount(value.itemName);
                                        }}
                                    >
                                        +
                                    </Button>
                                    {value.itemCount}
                                    <Button
                                        variant="contained"
                                        style={{
                                            maxWidth: "30px",
                                            maxHeight: "30px",
                                            minWidth: "30px",
                                            minHeight: "30px",
                                            alignSelf: "right"
                                        }}
                                        onClick={() => {
                                            decrementCount(value.itemName);
                                        }}
                                    >
                                        -
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item style={{ flex: 1, textAlign: "center" }}>
                                {value.itemName}
                            </Grid>
                            <Grid item style={{ flex: 1, textAlign: "right" }}>
                                {"$" + value.itemPrice}
                            </Grid>
                        </Grid>
                    );
                })}

                <Box className="cartCheckoutBox">
                    <div>Subtotal: ${getSubTotal(cart)}</div>
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
