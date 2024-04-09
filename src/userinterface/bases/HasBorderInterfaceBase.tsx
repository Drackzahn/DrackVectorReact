import { Box, Checkbox, TextField } from "@mui/material";
import { IHasBorder } from "../../data/baseInterfaces/IHasBorder";
import { ColorBox } from "../../components/ColorBox";
import { DrackTextField } from "../../components/DrackTextField";
import { DrackSwitch } from "../../components/elementInterface/DrackSwitch";

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
    <Box
      display="grid"
      gridTemplateAreas="'Field Color Active'"
      gridTemplateColumns="auto auto auto"
    >
      <Box gridArea="Field" display="grid" alignContent="center">
        <DrackTextField
          value={props.value.borderThickness}
          onChange={(event) => onChange(Number(event.target.value))}
          type="number"
          label="Border"
          InputProps={{
            inputProps: {
              min: 0,
              max: 10,
            },
          }}
          sx={{
            width: "100px",
          }}
          disabled={!props.value.isBorderActive}
        />
      </Box>
      <Box gridArea="Color" display="grid" alignContent="center">
        <ColorBox
          color={props.value.borderColor}
          setColor={setColor}
          isActive={props.value.isBorderActive}
        />
      </Box>
      <Box gridArea="Active" display="grid" alignContent="center">
        <DrackSwitch
          label="Border Active"
          isChecked={props.value.isBorderActive}
          onChange={onSetChange}
        />
      </Box>
    </Box>
  );
}
