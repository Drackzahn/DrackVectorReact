import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { Rect } from "react-konva";
import { backgroundFarData, backgroundFarType } from "../data/backgroundFarData";
import { DataContext } from "../data/context/dataContext";

export interface IBackgroundFarGraficProps {
    background: backgroundFarData | undefined;
}

export function BackgroundFarGrafic(props: IBackgroundFarGraficProps) {
    if (props.background === null)
        return (
            null
        )

    if (props.background?.backgroundType === backgroundFarType.blueSky)
        return (<BlueSkyGrafic background={props.background}
        />)

    //Fallback Value
    return (
        null
    )
}

function BlueSkyGrafic(props: IBackgroundFarGraficProps) {
    var data = useContext(DataContext);

    const width = data?.stageWidth ?? 0;
    const height = data?.stageHeight ?? 0;

    const linearStartPoint = {
        x: width / 2,
        y: 0
    }

    const linearEndPoint = {
        x: width / 2,
        y: height
    }

    const firstColor = props.background?.firstColor ?? "#FFFFFF";
    const secondColor = props.background?.secondColor ?? "#FFFFFF";

    return (
        <Rect
            fillLinearGradientStartPoint={linearStartPoint}
            fillLinearGradientEndPoint={linearEndPoint}
            fillLinearGradientColorStops={[0, firstColor, 1, secondColor]}
            x={0}
            y={0}
            height={height}
            width={width} />
    )
}