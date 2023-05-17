import { PropsWithChildren, createRef, useContext, useEffect } from "react";
import { DataContext } from "../data/context/dataContext";
import { Stage } from "react-konva";
import Konva from "konva";

export interface IScalingStageProps {
    isImageStage: boolean;
}

export function ScalingStage(props: PropsWithChildren<IScalingStageProps>) {
    var data = useContext(DataContext);
    const stageRef: React.RefObject<Konva.Stage> = createRef();

    const scaledOffset = {
        x: data.positionOffsetX * data.scrollScaleFacor,
        y: data.positionOffsetY * data.scrollScaleFacor
    }

    useEffect(() => {
        if (props.isImageStage) {
            data.setStage(stageRef.current!);
        }
    }, [])

    return (
        <Stage
            ref={stageRef}
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