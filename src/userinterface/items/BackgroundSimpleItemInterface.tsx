import { useContext } from "react";
import { backgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import { Box, Divider } from "@mui/material";
import { CreateNewSimpleItemData } from "../../helper/factory";
import { SelectedTabInterface } from "../../components/SelectedTabInterface";
import { NameField } from "../../components/elementInterface/NameField";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import { simpleItemDataType, simpleItemDataTypes } from "../../data/items/simpleItemData";
import { DoesSimpleItemUseColors } from "../../helper/colorUseDecider";
import { ColorableElement5InterfaceBase } from "../bases/ColorableElementInterfaceBase";
import { LayerSelector } from "../../components/elementInterface/LayerSelector";
import { MoveableElementInterfaceBase } from "../bases/MoveableElementInterfaceBase";
import { SizeableElementInterfaceBase } from "../bases/SizeableElementInterfaceBase";
import { HasBorderInterfaceBase } from "../bases/HasBorderInterfaceBase";
import { HasOpacityInterfaceBase } from "../bases/HasOpacityInterfaceBase";
import { SkewableInterfaceBase } from "../bases/SkewableInterfaceBase";

export function BackgroundSimpleItemInterface() {
    var itemContext = useContext(backgroundSimpleItemContext);

    function onNameChange(newValue: string) {
        itemContext.updateSelected({ ...itemContext.selectedData!, name: newValue });
    }

    function setCurrentLayer(newValue: number) {
        itemContext.updateSelected({ ...itemContext.selectedData!, layerPosition: newValue });
    }

    const onTypeChange = (newValue: simpleItemDataType) => {
        const useColors = DoesSimpleItemUseColors(newValue);

        itemContext.updateSelected({
            ...itemContext.selectedData!,
            simpleItemType: newValue,
            color2IsActive: useColors.useColor2,
            color3IsActive: useColors.useColor3,
            color4IsActive: useColors.useColor4,
            color5IsActive: useColors.useColor5
        });
    };

    return (
        <SelectedTabInterface
            dataContext={itemContext}
            createNew={CreateNewSimpleItemData} >
            {itemContext.selectedData !== null &&
                <Box
                    display="grid"
                    gridTemplateAreas="
                'Name' 
                'Type' 
                'Colors' 
                'Opacity'
                'Divider'
                'LayerPosition'
                'Position'
                'Scaling' 
                'Skew'
                'Border'
                "
                    gridTemplateColumns="auto"
                    gap={4}>

                    <Box
                        gridArea="Divider">
                        <Divider />
                    </Box>

                    <Box
                        gridArea="Name">
                        <NameField
                            value={itemContext.selectedData!.name}
                            onChange={onNameChange} />
                    </Box>

                    <Box
                        gridArea="Type">
                        <TypeSelector
                            selectedValue={itemContext.selectedData!.simpleItemType}
                            onChange={onTypeChange}
                            values={simpleItemDataTypes}
                        />
                    </Box>

                    <Box
                        gridArea="Colors">
                        <ColorableElement5InterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected} />
                    </Box>

                    <Box
                        gridArea="LayerPosition"
                    >
                        <LayerSelector
                            value={itemContext!.selectedData!.layerPosition}
                            onChange={setCurrentLayer}
                        />
                    </Box>

                    <Box
                        gridArea="Position"
                    >
                        <MoveableElementInterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected}
                        />
                    </Box>

                    <Box
                        gridArea="Scaling"
                    >
                        <SizeableElementInterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected}
                        />
                    </Box>

                    <Box
                        gridArea="Skew"
                    >
                        <SkewableInterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected}
                        />
                    </Box>

                    <Box
                        gridArea="Border"
                    >
                        <HasBorderInterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected}
                        />
                    </Box>

                    <Box
                        gridArea="Opacity"
                    >
                        <HasOpacityInterfaceBase
                            value={itemContext.selectedData!}
                            onChange={itemContext.updateSelected}
                        />
                    </Box>
                </Box>
            }
        </SelectedTabInterface>
    )
}