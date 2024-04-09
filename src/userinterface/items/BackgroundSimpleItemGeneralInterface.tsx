import { Box } from "@mui/material";
import { useContext } from "react";
import { LayerSelector } from "../../components/elementInterface/LayerSelector";
import { NameField } from "../../components/elementInterface/NameField";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import { BackgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import {
  simpleItemDataType,
  simpleItemDataTypes,
} from "../../data/figures/items/simpleItemData";
import { DoesSimpleItemUseColors } from "../../helper/colorUseDecider";

export function BackgroundSimpleItemGeneralInterface() {
  var itemContext = useContext(BackgroundSimpleItemContext);

  function onNameChange(newValue: string) {
    itemContext!.updateSelected({
      ...itemContext!.selectedData!,
      name: newValue,
    });
  }

  function setCurrentLayer(newValue: number) {
    itemContext!.updateSelected({
      ...itemContext!.selectedData!,
      layerPosition: newValue,
    });
  }

  const onTypeChange = (newValue: simpleItemDataType) => {
    const useColors = DoesSimpleItemUseColors(newValue);

    itemContext!.updateSelected({
      ...itemContext!.selectedData!,
      simpleItemType: newValue,
      color2IsActive: useColors.useColor2,
      color3IsActive: useColors.useColor3,
      color4IsActive: useColors.useColor4,
      color5IsActive: useColors.useColor5,
    });
  };

  return (
    <Box
      display="grid"
      gridTemplateAreas="
                'Name' 
                'Type' 
                'LayerPosition'
                "
      gridTemplateColumns="auto"
      gap={4}
    >
      <Box gridArea="Name">
        <NameField
          value={itemContext!.selectedData!.name}
          onChange={onNameChange}
        />
      </Box>

      <Box gridArea="Type">
        <TypeSelector
          selectedValue={itemContext!.selectedData!.simpleItemType}
          onChange={onTypeChange}
          values={simpleItemDataTypes}
          label="Type"
        />
      </Box>

      <Box gridArea="LayerPosition">
        <LayerSelector
          value={itemContext!.selectedData!.layerPosition}
          onChange={setCurrentLayer}
        />
      </Box>
    </Box>
  );
}
