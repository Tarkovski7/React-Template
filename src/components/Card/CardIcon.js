import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@mui/styles"; // MUI v5 uyumlu
import styles from "../../assets/jss/material-dashboard/components/cardIconStyle";

const useStyles = makeStyles(styles);

export default function CardIcon(props) {
  const classes = useStyles();
  const { className, children, color, ...rest } = props;

  // Dinamik class ataması
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined,
  });

  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]), // Seçilebilir renkler sınırlı tutuldu
  children: PropTypes.node.isRequired, // children zorunlu hale getirildi
};
