import { Box, Button, Grid } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Cart.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const Cart = ({ cart }) => {
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
