import { useContext } from "react";
import { Stage, Layer, Group } from "react-konva"
import { DataContext } from "../data/context/dataContext";
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";

export function BackgroundGrafic() {
    var data = useContext(DataContext);

    return (
        <Stage height={window.innerHeight} width={window.innerWidth}>
            <Layer>
                {/* Far Group */}
                <Group>
                    <BackgroundFarGrafic background={data?.background.farData} />
                </Group>
                {/* Ground Group */}
                <Group>
                    {data?.background.groundDatas.sort(x => x.layerPosition).map(background => {
                        <BackgroundGroundGrafic background={background} />
                    })}
                </Group>
                {/* Middle Group */}
                {/* <Group>
                    {data.background.middleDatas}
                </Group> */}
            </Layer>
        </Stage >
    )
}