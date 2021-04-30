const { Paper, Tabs, Tab } = require("@material-ui/core");

const Menu = ({tabValue, handleTabChange}) => {
    return (
        <div>
            <Paper>
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
