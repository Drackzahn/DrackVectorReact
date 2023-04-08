import { useContext } from "react";
import { Layer } from "react-konva"
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";
import { backgroundFarContext } from "../data/context/backgroundFarContext";
import { backgroundGroundContext } from "../data/context/backgroundGroundContext";
import { ScalingStage } from "../canvas/ScalingStage";

export function BackgroundGrafic() {
    return (
        <ScalingStage>
            <Layer>
                <BackgroundFarGraficContainer />
            </Layer>
            <BackgroundGroundsGraficContainer />
        </ScalingStage >
    )
}

export function BackgroundFarGraficContainer() {
    var data = useContext(backgroundFarContext);

    return (
        <BackgroundFarGrafic background={data.backgroundFarData} />
    )
}

export function BackgroundGroundsGraficContainer() {
    var data = useContext(backgroundGroundContext);

    return (
        <Layer>
            {data.datas.sort(x => x.layerPosition).map((background) => (
                <BackgroundGroundGrafic background={background}
                    key={background.id} />
            ))}
        </Layer>
    )
}