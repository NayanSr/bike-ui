import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

import Item from '../Item/Item';
import { Container } from '@mui/material';


const items = [
    {
        id: 1,
        img: 'https://i.ibb.co/dD8Drsw/S-1.jpg',
        name: ' AAAAAA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '10000 '
    },
    {
        id: 2,
        img: 'https://i.ibb.co/593dkth/S-2.jpg ',
        name: ' BBBBBBBB',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '20000 '
    },
    {
        id: 3,
        img: 'https://i.ibb.co/dD8Drsw/S-1.jpg',
        name: ' AAAAAA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '30000 '
    },
    {
        id: 4,
        img: 'https://i.ibb.co/593dkth/S-2.jpg ',
        name: ' BBBBBBBB',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '40000 '
    },
    {
        id: 5,
        img: 'https://i.ibb.co/dD8Drsw/S-1.jpg',
        name: ' AAAAAA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '50000 '
    },
    {
        id: 6,
        img: 'https://i.ibb.co/593dkth/S-2.jpg ',
        name: ' BBBBBBBB',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '60000 '
    },
    {
        id: 7,
        img: 'https://i.ibb.co/dD8Drsw/S-1.jpg',
        name: ' AAAAAA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '70000 '
    },
    {
        id: 8,
        img: 'https://i.ibb.co/593dkth/S-2.jpg ',
        name: ' BBBBBBBB',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '80000 '
    },
    {
        id: 9,
        img: 'https://i.ibb.co/dD8Drsw/S-1.jpg',
        name: ' AAAAAA',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '90000 '
    },
    {
        id: 10,
        img: 'https://i.ibb.co/593dkth/S-2.jpg ',
        name: ' BBBBBBBB',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.',
        price: '100000 '
    }
]

const Items = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => setBikes(data));
    }, [])

    return (
        <Container sx={{ mt: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                {
                    bikes.slice(0, 6).map(item => <Item
                        key={item.id}
                        item={item}
                    ></Item>)
                }
            </Grid>



        </Container>
    );
};

export default Items;


/*
[{"id":1,"img":"https://i.ibb.co/dD8Drsw/S-1.jpg","name":" AAAAAA","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"10000 "},{"id":2,"img":"https://i.ibb.co/593dkth/S-2.jpg ","name":" BBBBBBBB","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"20000 "},{"id":3,"img":"https://i.ibb.co/dD8Drsw/S-1.jpg","name":" AAAAAA","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"30000 "},{"id":4,"img":"https://i.ibb.co/593dkth/S-2.jpg ","name":" BBBBBBBB","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"40000 "},{"id":5,"img":"https://i.ibb.co/dD8Drsw/S-1.jpg","name":" AAAAAA","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"50000 "},{"id":6,"img":"https://i.ibb.co/593dkth/S-2.jpg ","name":" BBBBBBBB","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"60000 "},{"id":7,"img":"https://i.ibb.co/dD8Drsw/S-1.jpg","name":" AAAAAA","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"70000 "},{"id":8,"img":"https://i.ibb.co/593dkth/S-2.jpg ","name":" BBBBBBBB","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"80000 "},{"id":9,"img":"https://i.ibb.co/dD8Drsw/S-1.jpg","name":" AAAAAA","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"90000 "},{"id":10,"img":"https://i.ibb.co/593dkth/S-2.jpg ","name":" BBBBBBBB","description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis temporibus unde numquam voluptatibus impedit aliquam perferendis ipsam quos esse neque.","price":"100000 "}]
*/