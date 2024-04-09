import { Box } from "@mui/system";
import { useContext } from "react";
import { BackgroundGrafic } from "../vectors/BackgroundGrafic";
import { DataContext } from "../data/context/dataContext";
import { ScalingStage } from "./ScalingStage";
import { FiguresGrafic } from "../vectors/figures/FiguresGrafic";

export function Canvas() {
  const data = useContext(DataContext);

  if (data!.includeBackground) {
    return (
      <ScalingStage isImageStage>
        <BackgroundGrafic />
        <FiguresGrafic />
      </ScalingStage>
    );
  }

  return (
    <Box display="grid">
      <Box gridColumn={1} gridRow={1} zIndex={0}>
        <ScalingStage isImageStage={false}>
          <BackgroundGrafic />
        </ScalingStage>
      </Box>

      <Box gridColumn={1} gridRow={1} zIndex={1}>
        <ScalingStage isImageStage={false}>
          <FiguresGrafic />
        </ScalingStage>
      </Box>
    </Box>
  );
}
