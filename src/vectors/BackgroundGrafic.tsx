import { useContext } from "react";
import { Layer } from "react-konva"
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";
import { backgroundFarContext } from "../data/context/backgroundFarContext";
import { backgroundGroundContext } from "../data/context/backgroundGroundContext";
import { ScalingStage } from "../canvas/ScalingStage";
import { backgroundSimpleItemContext } from "../data/context/backgroundSimpleItemContext";
import { SimpleItemGrafic } from "./SimpleItemGrafic";

export function BackgroundGrafic() {
    return (
        <ScalingStage>
            <Layer>
                <BackgroundFarGraficContainer />
            </Layer>
            <BackgroundGroundsGraficContainer />
            <BackgroundItemsGraficContainer />
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

export function BackgroundItemsGraficContainer() {
    var data = useContext(backgroundSimpleItemContext);

    return (
        <Layer>
            {data.datas.sort(x => x.layerPosition).map((item) => (
                <SimpleItemGrafic item={item}
                    key={item.id} />
            ))}
        </Layer>
    )
}