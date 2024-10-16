import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardIconStyle"; // Stil dosyası

// Styled API ile CardIcon bileşenini oluşturuyoruz
const StyledCardIcon = styled("div")(({ theme, color }) => ({
  ...styles.cardIcon(theme),
  ...(color && styles[`${color}CardHeader`](theme)), // Dinamik renk uygulaması
}));

export default function CardIcon(props) {
  const { className, children, color, ...rest } = props;

  // Dinamik class oluşturma
  const cardIconClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenir
  });

  return (
    <StyledCardIcon color={color} className={cardIconClasses} {...rest}>
      {children}
    </StyledCardIcon>
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
  ]), // Seçilebilir renkler sınırlı
  children: PropTypes.node.isRequired, // children zorunlu
};
