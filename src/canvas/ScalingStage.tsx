import { PropsWithChildren, useContext } from "react";
import { DataContext } from "../data/context/dataContext";
import { Stage } from "react-konva";
import { KonvaEventObject } from "konva/lib/Node";
import Konva from "konva";

export function ScalingStage(props: PropsWithChildren) {
    var data = useContext(DataContext);

    return (
        <Stage
            height={data.stageHeight}
            width={data.stageWidth}
            scaleX={data.generalScaleFactor}
            scaleY={data.generalScaleFactor}
        >
            {props.children}
        </ Stage >
    )
}