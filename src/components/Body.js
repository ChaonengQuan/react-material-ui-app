import { Grid } from "@material-ui/core"
import Cart from "./Cart"
import Menu from "./Menu"
import "./Body.css"

const Body = ({tabValue, handleTabChange}) => {
    return (
        <div>
            <Grid container className="body">
                <Grid item className="menu"><Menu tabValue={tabValue} handleTabChange={handleTabChange}/></Grid>
                <Grid item className="cart"><Cart /></Grid>
            </Grid>
        </div>
    )
}

export default Body
