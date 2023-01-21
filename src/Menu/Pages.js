import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

export default function Pages() {

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
        <Stack direction="row" spacing={3}>
            <div>
                <Button ref={anchorRef} id="composition-button" aria-controls={open ? 'composition-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleToggle}
                    className="text-white d-flex flex-column flex-wrap justify-content-center gap-2 ms-4" size="medium">             
                    <span><FolderOpenOutlinedIcon /></span>
                    <span>Pages </span>
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="right-end"
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
                            <Paper sx={{ width: 250 }} className="m-5 rounded-top opacity-100">
                                <header className='bg-primary container rounded-top text-white pt-2 pb-2 fw-bold' style={{ width: "250px",fontSize : 16 }}>NOTIFICATION CENTER </header>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    ><MenuItem onClick={handleClose} className="fw-normal" disabled>
                                            LOGIN SCREENS 
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal ms-4">
                                            Login
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal ms-4">
                                            Register
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal ms-4">
                                            Forgot Password
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal" disabled>
                                            OTHER SCREENS 
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal ms-4">
                                           Blank Page
                                        </MenuItem>
                                        <MenuItem onClick={handleClose} className="fw-normal ms-4">
                                            404 Page
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