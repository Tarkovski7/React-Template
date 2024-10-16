import React from "react";
import PropTypes from "prop-types";

// @mui/material components
import { styled } from "@mui/material/styles"; // MUI v5 için styled kullanımı
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

// @mui/icons-material
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../assets/jss/material-dashboard/components/accordionStyle"; // Mevcut stiller

// MUI v5 styled API ile stilleri oluşturuyoruz
const StyledAccordion = styled(MuiAccordion)(({ theme }) => ({
  ...styles.accordion(theme),
}));

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  ...styles.accordionSummary(theme),
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  ...styles.accordionDetails(theme),
}));

export default function Accordion(props) {
  const [active, setActive] = React.useState(props.active);

  const handleChange = (panel) => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };

  const { collapses } = props;

  return (
    <div>
      {collapses.map((prop, key) => (
        <StyledAccordion
          expanded={active === key}
          onChange={handleChange(key)}
          key={key}
        >
          <StyledAccordionSummary
            expandIcon={<ExpandMoreIcon />} // Correct icon for expand
          >
            <Typography>{prop.title}</Typography> {/* Typography ile sarmaladım */}
          </StyledAccordionSummary>
          <StyledAccordionDetails>
            {prop.content}
          </StyledAccordionDetails>
        </StyledAccordion>
      ))}
    </div>
  );
}

Accordion.defaultProps = {
  active: -1,
};

Accordion.propTypes = {
  active: PropTypes.number,
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
};
