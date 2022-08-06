import { ComponentsVariants } from "@mui/material";

import { lightPalette } from "mui/defaultTheme/lightPalette";

const muiButtonVariantsLight: ComponentsVariants["MuiButton"] = [
  {
    props: { variant: "contained" },
    style: {
      minWidth: "88px",
      height: "32px",
      "&.Mui-disabled": {
        color: lightPalette.grey[500],
        background: lightPalette.grey[100],
      },
    },
  },
  {
    props: { variant: "contained", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "contained", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "contained", size: "large" },
    style: {
      minWidth: "92px",
      height: "40px",
    },
  },
  {
    props: { variant: "outlined" },
    style: {
      "&.Mui-disabled": {
        border: `1px solid ${lightPalette.grey[500]}`,
        color: lightPalette.grey[500],
      },
    },
  },
  {
    props: { color: "success" },
    style: {
      border: `1px solid ${lightPalette.success.main}`,
    },
  },
  {
    props: { color: "error" },
    style: {
      border: `1px solid ${lightPalette.error.main}`,
    },
  },
  {
    props: { variant: "outlined", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "outlined", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "outlined", size: "large" },
    style: {
      minWidth: "92px",
      height: "40px",
    },
  },
  {
    props: { variant: "text" },
    style: {
      color: lightPalette.primary.main,
      borderRadius: "4px",
      "&:hover": {
        color: lightPalette.primary.dark,
      },
      "&.Mui-disabled": {
        color: lightPalette.grey[500],
      },
    },
  },
  {
    props: { variant: "text", size: "small" },
    style: {
      minWidth: "81px",
      height: "24px",
    },
  },
  {
    props: { variant: "text", size: "medium" },
    style: {
      minWidth: "88px",
      height: "32px",
    },
  },
  {
    props: { variant: "text", size: "large" },
    style: {
      minWidth: "92px",
      height: "40px",
    },
  },
];

export default muiButtonVariantsLight;
