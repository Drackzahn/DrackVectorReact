import { backgroundGroundData, backgroundGroundType } from "../data/backgroundGroundData";
import { useContext } from "react";
import { DataContext } from "../data/context/dataContext";
import { Rect } from "react-konva";
import { FallbackGrafic } from "./FallbackGrafic";
import { GetFillingWidth } from "../helper/getFillSizes";

export interface IBackgroundGroundGraficProps {
    background: backgroundGroundData | undefined;
}

export function BackgroundGroundGrafic(props: IBackgroundGroundGraficProps) {
    if (props.background === null)
        return (
            <FallbackGrafic />
        )

    if (props.background?.type === backgroundGroundType.flatColor)
        return (
            <FlatColorGrafic background={props.background}
            />)

    //Fallback Value
    return (
        <FallbackGrafic />
    )
}

function FlatColorGrafic(props: IBackgroundGroundGraficProps) {
    var data = useContext(DataContext);

    const width = GetFillingWidth(data);
    const height = props.background!.height;

    const verticalStartPosition = props.background?.verticalPosition ?? 0;
    const verticalEndPosition = height - verticalStartPosition;

    const color = props.background?.color1Hex ?? "#FFFFFF";

    return (
        <Rect
            key={props.background?.id}
            id={props.background?.id}
            fill={color}
            x={0}
            y={verticalStartPosition}
            height={verticalEndPosition}
            width={width}
        />
    )
}