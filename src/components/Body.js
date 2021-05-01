import { Grid } from "@material-ui/core";
import Cart from "./Cart";
import Menu from "./Menu";
import "./Body.css";

const Body = ({
    tabValue,
    handleTabChange,
    items,
    images,
    cart,
    addToCart,
    incrementCount,
    decrementCount,
    clearCart
}) => {
    return (
        <>
            <Grid container className="body">
                <Grid item className="menu">
                    <Menu
                        tabValue={tabValue}
                        handleTabChange={handleTabChange}
                        items={items}
                        images={images}
                        addToCart={addToCart}
                    />
                </Grid>
                <Grid item className="cart">
                    <Cart
                        cart={cart}
                        incrementCount={incrementCount}
                        decrementCount={decrementCount}
                        clearCart={clearCart}
                    />
                </Grid>
            </Grid>
        </>
    );
};

export default Body;
