import { Box, TextField } from "@mui/material";
import { IHasOpacity } from "../../data/baseInterfaces/IHasOpacity";
import { DrackSlider } from "../../components/DrackSlider";

export interface IHasOpacityInterfaceBaseProps<T extends IHasOpacity> {
    value: T;
    onChange: (newValue: T) => void;
}

export function HasOpacityInterfaceBase<T extends IHasOpacity>(props: IHasOpacityInterfaceBaseProps<T>) {

    function onChange(value: number) {
        const scaledValue = value / 100;
        props.onChange({ ...props.value, opacity: scaledValue })
    }

    return (
        <Box display="grid"
            gridTemplateAreas="'Field'">
            <Box gridArea="Field">
                <DrackSlider
                    label="Opacity"
                    maxValue={100}
                    minValue={0}
                    selectedValue={props.value.opacity * 100}
                    updatedSelectedValue={onChange}
                />
            </Box>
        </Box>
    )
}