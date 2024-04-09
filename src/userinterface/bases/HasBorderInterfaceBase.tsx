import { Box, Checkbox, TextField } from "@mui/material";
import { IHasBorder } from "../../data/baseInterfaces/IHasBorder";
import { ColorBox } from "../../components/ColorBox";

export interface IHasBorderInterfaceBaseProps<T extends IHasBorder> {
  value: T;
  onChange: (newValue: T) => void;
}

export function HasBorderInterfaceBase<T extends IHasBorder>(
  props: IHasBorderInterfaceBaseProps<T>
) {
  function onChange(value: number) {
    props.onChange({ ...props.value, borderThickness: value });
  }

  function setColor(newValue: string) {
    props.onChange({ ...props.value, borderColor: newValue });
  }

  function onSetChange(newValue: boolean) {
    props.onChange({ ...props.value, isBorderActive: newValue });
  }

  return (
    <Box display="grid" gridTemplateAreas="'Field Color Active'">
      <Box gridArea="Field">
        <TextField
          value={props.value.borderThickness}
          onChange={(event) => onChange(Number(event.target.value))}
          fullWidth
          type="number"
          label="Border"
          InputProps={{
            inputProps: {
              min: 0,
              max: 10,
            },
          }}
          disabled={!props.value.isBorderActive}
        />
      </Box>
      <Box gridArea="Color">
        <ColorBox
          color={props.value.borderColor}
          setColor={setColor}
          isActive={props.value.isBorderActive}
        />
      </Box>
      <Box gridArea="Active">
        <Checkbox
          checked={props.value.isBorderActive}
          onChange={(_event, checked) => onSetChange(checked)}
        />
      </Box>
    </Box>
  );
}
