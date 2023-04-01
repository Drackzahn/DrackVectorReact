import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Canvas } from "../canvas/Canvas";
import { UserInterfaceTabs } from "./UserInterfaceTabs";

export function DrackVectorInterface(props: PropsWithChildren) {
    return (
        <Box
            display="grid">
            <Box
                gridColumn={1}
                gridRow={1}
                zIndex={0}>
                <Canvas />
            </Box>

            <Box
                gridColumn={1}
                gridRow={1}
                zIndex={1}>
                <UserInterfaceTabs />
            </Box>
        </Box>
    )
}