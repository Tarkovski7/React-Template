import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@mui/styles"; // MUI v5'te hâlâ geçerli
import styles from "../../assets/jss/material-dashboard/components/cardAvatarStyle";

const useStyles = makeStyles(styles);

export default function CardAvatar(props) {
  const classes = useStyles();
  const {
    children,
    className,
    plain,
    profile,
    testimonial,
    testimonialFooter,
    ...rest
  } = props;

  // Dinamik olarak className'leri oluşturuyoruz
  const cardAvatarClasses = classNames({
    [classes.cardAvatar]: true,
    [classes.cardAvatarProfile]: profile,
    [classes.cardAvatarPlain]: plain,
    [classes.cardAvatarTestimonial]: testimonial,
    [classes.cardAvatarTestimonialFooter]: testimonialFooter,
    [className]: className !== undefined, // Eğer extra class varsa ekleniyor
  });

  return (
    <div className={cardAvatarClasses} {...rest}>
      {children}
    </div>
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
