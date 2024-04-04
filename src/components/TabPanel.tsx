import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

interface ITabPanelProps {
    index: number;
    value: number;
    header: string;
}

export function TabPanel(props: PropsWithChildren<ITabPanelProps>) {
    const { children, value, index, header, ...other } = props;

    if (index !== value)
        return null;

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Name' 
                'Children' 
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Name"
            >
                <Typography>{props.header}</Typography>
            </Box>
            <Box
                gridArea="Children"
            >
                {props.children}
            </Box>
        </Box>
    )
}