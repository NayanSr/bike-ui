import { Grid, Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Item = ({ item }) => {
    const { img, name, description, price } = item;
    return (

        <Grid item xs={4} sm={4} md={4} style={{ textAlign: 'justify', padding: '8px', border: '1px solid green' }}>
            <img style={{ marginLeft: '20%' }} src={img} alt="" />
            <h2>Name : {name}</h2>
            <p> &nbsp; {description}</p>
            <small>Price : {price}</small> <br /> <br />
            <NavLink to='/orderplacement' ><Button style={{ backgroundColor: '#2F4F4F' }} variant="contained">Order Now</Button></NavLink>

        </Grid>


    );
};

export default Item;