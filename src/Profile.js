import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import IconButton from '@mui/material/IconButton';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function Profile() {
    let url = "https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png";

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <Stack direction="row" spacing={2}>

            <div>
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <IconButton size="large" className='rounded-0'>
                        <div className='fs-5'>Douglas McGee</div>
                        <div className='img-thumbnail rounded-circle'><img src={url} width={"60px"} height={"60px"} alt={"pic"} /></div>
                    </IconButton>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper sx={{width:180}} >
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >                                        <MenuItem onClick={handleClose}>
                                            <div className='d-flex flex-row gap-2  ms-2'>
                                                <PermIdentityRoundedIcon /> Profile
                                            </div>
                                        </MenuItem>
                                        <MenuItem onClick={handleClose}><div className='d-flex flex-row gap-2 ms-2'>
                                            <SettingsOutlinedIcon /> Settings
                                        </div></MenuItem>
                                        <MenuItem onClick={handleClose}><div className='d-flex flex-row gap-2 ms-2'>
                                            <FormatListBulletedOutlinedIcon /> Activity Log
                                        </div></MenuItem>
                                        <hr />
                                        <MenuItem>
                                            <div className='d-flex flex-row gap-2 ms-2'>
                                                <ExitToAppIcon /> Log Out
                                            </div>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}