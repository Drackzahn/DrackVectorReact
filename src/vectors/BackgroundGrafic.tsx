import { useContext } from "react";
import { Stage, Layer, Group } from "react-konva"
import { DataContext } from "../data/context/dataContext";
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";
import { backgroundFarContext } from "../data/context/backgroundFarContext";
import { backgroundGroundContext } from "../data/context/backgroundGroundContext";

export function BackgroundGrafic() {
    var data = useContext(DataContext);

    return (
        <Stage height={data?.stageHeight} width={data?.stageWidth}>
            <Layer>
                {/* Ground Group */}
                <BackgroundGroundsGraficContainer />
            </Layer>
            <Layer>
                {/* Far Group */}
                <BackgroundFarGraficContainer />
            </Layer>
        </Stage >
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
            {data.backgroundGroundDatas.sort(x => x.layerPosition).map(background => {
                <BackgroundGroundGrafic background={background} />
            })}
        </Group>
    )
}