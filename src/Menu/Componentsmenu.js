import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Componentsmenu() {
    return (
        <div>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className='gap-2 bg-primary text-white d-flex flag flex-row align-items-center'>
                    <span className='me-2'><SettingsOutlinedIcon fontSize="small"/></span>
                    <span>Components</span>
                </AccordionSummary>
                <AccordionDetails sx={{width : 280}}> 
                            <MenuItem disabled className='text-body-tertiary'>CUSTOM COMPONENTS</MenuItem>
                            <MenuItem>BUTTONS</MenuItem>
                            <MenuItem>CARDS</MenuItem>
                </AccordionDetails>
            </Accordion>
        </div>

    );
}