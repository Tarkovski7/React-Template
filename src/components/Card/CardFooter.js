import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardFooterStyle"; // Stil dosyası

// Styled API ile CardFooter bileşenini oluşturuyoruz
const StyledCardFooter = styled("div")(({ theme, plain, profile, pricing, testimonial, stats, chart, product }) => ({
  ...styles.cardFooter(theme),
  ...(plain && styles.cardFooterPlain),
  ...(profile && styles.cardFooterProfile),
  ...(pricing && styles.cardFooterPricing),
  ...(testimonial && styles.cardFooterTestimonial),
  ...(stats && styles.cardFooterStats),
  ...(chart && styles.cardFooterChart),
  ...(product && styles.cardFooterChart), // 'product' için aynı stil uygulanabilir
}));

export default function CardFooter(props) {
  const {
    className,
    children,
    plain,
    profile,
    pricing,
    testimonial,
    stats,
    chart,
    product,
    ...rest
  } = props;

  // Dinamik class oluşturma
  const cardFooterClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenecek
  });

  return (
    <StyledCardFooter
      plain={plain}
      profile={profile}
      pricing={pricing}
      testimonial={testimonial}
      stats={stats}
      chart={chart}
      product={product}
      className={cardFooterClasses}
      {...rest}
    >
      {children}
    </StyledCardFooter>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  pricing: PropTypes.bool,
  testimonial: PropTypes.bool,
  stats: PropTypes.bool,
  chart: PropTypes.bool,
  product: PropTypes.bool,
  children: PropTypes.node.isRequired, // Children zorunlu
};
