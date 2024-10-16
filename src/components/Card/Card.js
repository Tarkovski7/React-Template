import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı

// MUI v5 styled API kullanımı
import { styled } from "@mui/material/styles";
import styles from "../../assets/jss/material-dashboard/components/cardStyle"; // Mevcut stiller

// MUI v5 ile styled API kullanarak Card bileşenini oluşturuyoruz
const StyledCard = styled("div")(({ theme, plain, profile, blog, raised, background, pricing, color, product, testimonial, chart, login }) => ({
  ...styles.card(theme),
  ...(plain && styles.cardPlain),
  ...(profile || testimonial ? styles.cardProfile : {}),
  ...(blog && styles.cardBlog),
  ...(raised && styles.cardRaised),
  ...(background && styles.cardBackground),
  ...(pricing && (color || background) ? styles.cardPricingColor : {}),
  ...(color && styles[color]),
  ...(pricing && styles.cardPricing),
  ...(product && styles.cardProduct),
  ...(chart && styles.cardChart),
  ...(login && styles.cardLogin),
}));

export default function Card(props) {
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

  // Dinamik class oluşturma
  const cardClasses = clsx({
    [className]: className !== undefined, // Ekstra class varsa eklenecek
  });

  // Oluşan class'lar ile div oluşturuluyor
  return (
    <StyledCard
      plain={plain}
      profile={profile}
      blog={blog}
      raised={raised}
      background={background}
      pricing={pricing}
      color={color}
      product={product}
      testimonial={testimonial}
      chart={chart}
      login={login}
      className={cardClasses}
      {...rest}
    >
      {children}
    </StyledCard>
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
