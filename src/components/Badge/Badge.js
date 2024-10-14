import React from "react";
import PropTypes from "prop-types";

// @mui/styles components
import { makeStyles } from "@mui/styles"; // MUI v5'te bu hâlâ geçerli

import styles from "../../assets/jss/material-dashboard/components/badgeStyle";

const useStyles = makeStyles(styles);

export default function Badge(props) {
  const { color, children } = props;
  const classes = useStyles();

  // Badge stilini ve renk sınıfını dinamik olarak oluşturuyoruz
  return (
    <span className={`${classes.badge} ${classes[color]}`}>{children}</span>
  );
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]).isRequired, // Color zorunlu bir prop olabilir
  children: PropTypes.node.isRequired, // Children da zorunlu olabilir
};
