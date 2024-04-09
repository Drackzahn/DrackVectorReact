import { useContext } from "react";
import { HumanoidFigureContext } from "../../data/context/humanoidFigureContext";
import { Box, Typography } from "@mui/material";
import { NameField } from "../../components/elementInterface/NameField";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import {
  humanoidHeadType,
  humanoidHeadTypeLabels,
} from "../../data/figures/persons/humanoidHeadData";
import {
  humanoidBodyType,
  humanoidBodyTypeLabels,
} from "../../data/figures/persons/humanoidBodyData";

export function FiguresGeneralInterface() {
  var figureContext = useContext(HumanoidFigureContext);

  function onNameChange(newValue: string) {
    figureContext!.updateSelected({
      ...figureContext!.selectedData!,
      name: newValue,
    });
  }

  const onHeadTypeChange = (newValue: humanoidHeadType) => {
    // TODO Construct Head and add

    figureContext!.updateSelected({
      ...figureContext!.selectedData!,
      headType: newValue,
    });
  };

  function onUpperBodyTypeChange(newValue: humanoidBodyType): void {
    // TODO Construct Body and add

    figureContext!.updateSelected({
      ...figureContext!.selectedData!,
      bodyType: newValue,
    });
  }

  // TODO Add Lower Body
  return (
    <Box
      display="grid"
      gridTemplateAreas="
        'Name'
        'Hint'
        'Head'
        'UpperBody'
        'LowerBody'
        '.'
        "
      gridTemplateRows="auto auto auto auto auto 1fr"
      gap={2}
    >
      <Box gridArea="Name">
        <NameField
          value={figureContext!.selectedData!.name}
          onChange={onNameChange}
        />
      </Box>
      <Box gridArea="Hint">
        <Typography>
          Changing base types will result in loss of selected options in tabs
          below.
        </Typography>
      </Box>
      <Box gridArea="Head">
        <TypeSelector
          selectedValue={figureContext!.selectedData!.headType}
          onChange={onHeadTypeChange}
          values={humanoidHeadTypeLabels}
          label="Head"
        />
      </Box>
      <Box gridArea="UpperBody">
        <TypeSelector
          selectedValue={figureContext!.selectedData!.bodyType}
          onChange={onUpperBodyTypeChange}
          values={humanoidBodyTypeLabels}
          label="Upper Body"
        />
      </Box>
    </Box>
  );
}
