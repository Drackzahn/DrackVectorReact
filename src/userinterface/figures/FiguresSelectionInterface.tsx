import { useContext } from "react";
import { HumanoidFigureContext } from "../../data/context/humanoidFigureContext";
import { CreateNewHumanoidFigureData } from "../../helper/factory";
import { DataSelectorHandler } from "../../components/DataSelectorHandler";

export function FiguresSelectionInterface() {
  var figureContext = useContext(HumanoidFigureContext);

  return (
    <DataSelectorHandler
      createNew={CreateNewHumanoidFigureData}
      dataContext={figureContext!}
    />
  );
}
