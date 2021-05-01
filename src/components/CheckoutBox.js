import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Divider,
    Backdrop,
    Paper
} from "@material-ui/core";
import "./CheckoutBox.css";
import { useState } from "react";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

function CheckoutBox({ cart, clearCart }) {
    function getAmount(cart) {
        const taxRate = 0.056;
        let subtotal = cart
            .map((item) => item.itemCount * item.itemPrice)
            .reduce((acc, cur) => acc + cur, 0);
        let taxesAndFees = subtotal * taxRate;
        let total = subtotal + taxesAndFees;
        return {
            subtotal: subtotal.toFixed(2),
            taxesAndFees: taxesAndFees.toFixed(2),
            total: total.toFixed(2)
        };
    }

    let total = getAmount(cart);

    const [confirmPageOpen, setConfirmPageOpen] = useState(false);
    const handleConfirmPageOpen = () => {
        setConfirmPageOpen(true);
    };
    const handleConfirmPageClose = () => {
        setConfirmPageOpen(false);
    };

    const [paymentPageOpen, setPaymentPageOpen] = useState(false);
    const handlePaymentPageOpen = () => {
        setPaymentPageOpen(true);
    };
    const handlePaymentPageClose = () => {
        setPaymentPageOpen(false);
    };

    return (
        <>
            <Box className="cartCheckoutBox">
                <div>Subtotal: ${total.subtotal}</div>
                <Button variant="contained" onClick={handleConfirmPageOpen}>
                    Checkout
                </Button>
                {/* Conformation Page Dialog */}
                <Dialog
                    open={confirmPageOpen}
                    onClose={handleConfirmPageClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth
                    maxWidth="sm"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Order Overview"}
                    </DialogTitle>
                    <DialogContent>
                        {Object.values(cart).map((value, valueIndex) => {
                            return (
                                <DialogContentText>
                                    {value.itemName + " x " + value.itemCount}
                                </DialogContentText>
                            );
                        })}
                        <DialogContentText>
                            <Divider />
                        </DialogContentText>
                        <Box textAlign="right">
                            <DialogContentText>
                                Subtotal: ${total.subtotal}
                            </DialogContentText>
                            <DialogContentText>
                                Taxes and Fees: ${total.taxesAndFees}
                            </DialogContentText>
                            <DialogContentText>
                                Total: ${total.total}
                            </DialogContentText>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={handleConfirmPageClose}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={() => {
                                handleConfirmPageClose();
                                handlePaymentPageOpen();
                            }}
                            color="primary"
                            autoFocus
                        >
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>

                {/* Payment Page Dialog */}
                <Backdrop
                    style={{ zIndex: 1, color: "#fff" }}
                    open={paymentPageOpen}
                    onClick={() => {
                        handlePaymentPageClose();
                        clearCart();
                    }}
                >
                    <Paper
                        style={{
                            backgroundColor: "#e6d3a3",
                            borderRadius: "25px",
                            padding: "25px",
                            color: "green"
                        }}
                    >
                        Checkout Successful!
                        <CheckCircleOutlineIcon fontSize="large" />
                    </Paper>
                </Backdrop>
            </Box>
        </>
    );
}

export default CheckoutBox;
