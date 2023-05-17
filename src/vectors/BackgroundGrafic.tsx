import { useContext } from "react";
import { Group, Layer } from "react-konva"
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";
import { backgroundFarContext } from "../data/context/backgroundFarContext";
import { backgroundGroundContext } from "../data/context/backgroundGroundContext";
import { ScalingStage } from "../canvas/ScalingStage";
import { backgroundSimpleItemContext } from "../data/context/backgroundSimpleItemContext";
import { SimpleItemGrafic } from "./SimpleItemGrafic";
import { DrackLayer } from "../canvas/DrackLayer";

export function BackgroundGrafic() {
    return (
        <ScalingStage>
            <DrackLayer isBackgroundLayer>
                <Group>
                    <BackgroundFarGraficContainer />
                </Group>
                <BackgroundGroundsGraficContainer />
                <BackgroundItemsGraficContainer />
            </DrackLayer>
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
        <Group>
            {data.datas.sort(x => x.layerPosition).map((background) => (
                <BackgroundGroundGrafic background={background}
                    key={background.id} />
            ))}
        </Group>
    )
}

export function BackgroundItemsGraficContainer() {
    var data = useContext(backgroundSimpleItemContext);

    return (
        <Group>
            {data.datas.sort(x => x.layerPosition).map((item) => (
                <SimpleItemGrafic item={item}
                    key={item.id} />
            ))}
        </Group>
    )
}