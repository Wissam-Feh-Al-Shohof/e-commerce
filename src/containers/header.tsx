import Aux from "../components/auxiliery";
import React from "react";
import { AppBar } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";

import { ReactComponent as IconPhone } from "./../assets/icons/phone.svg";
import { P } from '../components/paragraph';
import { ContactMe } from '../components/contactMe';

const header = (props: any) => (
  <Aux >
    <AppBar position="static" sx={{ background: "#FFFFFF" }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            background: "#FFFFFF",
            display: "flex",
            justifyContent:{md: "space-around",sm:"space-evenly",xs: "center"},
          }}
        >
          <P sx={{display:{xs:"none",sm:"flex",md:"flex"}}}>
            <IconPhone width="1rem" /> +022 319 821 967
          </P>

          <P>LOGO</P>
          <div>

          <Container sx={{display:{xs:"none",sm:"none",md:'flex'},gap:'4px',justifyContent:"space-between" }}>
          <ContactMe>Fb</ContactMe>
          <ContactMe>Tw</ContactMe>
          <ContactMe>Ig</ContactMe>
          <ContactMe>Yt</ContactMe>
          </Container>
          </div>

        </Toolbar>
      </Container>
    </AppBar>
  </Aux>
);

export default header;
