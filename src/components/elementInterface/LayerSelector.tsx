import { TextField } from "@mui/material";

export interface ILayerSelectorProps {
    value: number;
    onChange: (newValue: number) => void;
}

export function LayerSelector(props: ILayerSelectorProps) {
    return (
        <TextField
            value={props.value}
            onChange={(event) => props.onChange(Number(event.target.value))}
            fullWidth
            type="number"
            label="Layer"
        />
    )
}