import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';

export default function utilitiesMenu(){
    return (
        <div>
             <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className='gap-2 bg-primary text-white d-flex flex-row align-items-center'>
                    <span className='me-2'><BuildOutlinedIcon fontSize="small"/></span>
                    <span>Utilities</span>
                </AccordionSummary>
                <AccordionDetails sx={{width : 280}}> 
                            <MenuItem disabled className='text-body-tertiary'>CUSTOM UTILITIES</MenuItem>
                            <hr />
                            <MenuItem>Colors</MenuItem>
                            <MenuItem>Borders</MenuItem>
                            <MenuItem>Animations</MenuItem>
                            <MenuItem>Others</MenuItem>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}