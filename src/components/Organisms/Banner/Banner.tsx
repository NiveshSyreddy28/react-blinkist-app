import image from '../../../stories/assets/bannerimg.png';
import { makeStyles } from '@mui/styles';
import { Typography } from '@mui/material';
import "./styles.css";

const useStyles=makeStyles({
    root:{
        display: "flex",
        height: "264px",
        width: "912px",
        left: "0px",
        top: "0px",
        borderRadius: "0px",
        background: '#F1F6F4',
    },
    main:{
        height: '90px',
        width: '400px',
        paddingLeft: "3%",
        paddingTop: "3%",
        // left: '45px',
        // top: '45px',
        borderRadius: 'nullpx',
        fontFamily: 'Cera Pro',
        fontSize: '36px',
        fontWeight: '700',
        lineHeight: '45px',
        letterSpacing: '0em',
        textAlign: 'left',
        position: 'absolute',
        // left: '4.93%',
        // right: '60.09%',
        // top: '17.05%',
        // bottom: '48.86%',
        color: '#03314B',
    },
    sub:{
        position: "absolute",
        height: '69px',
        width: '360px',
        paddingLeft: "3%",
        paddingTop: "10%",
        // left: '45px',
        // top: '150px',
        borderRadius: 'nullpx',
        styleName: 'Subtitle 2',
        fontFamily: 'Cera Pro',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '23px',
        letterSpacing: '0em',
        textAlign: 'left',
            
        color: '#6D787E',
        fontStyle: 'normal',

    },

    image:{
        position:"absolute",
        marginTop: '0px',
        height: "67px",
          width: "290px",
          paddingLeft: "40%",
        //   top:"16px",
        //   left: '620px',
    }
    
});

function Banner() {

    const classes=useStyles();
  return (
    <div className={classes.root}>
        <div className={classes.main}>
            {/* <TypographyComponent variant="header">Explore Books on entrepreneurship</TypographyComponent> */}
            <Typography variant='heading'>Explore Books on entrepreneurship</Typography>
        </div>

        <div className={classes.sub}>
            {/* <TypographyComponent variant="subtitle">Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.</TypographyComponent> */}
            <Typography variant='subtitle2' fontFamily="Cera Pro">Everything you need to know about thriving on a 
            shoestring budget, making your first million, and hiring 
            right from the start.</Typography>
        </div>

        <div className={classes.image}>
            <img className='image' src={image} width={250} height={264} alt='Banner'/>
        </div>
    </div>
  )
}

export default Banner;