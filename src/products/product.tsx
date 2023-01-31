import React from "react";
import { Card, CardHeader, Grid, CardMedia, CardActions, CardContent } from "@mui/material";
import { P } from '../components/paragraph';
import { ProductType } from "./pruductAPI";



export const Product = ({info,id}:{info:Partial<ProductType>,id:string}) => (
  <Grid item xs={12} sm={6} md={4} xl={3} position={"relative"}>
    <Card variant="elevation" sx={{height:"100%",maxHeight:"490px"}}>
    <CardMedia
        component="img"
        sx={{objectFit:"contain"}}
        height={"55%"}
        image={info.image}
        alt={info.title}
      />
      <CardContent>

      <P variant="h6" color={"#F3692E"} textAlign="center"> {info.category}</P>
      <CardHeader title={info.title} sx={{maxHeight:"65px",mt:"1px",maxBlockSize:"5rem"}} ></CardHeader>
      </CardContent>
      <P 
      variant="h5" 
      color={"#F3692E"} 
      position="absolute" 
      right={"50%"} left={"50%"} 
      bottom={"10px"} >
        {info.price}$</P>      
    </Card>
  </Grid>
);
