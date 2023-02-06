import React from 'react';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Profile from './Profile';
import Messages from './Messages';
import Button from '@mui/material/Button';
import Notifications from './Notifications';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavbarStyled = () => {
    const styling = {
        textDecoration: "none",
        color: "white",
    };
    const [flag,setFlag] = useState("Search");
    const navigate = useNavigate();
    return (
        <div className='bg-light shadow'>
            <div className='navbar nav d-flex justify-content-between'>
                <div className='d-flex flex-row gap-2 ms-2 align-items-center'>
                    <TextField id="outlined-basic" label="Search" variant="outlined" onChange={(event)=>setFlag(event.target.value)}/>
                    <Link to={"/search/" + flag} style={styling}><Button variant="outlined" className='fs-5' size="large" onClick={()=>navigate("/search/" + flag)}>Search</Button></Link>
                </div>
                <div className='d-flex flex-row gap-3 align-items-center'>
                    <div className='d-flex flex-row gap-2 align-items-center bg-light'>
                        <Notifications />
                        <Messages />
                        <Profile />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default NavbarStyled