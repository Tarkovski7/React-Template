import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classNames yerine clsx kullanımı
import { styled } from "@mui/material/styles"; // MUI v5 ile uyumlu
import Button from "@mui/material/Button"; // MUI v5 ile uyumlu

import styles from "../../assets/jss/material-dashboard/components/buttonStyle";

// Stillerin MUI v5 ile uyumlu hale getirilmesi
const StyledButton = styled(Button)(({ theme, color, size, round, fullWidth, simple, block, link, justIcon }) => ({
  ...styles.button(theme), // Mevcut stilleri al
  ...(size && styles[size]),
  ...(color && styles[color]),
  ...(round && styles.round),
  ...(fullWidth && styles.fullWidth),
  ...(simple && styles.simple),
  ...(block && styles.block),
  ...(link && styles.link),
  ...(justIcon && styles.justIcon),
}));

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;

  // clsx kullanarak className yönetimi
  const btnClasses = clsx({
    [className]: className !== undefined,
  });

  return (
    <StyledButton
      ref={ref}
      className={btnClasses}
      color={color}
      size={size}
      disabled={disabled}
      variant={simple ? "text" : "contained"}
      fullWidth={fullWidth}
      block={block}
      {...rest}
      classes={muiClasses}
    >
      {children}
    </StyledButton>
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "twitter",
    "facebook",
    "google",
    "linkedin",
    "pinterest",
    "youtube",
    "tumblr",
    "github",
    "behance",
    "dribbble",
    "reddit",
    "transparent"
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  className: PropTypes.string,
  muiClasses: PropTypes.object,
  children: PropTypes.node
};

export default RegularButton;
