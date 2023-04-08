import { ArrowForwardIos, ArrowBackIosNew } from "@mui/icons-material";
import { Box, Collapse, IconButton } from "@mui/material";
import { PropsWithChildren, useState } from "react";

export function CollapseLeft(props: PropsWithChildren) {
    const [isOpen, setIsOpen] = useState<boolean>(true);

    return (
        <Box display="grid"
            gridTemplateAreas="'Icon Collapse'"
            height="100%">
            <Box gridArea="Icon"
                alignSelf="center"
                marginRight={2}
            >
                <IconButton
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <ArrowForwardIos /> : <ArrowBackIosNew />}
                </IconButton>
            </Box>
            <Box gridArea="Collapse">
                <Collapse orientation="horizontal"
                    in={isOpen}>
                    {props.children}
                </Collapse>
            </Box>
        </Box>
    )
}