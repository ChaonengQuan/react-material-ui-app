import { Paper, Tabs, Tab, Grid, Button } from "@material-ui/core";
import "./Menu.css";

const Menu = ({ tabValue, handleTabChange, items, images }) => {
    let currentTabName = Object.keys(items)[tabValue];
    return (
        <div>
            <Paper style={{ backgroundColor: "#d8d174", borderRadius: "25px" }}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{ style: { background: "black" } }}
                    centered
                >
                    <Tab label="Appetizers" />
                    <Tab label="Salads" />
                    <Tab label="Sandwiches" />
                    <Tab label="Sides" />
                    <Tab label="Beverages" />
                </Tabs>
            </Paper>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                {Object.keys(items[currentTabName]).map(
                    (itemName, itemIndex) => {
                        return (
                            <Grid item key={itemName}>
                                <MenuItem
                                    images={images}
                                    itemName={itemName}
                                    itemPrice={items[currentTabName][itemName]}
                                ></MenuItem>
                            </Grid>
                        );
                    }
                )}
            </Grid>
        </div>
    );
};

const MenuItem = ({ images, itemName, itemPrice }) => {
    return (
        <>
            <Paper
                style={{
                    backgroundColor: "#b6c454",
                    borderRadius: "25px",
                    margin: "10px"
                }}
            >
                <div>
                    <img
                        className="menuGridItemImage"
                        src={images[itemName + ".jpg"].default}
                        alt="item"
                    ></img>
                </div>
                <div>{itemName}</div>
                <div>{"$" + itemPrice}</div>
                <Button
                    variant="contained"
                    className="addToCartButton"
                    onClick={() => {
                        alert("Added");
                    }}
                >
                    Add to Cart
                </Button>
            </Paper>
        </>
    );
};

export default Menu;
