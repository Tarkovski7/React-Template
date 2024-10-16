import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardTextStyle"; // Stil dosyası

// Styled API ile CardText bileşenini oluşturuyoruz
const StyledCardText = styled("div")(({ theme, color }) => ({
  ...styles.cardText(theme),
  ...(color && styles[`${color}CardHeader`](theme)), // Dinamik renk uygulaması
}));

export default function CardText(props) {
  const { className, children, color, ...rest } = props;

  // Dinamik class oluşturma
  const cardTextClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenir
  });

  return (
    <StyledCardText color={color} className={cardTextClasses} {...rest}>
      {children}
    </StyledCardText>
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
  ]), // Seçilebilir renkler sınırlı
  children: PropTypes.node.isRequired, // children zorunlu
};
