import { PropsWithChildren, useContext, useEffect } from "react";
import { DataContext } from "../data/context/dataContext";
import { Stage } from "react-konva";


export function ScalingStage(props: PropsWithChildren) {
    var data = useContext(DataContext);

    const scaledOffset = {
        x: data.positionOffsetX * data.scrollScaleFacor,
        y: data.positionOffsetY * data.scrollScaleFacor
    }

    return (
        <Stage
            height={data.stageHeight}
            width={data.stageWidth}
            scaleX={data.generalScaleFactor}
            scaleY={data.generalScaleFactor}
            offset={scaledOffset}
        >
            {props.children}
        </ Stage >
    )
}