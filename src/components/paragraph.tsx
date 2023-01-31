import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
export const P :(props:TypographyProps) => React.ReactElement<typeof Typography> = (props:any) => (
<Typography 
    fontFamily={"Merriweather"} 
    color="black" 
    sx={{display:'flex',placeContent:'center'}} 
    {...props}>
{props.children}</Typography>)