import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@mui/styles"; // MUI v5 uyumlu
import styles from "../../assets/jss/material-dashboard/components/cardTextStyle";

const useStyles = makeStyles(styles);

export default function CardText(props) {
  const classes = useStyles();
  const { className, children, color, ...rest } = props;

  // Dinamik class ataması
  const cardTextClasses = classNames({
    [classes.cardText]: true,
    [classes[color + "CardHeader"]]: color,
    [className]: className !== undefined,
  });

  return (
    <div className={cardTextClasses} {...rest}>
      {children}
    </div>
  );
}

CardText.propTypes = {
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
