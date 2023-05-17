import { useContext } from "react";
import { Rect } from "react-konva";
import { backgroundFarData, backgroundFarType } from "../data/backgroundFarData";
import { useFillingHeight, useFillingWidth } from "../helper/getFillSizes";

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
    const [height] = useFillingHeight();
    const [width] = useFillingWidth();

    const linearStartPoint = {
        x: width / 2,
        y: 0
    }

    const linearEndPoint = {
        x: width / 2,
        y: height
    }

    console.info(`Sky Height: ${height}`);

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