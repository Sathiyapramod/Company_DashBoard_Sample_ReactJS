import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import TextField from '@mui/material/TextField';
import Profile from './Profile';
import Messages from './Messages';
import Button from '@mui/material/Button';

const Navbar = () => {
    const styling = {
        textDecoration: "none",
        color: "white",
    };
    return (
        <div className='bg-light shadow'>
            <navbar className='navbar nav d-flex justify-content-between'>
                <div className='d-flex flex-row gap-2 ms-2 align-items-center'>
                    <TextField id="outlined-basic" label="Search" variant="outlined" />
                    <Link to="/search" style={styling}><Button variant="outlined" className='fs-5' size="large">Search</Button></Link>
                </div>
                <div className='d-flex flex-row gap-3 align-items-center'>
                    <div>
                        <IconButton aria-label="delete" size="large">
                            <Badge color="error" badgeContent={4} max={3}>
                                <NotificationsActiveIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className='d-flex flex-row gap-2 align-items-center bg-light'>
                        <Messages />
                        <Profile />
                    </div>
                </div>
            </navbar>
        </div>
    );

}

export default Navbar