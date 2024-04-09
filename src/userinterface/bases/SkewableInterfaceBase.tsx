import { Box, FormControlLabel, Switch } from "@mui/material";
import { DrackSlider } from "../../components/DrackSlider";
import { ISkewable } from "../../data/baseInterfaces/ISkewable";
import { DrackSwitch } from "../../components/elementInterface/DrackSwitch";

export interface ISkewableInterfaceBaseProps<T extends ISkewable> {
  value: T;
  onChange: (newValue: T) => void;
}

export function SkewableInterfaceBase<T extends ISkewable>(
  props: ISkewableInterfaceBaseProps<T>
) {
  function setX(newValue: number) {
    const scaledValue = newValue / 10;

    if (props.value.combineSkew) {
      props.onChange({
        ...props.value!,
        skewX: scaledValue,
        skewY: scaledValue,
      });
    } else {
      props.onChange({ ...props.value!, skewX: scaledValue });
    }
  }

  function setY(newValue: number) {
    const scaledValue = newValue / 10;
    props.onChange({ ...props.value!, skewY: scaledValue });
  }

  function setCombined(newValue: boolean) {
    props.onChange({ ...props.value!, combineSkew: newValue });
  }

  return (
    <Box display="grid" gridTemplateAreas="'X Y Combine'" columnGap={2}>
      <Box gridArea="X">
        <DrackSlider
          label="Skew X"
          maxValue={100}
          minValue={-100}
          selectedValue={props.value.skewX * 10}
          updatedSelectedValue={setX}
        />
      </Box>
      <Box gridArea="Y">
        <DrackSlider
          label="Skew Y"
          maxValue={100}
          minValue={-100}
          selectedValue={props.value.skewY * 10}
          updatedSelectedValue={setY}
          disabled={props.value.combineSkew}
        />
      </Box>
      <Box gridArea="Combine">
        <DrackSwitch
          label="Combine"
          isChecked={props.value.combineSkew}
          onChange={setCombined}
        />
      </Box>
    </Box>
  );
}
