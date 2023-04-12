"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

interface Props {
  name: string;
  options: Array<object>;
  selectorFunction: Function;
  value: object;
  width: string;
  color?: "error" | "primary" | "secondary" | "info" | "success" | "warning" | undefined;
}
export default function CustomAutoComplete({
  name,
  options,
  selectorFunction,
  value,
  width,
  color,
}: Props) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: width }}
      onChange={(event, newValue) => {
        selectorFunction(newValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={name}
          variant="standard"
          color={color ? color : "secondary"}
        />
      )}
    />
  );
}
