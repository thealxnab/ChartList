import React, {FC} from 'react';
import Header from "../components/header/header";
import {Container, CssBaseline} from "@mui/material";
import {Outlet} from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <CssBaseline/>
      <Header/>
      <Container sx={{pt: "25px"}}>
        <Outlet/>
      </Container>
    </>
  );
};

export default Layout;