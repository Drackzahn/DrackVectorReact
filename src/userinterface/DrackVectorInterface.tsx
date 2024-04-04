import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import { Canvas } from "../canvas/Canvas";
import { UserInterfaceTabs } from "./baseInterface/UserInterfaceTabs";
import { UserInterfaceFooter } from "./baseInterface/UserInterfaceFooter";
import { DragableArea } from "../components/DragableArea";

export function DrackVectorInterface(props: PropsWithChildren) {
  return (
    <Box
      display="grid"
      gridTemplateAreas="'Content'"
      height="100%"
      width="100%"
      minHeight={0}
    >
      <Box gridArea="Content" height="100%" width="100%" display="grid">
        <DragableArea>
          <Canvas />
        </DragableArea>
      </Box>
      <Box
        gridArea="Content"
        display="grid"
        justifySelf="end"
        alignSelf="stretch"
        zIndex={1}
      >
        <UserInterfaceTabs />
      </Box>
      <Box
        gridArea="Content"
        display="grid"
        alignSelf="end"
        justifySelf="stretch"
        zIndex={1}
      >
        <UserInterfaceFooter />
      </Box>
    </Box>
  );
}
