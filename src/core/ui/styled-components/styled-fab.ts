import {Fab, styled} from "@mui/material";
import theme from "../theme";

export const StyledFab = styled(Fab)(() => ({
  display: "none",
  color: "white",
  position: "absolute",
  bottom: "25px",
  right: "25px",
  [theme.breakpoints.down('sm')]: {
    display: "flex"
  },
}))