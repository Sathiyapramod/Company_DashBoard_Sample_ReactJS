import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

export default function PagesMenu(){
    return (
        <div>
        <Accordion>
           <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header" className='bg-dark gap-2 bg-primary text-white d-flex flex-row align-items-center fs-5'>
               <span className='me-2'><FolderOpenOutlinedIcon fontSize="small"/></span>
               <span>Pages</span>
           </AccordionSummary>
           <AccordionDetails sx={{width : 280}}> 
                       <MenuItem disabled className='text-body'> LOGIN SCREENS </MenuItem>
                       <MenuItem>Login</MenuItem>
                       <MenuItem>Register</MenuItem>
                       <MenuItem>Forgot Password</MenuItem>
                       <MenuItem disabled className='text-body'> OTHER PAGES </MenuItem>
                       <MenuItem>404 Page</MenuItem>
                       <MenuItem>Blank Page</MenuItem>
           </AccordionDetails>
       </Accordion>
   </div>
    );
}