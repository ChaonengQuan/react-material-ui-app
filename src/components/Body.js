import { Grid } from "@material-ui/core";
import Cart from "./Cart";
import Menu from "./Menu";
import "./Body.css";

const Body = ({ tabValue, handleTabChange, items, images }) => {
    return (
        <>
            <Grid container className="body">
                <Grid item className="menu">
                    <Menu
                        tabValue={tabValue}
                        handleTabChange={handleTabChange}
                        items={items}
                        images={images}
                    />
                </Grid>
                <Grid item className="cart">
                    <Cart />
                </Grid>
            </Grid>
        </>
    );
};

export default Body;
