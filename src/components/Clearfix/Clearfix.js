import React from "react";

// Material-UI core components
import { styled } from "@mui/material/styles"; // MUI v5 ile uyumlu

const Clearfix = styled("div")({
  "&:after, &:before": {
    display: "table",
    content: '" "',
  },
  "&:after": {
    clear: "both",
  },
});

export default function ClearfixComponent() {
  return <Clearfix />;
}
