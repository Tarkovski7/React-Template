import React from "react";
import PropTypes from "prop-types";

// @mui/material components
import { makeStyles } from "@mui/styles";
import { Accordion as MuiAccordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

// @mui/icons-material
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "../../assets/jss/material-dashboard/components/accordionStyle";

const useStyles = makeStyles(styles);

export default function Accordion(props) {
  const [active, setActive] = React.useState(props.active);

  const handleChange = (panel) => (event, expanded) => {
    setActive(expanded ? panel : -1);
  };

  const classes = useStyles();
  const { collapses } = props;

  return (
    <div className={classes.root}>
      {collapses.map((prop, key) => (
        <MuiAccordion
          expanded={active === key}
          onChange={handleChange(key)}
          key={key}
          classes={{
            root: classes.expansionPanel,
            expanded: classes.expansionPanelExpanded,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />} // Correct icon for expand
            classes={{
              root: classes.expansionPanelSummary,
              expanded: classes.expansionPanelSummaryExpaned,
              content: classes.expansionPanelSummaryContent,
              expandIcon: classes.expansionPanelSummaryExpandIcon,
            }}
          >
            <Typography className={classes.title}>{prop.title}</Typography> {/* Typography ile sarmaladım */}
          </AccordionSummary>
          <AccordionDetails className={classes.expansionPanelDetails}>
            {prop.content}
          </AccordionDetails>
        </MuiAccordion>
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
