import React from "react";
import LogoImage from "./../../../stories/assets/Blinkist.png";
import { makeStyles } from "@mui/styles";


const useStyles=makeStyles({

    mlogo:{

        height: '26px',
        width: '124.09px',
        left: '0px',
        top: '0px',
        borderRadius: '0px'
        
    }
});
interface Props{
    
}
function Logo(props:Props){

    const classes=useStyles();

    return(

        <div >
        <img className={classes.mlogo} src={LogoImage} alt='BlinkList' />
        </div>
    );
}

export default Logo