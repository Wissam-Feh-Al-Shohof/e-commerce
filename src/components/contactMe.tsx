import Aux from './auxiliery';
import {Box} from '@mui/material' ;
export const ContactMe = (props:any) => (
    <Box  border={'1px solid currentcolor'} borderRadius={'50%'}
    sx={{ 
            width:30,
            height:30, 
            display:'flex',
            placeContent:'center',
            placeItems:'center',
            color:'black'
        }} 
    {...props}>
        {props.children}
    </Box>
)