import React, { useState } from "react";
import { Container, Grid, TextField } from "@mui/material";
import Aux from "../components/auxiliery";
import { P } from "../components/paragraph";
import { Sort } from "../components/sort";
import { SelectField } from "../components/selectField";
export const ProductsContainer = (props: any) => {
  
  return (
    <Aux>
      <P variant="h3" my={"3rem"}>
        Products
      </P>
      <Container sx={{display:"flex", gap:"20px"}}>
      <TextField 
        id="search"  
        label="Search" 
        variant="standard" 
        type="search" 
        onKeyDown={props.onSearch}  
        sx={{width:{md:"45%",sm:"100%"}}} />
        <SelectField          
        onFilter={props.onFilter}  
        sx={{width:{md:"45%",sm:"100%"}}} />
      <Sort onSortChange={props.onSort} />

      </Container>
        
      
      <Grid container spacing={2}>
        {props.children}
      </Grid>
    </Aux>
  );
};
