import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardHeaderStyle"; // Stil dosyası

// Styled API ile CardHeader bileşenini oluşturuyoruz
const StyledCardHeader = styled("div")(({ theme, color, plain, image, contact, signup, stats, icon, text }) => ({
  ...styles.cardHeader(theme),
  ...(color && styles[`${color}CardHeader`](theme)),
  ...(plain && styles.cardHeaderPlain(theme)),
  ...(image && styles.cardHeaderImage(theme)),
  ...(contact && styles.cardHeaderContact(theme)),
  ...(signup && styles.cardHeaderSignup(theme)),
  ...(stats && styles.cardHeaderStats(theme)),
  ...(icon && styles.cardHeaderIcon(theme)),
  ...(text && styles.cardHeaderText(theme)),
}));

export default function CardHeader(props) {
  const {
    className,
    children,
    color,
    plain,
    image,
    contact,
    signup,
    stats,
    icon,
    text,
    ...rest
  } = props;

  // Dinamik class oluşturma
  const cardHeaderClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenecek
  });

  return (
    <StyledCardHeader
      color={color}
      plain={plain}
      image={image}
      contact={contact}
      signup={signup}
      stats={stats}
      icon={icon}
      text={text}
      className={cardHeaderClasses}
      {...rest}
    >
      {children}
    </StyledCardHeader>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "success",
    "danger",
    "info",
    "primary",
    "rose",
  ]),
  plain: PropTypes.bool,
  image: PropTypes.bool,
  contact: PropTypes.bool,
  signup: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  text: PropTypes.bool,
  children: PropTypes.node.isRequired, // Children zorunlu
};
