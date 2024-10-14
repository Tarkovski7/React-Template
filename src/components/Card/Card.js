import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@mui/styles"; // MUI v5'te bu hâlâ geçerli

import styles from "../../assets/jss/material-dashboard/components/cardStyle"; // styles dosyanız mevcutsa bunu güncel tutun

const useStyles = makeStyles(styles);

export default function Card(props) {
  const classes = useStyles();
  const {
    className,
    children,
    plain,
    profile,
    blog,
    raised,
    background,
    pricing,
    color,
    product,
    testimonial,
    chart,
    login,
    ...rest
  } = props;

  // classNames fonksiyonu ile CSS class'larını dinamik olarak oluşturuyoruz
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile || testimonial,
    [classes.cardBlog]: blog,
    [classes.cardRaised]: raised,
    [classes.cardBackground]: background,
    [classes.cardPricingColor]:
      (pricing && color !== undefined) || (pricing && background !== undefined),
    [classes[color]]: color, // Eğer `color` varsa ilgili stil uygulanacak
    [classes.cardPricing]: pricing,
    [classes.cardProduct]: product,
    [classes.cardChart]: chart,
    [classes.cardLogin]: login,
    [className]: className !== undefined, // Ekstra class varsa eklenecek
  });

  // Oluşan class'lar ile div oluşturuluyor
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  blog: PropTypes.bool,
  raised: PropTypes.bool,
  background: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
  ]), // Renk seçenekleri belirtildi
  product: PropTypes.bool,
  chart: PropTypes.bool,
  login: PropTypes.bool,
  children: PropTypes.node, // Children prop'u node olmalı
};
