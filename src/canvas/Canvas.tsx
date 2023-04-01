import { Box } from "@mui/system";
import { PropsWithChildren } from "react";
import { BackgroundGrafic } from "../vectors/BackgroundGrafic";


export function Canvas(props: PropsWithChildren) {
    return (
        <Box>
            <BackgroundGrafic />
        </Box>
    )
}