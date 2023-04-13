import { Box, FormControlLabel, Switch } from "@mui/material";
import { ISizeableElement } from "../../data/items/baseInterfaces/ISizeableElement";
import { DrackSlider } from "../../components/DrackSlider";

export interface ISizeableElementInterfaceBaseProps<T extends ISizeableElement> {
    value: T;
    onChange: (newValue: T) => void;
}

export function SizeableElementInterfaceBase<T extends ISizeableElement>(props: ISizeableElementInterfaceBaseProps<T>) {
    function setX(newValue: number) {
        const scaledValue = newValue / 100;

        if (props.value.combineScaling) {
            props.onChange({ ...props.value!, scaleX: scaledValue, scaleY: scaledValue });
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
            gridTemplateAreas="'SizeX SizeY CombineSize'"
            columnGap={2}>
            <Box gridArea="SizeX">
                <DrackSlider
                    label="Width"
                    maxValue={500}
                    minValue={1}
                    selectedValue={props.value.scaleX * 100}
                    updatedSelectedValue={setX} />
            </Box>
            <Box gridArea="SizeY">
                <DrackSlider
                    label="Height"
                    maxValue={500}
                    minValue={1}
                    selectedValue={props.value.scaleY * 100}
                    updatedSelectedValue={setY}
                    disabled={props.value.combineScaling} />
            </Box>
            <Box gridArea="CombineSize">
                <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Combine"
                    checked={props.value.combineScaling}
                    onChange={(event, checked) => setCombined(checked)}
                />
            </Box>
        </Box>
    )
}