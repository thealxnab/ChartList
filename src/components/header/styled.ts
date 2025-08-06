import {styled} from "@mui/material";
import {NavLink} from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  
  &:not(:last-child) {
    margin-right: 25px
  }
  &:hover {
    text-decoration: underline
  }
`;