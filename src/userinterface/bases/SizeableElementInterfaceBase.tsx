import { Box, FormControlLabel, Switch } from "@mui/material";
import { ISizeableElement } from "../../data/baseInterfaces/ISizeableElement";
import { DrackSlider } from "../../components/DrackSlider";
import { DrackSwitch } from "../../components/elementInterface/DrackSwitch";

export interface ISizeableElementInterfaceBaseProps<
  T extends ISizeableElement
> {
  value: T;
  onChange: (newValue: T) => void;
}

export function SizeableElementInterfaceBase<T extends ISizeableElement>(
  props: ISizeableElementInterfaceBaseProps<T>
) {
  function setX(newValue: number) {
    const scaledValue = newValue / 100;

    if (props.value.combineScaling) {
      props.onChange({
        ...props.value!,
        scaleX: scaledValue,
        scaleY: scaledValue,
      });
    } else {
      props.onChange({ ...props.value!, scaleX: scaledValue });
    }
  }

  function setY(newValue: number) {
    const scaledValue = newValue / 100;
    props.onChange({ ...props.value!, scaleY: scaledValue });
  }

  function setCombined(newValue: boolean) {
    props.onChange({ ...props.value!, combineScaling: newValue });
  }

  return (
    <Box
      display="grid"
      gridTemplateAreas="
      'CombineSize CombineSize'
      'SizeX SizeY'
      "
      gridTemplateColumns="1fr 1fr"
      gridTemplateRows="auto auto"
      columnGap={2}
    >
      <Box gridArea="SizeX">
        <DrackSlider
          label="Width"
          maxValue={200}
          minValue={50}
          selectedValue={props.value.scaleX * 100}
          updatedSelectedValue={setX}
          endAdormentText="/100 %"
        />
      </Box>
      <Box gridArea="SizeY">
        <DrackSlider
          label="Height"
          maxValue={200}
          minValue={50}
          selectedValue={props.value.scaleY * 100}
          updatedSelectedValue={setY}
          disabled={props.value.combineScaling}
          endAdormentText="/100 %"
        />
      </Box>
      <Box gridArea="CombineSize">
        <DrackSwitch
          label="Combine Sizes"
          isChecked={props.value.combineScaling}
          onChange={setCombined}
        />
      </Box>
    </Box>
  );
}
