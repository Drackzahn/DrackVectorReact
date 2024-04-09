import { useContext } from "react";
import { Group } from "react-konva";
import { HumanoidFigureContext } from "../../data/context/humanoidFigureContext";
import { HumanoidPersonGrafic } from "./persons/HumanoidPersonGrafic";
import { DrackLayer } from "../../canvas/DrackLayer";

export function FiguresGrafic() {
  var data = useContext(HumanoidFigureContext);

  return (
    <DrackLayer>
      <Group>
        {data!.datas
          .sort((x) => x.layerPosition)
          .map((item) => (
            <HumanoidPersonGrafic item={item} key={item.id} />
          ))}
      </Group>
    </DrackLayer>
  );
}
