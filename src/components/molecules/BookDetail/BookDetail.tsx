import React from "react";
//import Icon from "../../Atoms/Icon/Icon";
import bookimg from "../../../stories/assets/coverImages/2.svg";
import { customStyles } from "../../../Themes/index";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
// import Buttons from "../../atoms/Button/Button";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
// import { ReactComponent as Timer} from "../../";
import Icon from '@mui/icons-material/AccessTime';
import Buttons from "../../atoms/Button/Button";
import { Link } from "react-router-dom";


export default function BookDetail() {
    const classes = customStyles();

  return (
    <Grid container >
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3}>
            <Grid item>
            <Typography
                variant="body2"
                fontFamily={'Cera Pro'}
                fontWeight="bold"
                fontSize="16px"
                color= "#03314B"
                component="div"
                children="Get the key ideas from"

                className={classes.bookInfo} />
            </Grid>
          <Grid item>
            <Typography variant="h5"  fontFamily={'Cera Pro'} fontSize="36px" fontWeight={'Bold'} className={classes.bookInfo}>
              Beyond Entrepreneurship 2.0
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2"  fontFamily={'Cera Pro'} fontSize="20px" fontWeight={'Bold'} className={classes.bookInfo}>
              Turning Your Business into an Enduring Great Company
            </Typography>
          </Grid>
          <Grid item>
          <Typography
                variant="body2"
                component="div"
                fontSize="16px" 
                children="By Jim Collins and Bill Lasier"
                className={classes.iconText}
                fontFamily={'Cera Pro'}
                fontWeight={"bold"}
              />
          </Grid>
          <Grid item>
          <Typography sx={{display:"flex",color: "#6D787E" }}  fontFamily={'Cera Pro'} fontSize="14px">
            <Icon fontSize="small"/> 15-minute read
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4}>
          <Grid item paddingTop="5%">
        <Buttons name={"Read Now"} onClick={undefined} classing={"readNow"} icon={undefined} end={undefined}></Buttons>    
          </Grid>

          <Grid item paddingTop="5%">
          <Link to={{ pathname: '/'}}>
            <Buttons name={"Finished Reading"} onClick={undefined} classing={"connect"} icon={undefined} end={undefined} ></Buttons>
          </Link>
          </Grid>

          <Grid item paddingTop="5%">
            <Button
              variant="text"
              endIcon={<ArrowForward></ArrowForward>}
              sx={{ textTransform: "none", color: "#6D787E" }}
              className={`${classes.buttonstyle} ${classes.sendToKindle}`}
            >
              Send to Kindle
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item md={4} paddingTop="6%" paddingLeft="10%">
        <img src={bookimg} alt="Entrepreneur Cover" />
      </Grid>
    </Grid>
  );
}