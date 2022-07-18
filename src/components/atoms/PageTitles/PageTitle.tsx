import React from "react";
import { Typography} from "@mui/material";
import theme from "../../../Themes/Themes";

interface Props {
    title : string
}

const PageTitle = (props: Props) => {
    
    return(
        // <ThemeProvider theme={theme}>
        <Typography
        variant="heading"
        component="h2"
        // fontFamily={theme.typography.fontFamily}
        style={{
            font:"Cera Pro",
            color:theme.palette.textcolor.main,
            marginBottom: theme.spacing(16),
            marginTop:theme.spacing(6) ,
        
            }}
        >
            {props.title}
        </Typography>
        /* </ThemeProvider> */
    );
};

    export default PageTitle;