import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import clsx from "clsx"; // clsx import
// @mui/material components
import { FormControl, InputLabel, FormHelperText, Input } from "@mui/material";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { makeStyles } from "@mui/styles"; // Updated import for makeStyles

import styles from "../../assets/jss/material-dashboard/components/customInputStyle";

const useStyles = makeStyles(styles);

export default function CustomInput(props) {
  const { t } = useTranslation(); // Initialize the translation hook
  const classes = useStyles();
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
    helperText,
  } = props;

  const labelClasses = clsx({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = clsx({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });

  const marginTop = clsx({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });

  const inputClasses = clsx({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });

  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = clsx(
      formControlProps.className,
      classes.formControl
    );
  } else {
    formControlClasses = classes.formControl;
  }

  var helpTextClasses = clsx({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={clsx(classes.labelRoot, labelClasses)}
          htmlFor={id}
          {...labelProps}
        >
          {t(labelText)} {/* Translate the label text */}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
      {helperText !== undefined ? (
        <FormHelperText id={`${id}-text`} className={helpTextClasses}>
          {t(helperText)} {/* Translate the helper text */}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string.isRequired,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
  helperText: PropTypes.node,
};
