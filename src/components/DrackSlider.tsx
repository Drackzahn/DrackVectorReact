import { Box, InputAdornment, Slider, Typography } from "@mui/material";
import { DrackTextField } from "./DrackTextField";

export interface IDrackSliderProps {
  maxValue: number;
  minValue: number;
  selectedValue: number;
  label: string;
  disabled?: boolean;
  updatedSelectedValue: (newValue: number) => void;
  step?: number;
  endAdormentText?: string;
}

export function DrackSlider(props: IDrackSliderProps) {
  const handleChange = (event: Event, newValue: number | number[]) => {
    updateValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(Number(event.target.value));
  };

  const updateValue = (newValue: number) => {
    props.updatedSelectedValue(Math.round(newValue));
  };

  const disabled = props.disabled ?? false;

  return (
    <Box
      display="grid"
      gridTemplateAreas="'Label'  'Slider'  'ValueBox'"
      padding={1}
    >
      <Box gridArea="Label">
        <Typography align="center">{props.label}</Typography>
      </Box>
      <Box gridArea="ValueBox" marginLeft={2}>
        <DrackTextField
          value={props.selectedValue}
          size="small"
          onChange={handleInputChange}
          type="number"
          inputProps={{
            min: props.minValue,
            max: props.maxValue,
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {props.endAdormentText}
              </InputAdornment>
            ),
          }}
          label={props.label}
          disabled={disabled}
          sx={{
            width: "150px",
          }}
        />
      </Box>
      <Box gridArea="Slider">
        <Slider
          max={props.maxValue}
          min={props.minValue}
          value={props.selectedValue}
          valueLabelDisplay="auto"
          onChange={handleChange}
          disabled={disabled}
          step={props.step ?? 1}
        />
      </Box>
    </Box>
  );
}
