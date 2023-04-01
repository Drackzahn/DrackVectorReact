import { Box, CircularProgress } from "@mui/material";
import { backgroundGroundData, backgroundGroundType } from "../data/backgroundGroundData";
import { useContext } from "react";
import { DataContext } from "../data/context/dataContext";
import { Rect } from "react-konva";

export interface IBackgroundGroundGraficProps {
    background: backgroundGroundData | undefined;
}

export function BackgroundGroundGrafic(props: IBackgroundGroundGraficProps) {
    if (props.background === null)
        return (
            <Box />
        )

    if (props.background?.type === backgroundGroundType.flatColor)
        return (<FlatColorGrafic background={props.background}
        />)

    //Fallback Value
    return (
        <CircularProgress />
    )
}

function FlatColorGrafic(props: IBackgroundGroundGraficProps) {
    var data = useContext(DataContext);

    const width = data?.stageWidth ?? 0;
    const height = data?.stageHeight ?? 0;

    const verticalStartPosition = props.background?.verticalPosition ?? 0;
    const verticalEndPosition = height - verticalStartPosition;

    const color = props.background?.firstColor ?? "#FFFFFF";

    return (
        <Rect
            fill={color}
            x={0}
            y={verticalStartPosition}
            height={verticalEndPosition}
            width={width} />
    )
}