import React from "react";

import { customStyles } from "../../../Themes/index";
import { Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Logo from "../../../stories/assets/Blinkist.png";
import { Typography } from "@mui/material";


export default function Footer(){
const classes=customStyles();
  return( 
            <Grid item container sx={{width: "1440px",height: "370px",backgroundColor:"#F1F6F4;"}} 
            >
                <Grid item>
            <Grid item container direction="row" columnSpacing={4}>
                <Grid item>
                <Grid item container direction="column" sx={{marginLeft:"244px",marginTop:"38px"}} rowSpacing={3}>
                <Grid item>
                    <img src={Logo} alt="logo"/>
                </Grid>
                <Grid item >
                    <Typography variant="h5" className={classes.footertitle} fontFamily="Cera Pro" fontWeight="bold">
                    Big ideas in small packages<br></br>
                    Start learning now
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item>
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}} fontFamily="Cera Pro" fontWeight="bold">
                        Editorial
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} className={classes.footerNavlinks} fontFamily="Cera Pro" >
                   Book list
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                  What is Nonfiction?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                  What to read next?
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                 Benefits of reading
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}} fontFamily="Cera Pro" fontWeight="bold">
                        Useful links
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        Pricing
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        Blinkist business
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        Gift cards
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                         Blinkist magaine
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        Contact & help
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
                <Grid item >
                <Grid item container direction="column"  rowSpacing={3}>
                <Grid item>
                    <Typography sx={{color:"#03314B",marginTop:"38px"}} fontFamily="Cera Pro" fontWeight="bold">
                        Company
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        About
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        Careers
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                        partners
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography sx={{color:"#6D787E"}} fontFamily="Cera Pro">
                         Code of Conduct
                    </Typography>
                </Grid>
                </Grid>
                </Grid>
            </Grid>
            </Grid>
            <Grid item >
            <Typography className={classes.footertag} sx={{marginLeft:"244px"}} fontFamily="Cera Pro">
                © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
            </Grid>
            </Grid>

  );
}