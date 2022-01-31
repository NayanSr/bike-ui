import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Product = ({ item }) => {
    const { img, name, description, price } = item;
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
                <img src={img} alt="" />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {name}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {description}
                    </Typography> <br />
                    <Typography variant="p" gutterBottom component="div">
                        Price : {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button style={{ marginLeft: '100px' }} size="small">Order Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Product;