import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Badge from '@mui/material/Badge';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Navbar = () => {
    let url = "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png";
    return (
        <div className='bg-light p-3 shadow'>
            <navbar className='navbar nav d-flex justify-content-between'>
                <div className='d-flex flex-row gap-2'>
                    <input type="search" className='form-control fs-5' placeholder='Search'></input>
                    <Link to="/search"><button className='btn btn-primary opacity-75 fs-5'>search</button></Link>
                </div>
                <div className='d-flex flex-row gap-3 align-items-center'>
                    <div>
                        <IconButton aria-label="delete" size="large">
                            <Badge color="error" badgeContent={4} max={3}>
                                <NotificationsActiveIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </div>
                    <div>
                        <IconButton aria-label="mail" size="large">
                            <Badge color="error" badgeContent={4} max={3}>
                                <MailOutlineIcon fontSize='large' />
                            </Badge>
                        </IconButton>
                    </div>
                    <div className='d-flex flex-row gap-2 align-items-center bg-light'>
                        <IconButton size="large" className='rounded-0'>
                            <div className='fs-5'>Douglas McGee</div>
                            <div className='img-thumbnail'><img src={url} width={"60px"} height={"60px"} alt={"pic"} /></div>
                        </IconButton>
                    </div>
                </div>
            </navbar>
        </div>
    );

}

export default Navbar