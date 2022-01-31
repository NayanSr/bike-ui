import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleOnSubmit = e => {
        const user = { email };

        fetch('https://fast-hollows-46520.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }

            })
        e.preventDefault();

    }

    return (
        <div>
            <h3>Add Admin</h3>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    sx={{ width: '30%' }}
                    type="email"
                    label="Email"
                    onBlur={handleOnBlur}
                    variant="standard" /> &nbsp;&nbsp;&nbsp;
                <Button sx={{ mt: 2 }} type='submit' variant='contained'>Make Admin</Button>
            </form>
            {success && <Alert severity='success'>Created a new admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;