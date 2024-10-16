import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardBodyStyle"; // Stil dosyası

// Styled API ile CardBody bileşenini oluşturuyoruz
const StyledCardBody = styled("div")(({ theme, background, plain, formHorizontal, pricing, signup, color, profile, calendar }) => ({
  ...styles.cardBody(theme),
  ...(background && styles.cardBodyBackground),
  ...(plain && styles.cardBodyPlain),
  ...(formHorizontal && styles.cardBodyFormHorizontal),
  ...(pricing && styles.cardPricing),
  ...(signup && styles.cardSignup),
  ...(color && styles.cardBodyColor),
  ...(profile && styles.cardBodyProfile),
  ...(calendar && styles.cardBodyCalendar),
}));

export default function CardBody(props) {
  const {
    className,
    children,
    background,
    plain,
    formHorizontal,
    pricing,
    signup,
    color,
    profile,
    calendar,
    ...rest
  } = props;

  // Dinamik class oluşturma
  const cardBodyClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenecek
  });

  return (
    <StyledCardBody
      background={background}
      plain={plain}
      formHorizontal={formHorizontal}
      pricing={pricing}
      signup={signup}
      color={color}
      profile={profile}
      calendar={calendar}
      className={cardBodyClasses}
      {...rest}
    >
      {children}
    </StyledCardBody>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  background: PropTypes.bool,
  plain: PropTypes.bool,
  formHorizontal: PropTypes.bool,
  pricing: PropTypes.bool,
  signup: PropTypes.bool,
  color: PropTypes.bool,
  profile: PropTypes.bool,
  calendar: PropTypes.bool,
  children: PropTypes.node.isRequired, // Children zorunlu
};
