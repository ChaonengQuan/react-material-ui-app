const { Paper, Tabs, Tab } = require("@material-ui/core");

const Menu = ({tabValue, handleTabChange}) => {
    return (
        <div>
            <Paper style={{backgroundColor: "#d8d174", borderRadius: "25px"}}>
                <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    indicatorColor="primary"
                    TabIndicatorProps={{style: {background:'black'}}}
                    centered
                >
                    <Tab label="Appetizers" />
                    <Tab label="Salads"/>
                    <Tab label="Sandwiches" />
                    <Tab label="Sides" />
                    <Tab label="Beverages" />
                </Tabs>
            </Paper>
        </div>
    );
};

export default Menu;
