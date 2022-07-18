import { makeStyles } from "@mui/styles";
import theme from "../../../Themes/Themes";

const useStyles=makeStyles({

  root:{
    height: theme.spacing(4),
    background: theme.palette.backgroundcolor.light,
    borderBottomRightRadius:"8px",
    borderBottomLeftRadius:"8px",
  },

   semi:{
    height: "100%",
    background: "#E1ECFC",
    width: "40%",
    borderBottomLeftRadius:"8px",
    // borderBottomRightRadius:"5px",
  },

  full:{
    height: "100%",
    background: "#E1ECFC",
    width: "100%",
    borderBottomLeftRadius:"8px",
    borderBottomRightRadius:"8px",
  },

});

interface Props{
  type: string
}
function ProgressBar(props:Props) {
  let progressClass;
  const classes=useStyles();

  if(props.type === "full"){
    progressClass = classes.full;
  }
  else{
    progressClass = classes.semi;
  }
  return (
    <div className={classes.root} data-testid="Progress">
      <div className={progressClass}></div>
    </div>
  );
};

export default ProgressBar;