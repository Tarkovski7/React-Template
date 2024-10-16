import React from "react";
import PropTypes from "prop-types";

// MUI v5 styled API kullanımı
import { styled } from "@mui/material/styles";
import styles from "../../assets/jss/material-dashboard/components/badgeStyle"; // Mevcut stiller

// MUI v5 ile styled API kullanarak Badge bileşenini oluşturuyoruz
const StyledBadge = styled("span")(({ theme, color }) => ({
  ...styles.badge(theme),
  ...(color && styles[color]), // Eğer color varsa ilgili stili uygula
}));

export default function Badge(props) {
  const { color, children } = props;

  // Badge stilini ve renk sınıfını dinamik olarak oluşturuyoruz
  return <StyledBadge color={color}>{children}</StyledBadge>;
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
