import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";

export default function utilitiesMenu() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-dark gap-2 bg-primary text-white d-flex flex-row align-items-center"
        >
          <span className="me-2">
            <BuildOutlinedIcon fontSize="small" />
          </span>
          <span>Utilities</span>
        </AccordionSummary>
        <AccordionDetails sx={{ width: 280 }}>
          <MenuItem disabled className="text-dark">
            CUSTOM UTILITIES
          </MenuItem>
          <hr />
          {["Colors", "Borders", "Animations", "Others"].map(
            (element, index) => {
              return <MenuItem key={index}>{element}</MenuItem>;
            }
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
