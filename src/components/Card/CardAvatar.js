import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx"; // classnames yerine clsx kullanıldı
import { styled } from "@mui/material/styles"; // MUI v5'te styled API kullanımı
import styles from "../../assets/jss/material-dashboard/components/cardAvatarStyle"; // Stiller

// Styled API ile CardAvatar bileşenini oluşturuyoruz
const StyledCardAvatar = styled("div")(({ theme, plain, profile, testimonial, testimonialFooter }) => ({
  ...styles.cardAvatar(theme),
  ...(profile && styles.cardAvatarProfile),
  ...(plain && styles.cardAvatarPlain),
  ...(testimonial && styles.cardAvatarTestimonial),
  ...(testimonialFooter && styles.cardAvatarTestimonialFooter),
}));

export default function CardAvatar(props) {
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;

  // Dinamik class oluşturma
  const cardAvatarClasses = clsx({
    [className]: className !== undefined, // Eğer ekstra class varsa eklenecek
  });

  return (
    <StyledCardAvatar
      plain={plain}
      profile={profile}
      testimonial={testimonial}
      testimonialFooter={testimonialFooter}
      className={cardAvatarClasses}
      {...rest}
    >
      {children}
    </StyledCardAvatar>
  );
}

CardAvatar.propTypes = {
  children: PropTypes.node.isRequired, // Children zorunlu bir prop
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  testimonial: PropTypes.bool,
  testimonialFooter: PropTypes.bool,
};
