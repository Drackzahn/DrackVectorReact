import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";

export interface ITypeSelectorProps<T extends number> {
  selectedValue: T;
  onChange: (newValue: T) => void;
  values: { value: T; label: string }[];
  label: string;
}

export function TypeSelector<T extends number>(props: ITypeSelectorProps<T>) {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(Number(event.target.value) as T);
  };

  return (
    <FormControl variant="standard" fullWidth>
      <InputLabel>{props.label}</InputLabel>
      <Select
        value={props.selectedValue.toString()}
        onChange={handleChange}
        label={props.label}
      >
        {props.values.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
