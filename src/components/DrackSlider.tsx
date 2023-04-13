import { Box, Input, Slider, Typography } from "@mui/material";

export interface IDrackSliderProps {
    maxValue: number;
    minValue: number;
    selectedValue: number;
    label: string;
    disabled?: boolean;
    updatedSelectedValue: (newValue: number) => void;
}

export function DrackSlider(props: IDrackSliderProps) {
    const handleChange = (event: Event, newValue: number | number[]) => {
        props.updatedSelectedValue(newValue as number);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.updatedSelectedValue(Number(event.target.value));
    };

    const disabled = props.disabled ?? false;

    return (
        <Box display="grid"
            gridTemplateAreas="'. Label .' 'Slider Slider ValueBox'"
            padding={1}>
            <Box gridArea="Label">
                <Typography>{props.label}</Typography>
            </Box>
            <Box gridArea="ValueBox"
                marginLeft={2}>
                <Input
                    value={props.selectedValue}
                    size="small"
                    onChange={handleInputChange}
                    inputProps={{
                        step: 1,
                        min: props.minValue,
                        max: props.maxValue,
                        type: 'number'
                    }}
                    disabled={disabled}
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
                />
            </Box>
        </Box>

    )
}