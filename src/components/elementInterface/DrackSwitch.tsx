import { FormControlLabel, Switch } from "@mui/material";

export interface DrackSwitchProps {
  label: string;
  isChecked: boolean;
  onChange: (newValue: boolean) => void;
}

export function DrackSwitch(props: DrackSwitchProps) {
  const { label, isChecked, onChange } = props;

  return (
    <FormControlLabel
      control={<Switch />}
      label={label}
      checked={isChecked}
      onChange={(event, checked) => onChange(checked)}
    />
  );
}
