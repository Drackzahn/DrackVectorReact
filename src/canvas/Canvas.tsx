import { Box } from "@mui/system";
import { useContext } from "react";
import { BackgroundGrafic } from "../vectors/BackgroundGrafic";
import { DataContext } from "../data/context/dataContext";
import { ScalingStage } from "./ScalingStage";

export function Canvas() {
    const data = useContext(DataContext);

    if (data.includeBackground) {
        return (
            <ScalingStage isImageStage>
                <BackgroundGrafic />
                {/* TODO Add Person Layer here */}
            </ScalingStage>
        )
    }

    return (
        <Box
            display="grid">
            <Box
                gridColumn={1}
                gridRow={1}
                zIndex={0}>
                <ScalingStage isImageStage={false}>
                    <BackgroundGrafic />
                </ScalingStage>
            </Box>

            <Box
                gridColumn={1}
                gridRow={1}
                zIndex={1}>
                {/* TODO Add Person Layer here */}
            </Box>
        </Box>
    )
}