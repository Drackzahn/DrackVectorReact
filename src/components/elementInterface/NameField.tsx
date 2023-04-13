import { TextField } from "@mui/material";

export interface INameFieldProps {
    value: string;
    onChange: (newValue: string) => void;
}

export function NameField(props: INameFieldProps) {
    return (
        <TextField
            label="Name"
            fullWidth
            size="small"
            value={props.value}
            onChange={(event) => props.onChange((event.target.value))}
        />
    )
}