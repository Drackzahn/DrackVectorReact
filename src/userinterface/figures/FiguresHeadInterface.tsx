import { useContext } from "react";
import { HumanoidFigureContext } from "../../data/context/humanoidFigureContext";
import {
  humanHead,
  humanHeadType,
  humanHeadTypeLabels,
  humanoidHeadType,
} from "../../data/figures/persons/humanoidHeadData";
import { Box, Switch } from "@mui/material";
import { HasBorderInterfaceBase } from "../bases/HasBorderInterfaceBase";
import { MoveableElementInterfaceBase } from "../bases/MoveableElementInterfaceBase";
import { SizeableElementInterfaceBase } from "../bases/SizeableElementInterfaceBase";
import { ColorBox } from "../../components/ColorBox";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import { DrackSwitch } from "../../components/elementInterface/DrackSwitch";

export function FiguresHeadInterface() {
  var figureContext = useContext(HumanoidFigureContext);

  if (
    figureContext!.selectedData === undefined ||
    figureContext!.selectedData === null
  )
    return <></>;

  if (figureContext!.selectedData!.headType === humanoidHeadType.humanoidHead) {
    return <HumanHeadInterface />;
  }

  return <></>;
}

function HumanHeadInterface() {
  var figureContext = useContext(HumanoidFigureContext);

  function updateHead(newHead: humanHead) {
    figureContext!.updateSelected({
      ...figureContext!.selectedData!,
      head: newHead,
    });
  }

  function setSkinColor(value: string) {
    updateHead({
      ...figureContext!.selectedData!.head!,
      skinColorHex: value,
    });
  }

  function setOverrideSkinColor(value: boolean) {
    updateHead({
      ...figureContext!.selectedData!.head!,
      overrideSkinColor: value,
    });
  }

  function setFormType(value: humanHeadType) {
    updateHead({
      ...figureContext!.selectedData!.head!,
      headType: value,
    });
  }

  return (
    <Box
      display="grid"
      gridTemplateAreas="
        'HeadType'
        'Color'
        'Border'
        'Position'
        'Size'
        "
      width="400px"
      gap={2}
    >
      <Box gridArea="HeadType">
        <TypeSelector
          label="Form"
          onChange={setFormType}
          selectedValue={figureContext!.selectedData!.head!.headType}
          values={humanHeadTypeLabels}
        />
      </Box>
      <Box
        gridArea="Color"
        display="grid"
        gridTemplateAreas="'SkinColor Override'"
      >
        <Box gridArea="SkinColor">
          <ColorBox
            color={figureContext!.selectedData!.head.skinColorHex}
            setColor={setSkinColor}
            isActive={true}
          />
        </Box>
        <Box gridArea="HeadOverrideType">
          <DrackSwitch
            label="Override Color"
            isChecked={figureContext!.selectedData!.head.overrideSkinColor}
            onChange={setOverrideSkinColor}
          />
        </Box>
      </Box>
      <Box gridArea="Border">
        <HasBorderInterfaceBase
          value={figureContext!.selectedData!.head}
          onChange={updateHead}
        />
      </Box>
      <Box gridArea="Position">
        <MoveableElementInterfaceBase
          value={figureContext!.selectedData!.head}
          onChange={updateHead}
        />
      </Box>
      <Box gridArea="Size">
        <SizeableElementInterfaceBase
          value={figureContext!.selectedData!.head}
          onChange={updateHead}
        />
      </Box>
    </Box>
  );
}
