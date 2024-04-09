import { InputAdornment, TextField, TextFieldProps } from "@mui/material";

export function DrackTextField(props: TextFieldProps) {
  return (
    <TextField
      {...props}
      sx={{
        ...props.sx,
        "& input[type=number]": {
          MozAppearance: "textfield",
        },
        "& input[type=number]::-webkit-outer-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
        "& input[type=number]::-webkit-inner-spin-button": {
          WebkitAppearance: "none",
          margin: 0,
        },
      }}
    />
  );
}
