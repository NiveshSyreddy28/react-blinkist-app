import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles=makeStyles({

    mIcon:{

        height: '22.047000885009766px',
        width: '16px',
        left: '4px',
        top: '1.4549560546875px',
        borderRadius: '0px'
        
    }
});

interface Props{
    src: string;
}

function Icons(props:Props) {
    const classes=useStyles();

  return (
   
    <img className={classes.mIcon} src={props.src} alt='BlinkList' />
    
  )
}

export default Icons
