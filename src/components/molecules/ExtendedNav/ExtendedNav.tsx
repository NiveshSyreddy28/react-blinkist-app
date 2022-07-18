import { makeStyles} from '@mui/styles'
import theme from "../../../Themes/Themes"
import {Box} from "@mui/material"

const useStyles = makeStyles({
    activeNav:{

        display: "flex",
        width: "128px",
        height: "20px",
        "&:hover": {
            color: "#0365F2 !important",
        },
    },
    mockNav:{

        display: "flex",
        width: "128px",
        height: "20px",
    },
    text: {
        
        display: "flex",
        padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
    },
    icon: {
        alignItems: "center",
        padding: `${theme.spacing(2)} ${theme.spacing(0)}`,
    },
},
);


interface Props{
    icon: any,
    name: string,
    type: "active" | "mock"
}
function ExtendedNav(props: Props){
    const classes = useStyles();
    let navClass;
    if (props.type === "active") {
        navClass = classes.activeNav;
    }

    else{
        navClass = classes.mockNav;
    }
    return (
       <Box className={navClass}>
        <div className={classes.text}>
        <div>{props.icon}</div>
        </div>

        <div className={classes.icon}>
        <div>{props.name}</div>
        </div>
       </Box>
    )
}

export default ExtendedNav;