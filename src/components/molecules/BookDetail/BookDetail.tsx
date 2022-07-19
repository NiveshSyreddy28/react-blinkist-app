import React from "react";
import { customStyles } from "../../../Themes/index";
import { ArrowForward } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Icon from "@mui/icons-material/AccessTime";
import Buttons from "../../atoms/Button/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";

type Book = {
  id: number;
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  readTime: string;
  readersCount: string;
  status: string;
  category: string;
};

interface Props {
  book: Book;
}

export default function BookDetail(props: Props) {
  const classes = customStyles();

  async function addToFinished() {
    await axios
      .get(`http://localhost:3000/dataBase/${props.book.id}`)
      .then(async (response) => {
        response.data["status"] = "finished";
        console.log(response.data);

        await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`);
        await axios.post(`http://localhost:3000/dataBase/`, response.data);
        document.location.reload();
      });
  }

  async function addToCurrent() {
    await axios
      .get(`http://localhost:3000/dataBase/${props.book.id}`)
      .then(async (response) => {
        response.data["status"] = "reading";
        console.log(response.data);

        await axios.delete(`http://localhost:3000/dataBase/${props.book.id}`);
        await axios.post(`http://localhost:3000/dataBase/`, response.data);
        document.location.reload();
      });
  }

  return (
    <Grid container>
      <Grid item md={8}>
        <Grid container direction="column" rowSpacing={3}>
          <Grid item>
            <Typography
              variant="body2"
              fontFamily={"Cera Pro"}
              fontWeight="bold"
              fontSize="16px"
              color="#03314B"
              component="div"
              children="Get the key ideas from"
              className={classes.bookInfo}
            />
          </Grid>
          <Grid item>
            <Typography
              variant="h5"
              fontFamily={"Cera Pro"}
              fontSize="36px"
              fontWeight={"Bold"}
              className={classes.bookInfo}
            >
              {props.book.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle2"
              fontFamily={"Cera Pro"}
              fontSize="20px"
              fontWeight={"Bold"}
              className={classes.bookInfo}
            >
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
              fontFamily={"Cera Pro"}
              fontWeight={"bold"}
            />
          </Grid>
          <Grid item>
            <Typography
              sx={{ display: "flex", color: "#6D787E" }}
              fontFamily={"Cera Pro"}
              fontSize="14px"
            >
              <Icon fontSize="small" /> {props.book.readTime}-minute read
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ marginTop: "40px" }} columnSpacing={4}>
          <Grid item paddingTop="5%">
            <Link style={{ textDecoration: "none" }} to={props.book.status === "finished" ? "/" : ""}>
              <Buttons
                name={"Read Now"}
                onClick={props.book.status === "finished" ? addToCurrent : undefined}
                classing={"readNow"}
                icon={undefined}
                end={undefined}
              ></Buttons>
            </Link>
          </Grid>

          <Grid item paddingTop="5%">
            <Link style={{ textDecoration: "none" }} to={props.book.status === "reading" ? "/" : ""}>
              <Buttons
                name={"Finished Reading"}
                onClick={props.book.status === "reading" ? addToFinished : undefined}
                classing={"connect"}
                icon={undefined}
                end={undefined}
              ></Buttons>
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
        <img
          src={require(`../../../stories/assets/coverImages/${props.book.imageLink}`)}
          alt="Entrepreneur Cover"
        />
      </Grid>
    </Grid>
  );
}
