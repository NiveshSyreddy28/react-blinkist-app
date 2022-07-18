import React from "react";
// import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Icons from "../../atoms/Icons/Icons";
import ExtendedNav from "../../molecules/ExtendedNav/ExtendedNav";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import science from "../../../stories/assets/science.svg";
import economics from "../../../stories/assets/economics.svg";
import corporate from "../../../stories/assets/corporate culture.svg";
import psychology from "../../../stories/assets/psychology.svg";
import nature from "../../../stories/assets/nature.svg";
import politics from "../../../stories/assets/politics.svg";
import health from "../../../stories/assets/health.svg";
import history from "../../../stories/assets/history.svg";
import motivation from "../../../stories/assets/motivation and inspiration.svg";
import productivity from "../../../stories/assets/productivity.svg";
import career from "../../../stories/assets/career and success.svg";
import marketing from "../../../stories/assets/marketing.svg";
import personal from "../../../stories/assets/personal.svg";
import communication from "../../../stories/assets/communication skills.svg";
import money from "../../../stories/assets/science.svg";
import relationship from "../../../stories/assets/sex and relationship.svg";
import education from "../../../stories/assets/education.svg";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Container, CssBaseline, Typography } from "@mui/material";
import Button from "../../atoms/Button/Button";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Link } from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";

const useStyles = makeStyles({
  grid: {
    flexGrow: 1,
    height: "398px",
    width: "100%",
    left: "0px",
    top: "0px",
    borderRadius: "0px",
    background: "#F1F6F4",
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    display: "flex",
    height: "20px",
    width: "128px",
    left: "32px",
    top: "2px",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "Light",
    fontSize: "16px",
    lineHeight: "20px",
    letterSpacing: "0em",
    textAlign: "left",
    whiteSpace: "nowrap",
    marginTop: "2%",
    paddingLeft: "9px",
    justifyContent: "left",
    alignItems: "center",
    color: "black !important",
    textDecoration: "none !important",
  },
  tabs: {
    paddingLeft: "9px !important",
    marginTop: "5%",
    marginLeft: "15%",
    textDecoration: "none !important",
    whiteSpace: "nowrap",
    display: "grid",
    justifyContent: "left",
    alignItems: "center",
    fontFamily: "Cera Pro",
    fontStyle: "normal",
    fontWeight: "Medium",
    fontSize: "16px",
    color: "#6D787E",
  },
  link: {
    textDecoration: "none !important",
    textUnderlineOffset: "5px",
    "&:hover": {
      textDecoration: "underline #2CE080  2px !important",
    },
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap",
  },
});

interface ExploreDropDownProps {
  onExplore: (arg: boolean) => void;
  // bookObject: Array<Book>;
}
function MenuExtendedNav() {
  const [icon, setIcon] = React.useState(false);

  const handleIcon = () => {
    setIcon(!icon);
  };
  const classes = useStyles();
  return (
    <div>
      <Box maxWidth={"100%"}>
        <div>
          <CssBaseline />
          {/* <Box>
            <div className={classes.link}>
              <Box
                className={classes.link}
                color={"#03314B"}
                onClick={() => {
                  handleIcon();
                  props.onExplore(icon);
                }}
              >
                <Typography variant="body1">Explore</Typography>
              </Box>

              {icon ? (
                <ExpandLessIcon
                  color={"secondary"}
                  onClick={() => {
                    handleIcon();
                    props.onExplore(icon);
                  }}
                />
              ) : (
                <ExpandMoreIcon
                  color={"secondary"}
                  onClick={() => {
                    handleIcon();
                    props.onExplore(icon);
                  }}
                />
              )}
            </div>
          </Box> */}

          <Box className={classes.grid}>
            <Container maxWidth="md">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Box
                    sx={{ color: "#116BE9 !important", fontWeight: "Bold" }}
                    className={classes.tabs}
                  >
                    Explore by Category
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box sx={{ fontWeight: "Bold" }} className={classes.tabs}>
                    See recently added titles
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box sx={{ fontWeight: "Bold" }} className={classes.tabs}>
                    See popular titles
                  </Box>
                </Grid>
              </Grid>
              <hr color="#042330" />
            </Container>

            <Container maxWidth="md">
              <Grid container spacing={5}>
                <Grid item xs={12} sm={4}>
                  <Box className={classes.tabs}>
                    <Link to={{ pathname: '/explore'}}>
                    <ExtendedNav
                      name="Entrepreneurship"
                      icon={<NotificationsNoneIcon fontSize="small" />}
                      type={"active"}
                    ></ExtendedNav>
                    </Link>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Science"
                      icon={<Icons src={science}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Economics"
                      icon={<Icons src={economics}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Coprporate Culture"
                      icon={<Icons src={corporate}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Psychology"
                      icon={<Icons src={psychology}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Nature and Environment"
                      icon={<Icons src={nature}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Politics"
                      icon={<Icons src={politics}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Health & Nutrition"
                      icon={<Icons src={health}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="History"
                      icon={<Icons src={history}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Motivation & Inspiration"
                      icon={<Icons src={motivation}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Productivity"
                      icon={<Icons src={productivity}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Career & Success"
                      icon={<Icons src={career}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>
                </Grid>

                <Grid item xs={12} sm={4}>
                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Marketing & Sales"
                      icon={<Icons src={marketing}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="personal Development"
                      icon={<Icons src={personal}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Communication Skills"
                      icon={<Icons src={communication}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Money & Investment"
                      icon={<Icons src={money}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Sex & Relationship"
                      icon={<Icons src={relationship}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>

                  <Box className={classes.tabs}>
                    <ExtendedNav
                      name="Education"
                      icon={<Icons src={education}></Icons>}
                      type={"mock"}
                    ></ExtendedNav>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default MenuExtendedNav;
