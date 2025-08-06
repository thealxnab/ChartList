import React, {FC} from 'react';
import {AppBar, Container, Toolbar} from "@mui/material";
import { StyledNavLink } from './styled';

const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <Container>
          <StyledNavLink style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })} to="/view-mode">View mode</StyledNavLink>
          <StyledNavLink style={({ isActive }) => ({ textDecoration: isActive ? "underline" : "none" })} to="/settings">Settings</StyledNavLink>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;