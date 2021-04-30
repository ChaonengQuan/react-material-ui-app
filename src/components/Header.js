import { Box, Grid } from "@material-ui/core"
import "./Header.css"

const Header = () => {
    return (
        <Grid container justify="flex-end" className="header">
            <Grid item><Box className="headerItem">Quan's Healthy Resturant</Box></Grid>
        </Grid>
    )
}

export default Header
