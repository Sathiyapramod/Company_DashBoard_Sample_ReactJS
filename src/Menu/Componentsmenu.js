import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LinkStyling } from "./Data/General";

export default function Componentsmenu() {
  return (
    <div className="bg-dark">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-dark gap-2 bg-primary text-white d-flex flag flex-row align-items-center"
        >
          <span className="me-2">
            <SettingsOutlinedIcon fontSize="small" />
          </span>
          <span>Components</span>
        </AccordionSummary>
        <AccordionDetails sx={{ width: 280 }}>
          <MenuItem disabled className="text-dark">
            CUSTOM COMPONENTS
          </MenuItem>
          <MenuItem><Link to="/buttons" style={LinkStyling}>Buttons</Link></MenuItem>
          <MenuItem>Cards</MenuItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
