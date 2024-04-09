import { ArrowBack, ArrowForward } from "@mui/icons-material";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
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

  const onNextClick = () => {
    const next = props.selectedValue + 1;

    if (props.values.find((x) => x.value === next)) {
      props.onChange(next as T);
    } else {
      props.onChange(
        Math.min.apply(
          Math,
          props.values.map((x) => x.value)
        ) as T
      );
    }
  };

  const onBackClick = () => {
    const back = props.selectedValue - 1;

    if (props.values.find((x) => x.value === back)) {
      props.onChange(back as T);
    } else {
      props.onChange(
        Math.max.apply(
          Math,
          props.values.map((x) => x.value)
        ) as T
      );
    }
  };

  return (
    <FormControl variant="standard" fullWidth>
      <Box
        display="grid"
        gridTemplateAreas="'Label Label Label' 'Left Select Right'"
        gridTemplateColumns="auto 1fr auto"
        gap={1}
      >
        <Box gridArea="Label">
          <Typography align="center">{props.label}</Typography>
        </Box>
        <Box gridArea="Left">
          <IconButton onClick={onBackClick}>
            <ArrowBack />
          </IconButton>
        </Box>
        <Box gridArea="Select">
          <Select
            value={props.selectedValue.toString()}
            onChange={handleChange}
            label={props.label}
            fullWidth
          >
            {props.values.map((option) => (
              <MenuItem value={option.value} key={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </Box>
        <Box gridArea="Right">
          <IconButton onClick={onNextClick}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>
    </FormControl>
  );
}
