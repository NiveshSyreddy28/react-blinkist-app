import { useState } from "react";
import {customStyles}  from "../../../Themes/index";
// import Logo from "../../../Components/Atoms/Logo/Logo";
import Logo from "../../atoms/Logo/Logo";

import {Box, Button, Grid, Typography } from "@mui/material";
// import Avatar from "../../Atoms/Avatars/Avatars";
import Avatars from "../../atoms/Avatar/Avatars";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import ExploreDropDown from "../ExploreDropDown";
import MenuExtendedNav from "../MenuExtendedNav";
import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Buttons from "../../atoms/Button/Button";
import { padding } from "@mui/system";

interface Props {
  avatarIcon: boolean;
  chars?:string;
}

const Header= () =>{

  const {user} = useAuth0();

  const classes=customStyles();

  const { logout, isAuthenticated } = useAuth0();

  const [clicked, handleClicked] = useState(false);

  const [ logouttry, setLogouttry ] = useState(false);

  const logoutbackdrop = () => {
    setLogouttry(!logouttry);
  };
  let ava;
    ava = (
      <Box
        style={{ fontFamily: "Cera Pro" ,display: "flex", alignItems: "center", marginRight: "170px" }}
      >
        <Buttons 
          name=" "
          classing="exploreNoH"
          end={<KeyboardArrowDownIcon />}
          onClick={logoutbackdrop}
          icon={<Avatars chars={user?.name?.charAt(0)} />}
        />
      </Box>
    );
  // } else {
  //   ava = (
  //     <Box style={{ fontFamily: "Cera Pro" ,display: "flex",alignItems: "center", marginRight: "60px" }}>
  //       <Buttons
  //         name="Account"
  //         classing="exploreNoH"
  //         end={<KeyboardArrowDownIcon />}
  //         onClick={logoutbackdrop}
  //         icon={undefined}
  //       />
  //     </Box>
  //   );
  // }

  let logutAction;

  if (isAuthenticated) {
    logutAction = (
      <Box sx={{whiteSpace:"norow"}}
       justifyContent="left">
      <Buttons
        name={"Log Out"}
        onClick={() => logout()}
        classing={"connect"}
        icon={undefined}
        end={undefined}
      />
      </Box>
    );
  }
  
  const ExtendedNav = () => {
    var body = document.body,
    html = document.documentElement;

    var pageHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
    return (
      <Grid item sx={{position:"absolute", height:pageHeight, top: "22%", width:"100%",background: "#9DA3A673"}} className={clicked ? classes.visible : classes.hidden} >
        <MenuExtendedNav />
      </Grid>
    )
  }
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        sx={{ width: "1500px", height: "86px", marginLeft: "15%" }}
        columnSpacing={10}
        alignItems="center"
      
      >
        <Grid item>
          <Logo/>
        </Grid>
        <Grid item>
          <SearchIcon fontSize="small"/>
        </Grid>
        <Grid item>
        <Button sx={{backgroundColor:"white", padding:"0"}}>
        <Typography  sx={{color:"#03314B"}} className={classes.headerLink} onClick={() => {
          handleClicked(!clicked);
        }}>
        Explore  {clicked ? (
        <KeyboardArrowUpIcon />
        ) : (
          <KeyboardArrowDownIcon/>
        )}
        </Typography>
        </Button>
        </Grid>
        <Grid item>
        <Link to={{ pathname: '/'}}>
          <Typography  fontFamily="Cera Pro" fontWeight="500" fontSize="16px">
            My Library
           
          </Typography>
          </Link>
        </Grid>
        <Grid item direction="row" sx={{marginLeft:"12%"}}>
            {ava}
        </Grid>
      </Grid>
      <ExtendedNav></ExtendedNav>

    
    {logouttry ? (
      <Box display={"flex"} marginLeft="68%" width="95%" >
      {logutAction}
      </Box>
          ) : null}
      </Grid>
  );
}

export default Header;

