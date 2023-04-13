import { useContext } from "react";
import { backgroundGroundType, backgroundGroundTypesLocalization } from "../../data/backgroundGroundData";
import { Box, Divider } from "@mui/material";
import { DoesBackgroundGroundUseColors } from "../../helper/colorUseDecider";
import { CreateNewBackgroundGroundData } from "../../helper/factory";
import { backgroundGroundContext } from "../../data/context/backgroundGroundContext";
import { DrackSlider } from "../../components/DrackSlider";
import { StandardHeight } from "../../canvas/DrackVectorConstants";
import { NameField } from "../../components/elementInterface/NameField";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import { LayerSelector } from "../../components/elementInterface/LayerSelector";
import { SelectedTabInterface } from "../../components/SelectedTabInterface";
import { ColorableElement3InterfaceBase } from "../bases/ColorableElementInterfaceBase";

export function BackgroundGroundInterface() {
    var groundContext = useContext(backgroundGroundContext);

    function onNameChange(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, name: newValue });
    }

    function setCurrentLayer(newValue: number) {
        groundContext.updateSelected({ ...groundContext.selectedData!, layerPosition: newValue });
    }

    function setVerticalPositionLayer(newValue: number) {
        groundContext.updateSelected({ ...groundContext.selectedData!, verticalPosition: newValue });
    }

    function setHeight(newValue: number) {
        groundContext.updateSelected({ ...groundContext.selectedData!, height: newValue });
    }

    const onTypeChange = (newValue: backgroundGroundType) => {
        const { useColor2, useColor3 } = DoesBackgroundGroundUseColors(newValue);

        groundContext.updateSelected({
            ...groundContext.selectedData!,
            type: newValue,
            color2IsActive: useColor2,
            color3IsActive: useColor3
        });
    };

    return (
        <SelectedTabInterface
            dataContext={groundContext}
            createNew={CreateNewBackgroundGroundData}>
            {groundContext.selectedData !== null &&
                <Box
                    display="grid"
                    gridTemplateAreas="'Name' 'Type' 'LayerPosition' 'Colors' 'Divider' 'VerticalPositon' 'Height'"
                    gridTemplateColumns="auto"
                    gap={4}>

                    <Box
                        gridArea="Divider">
                        <Divider />
                    </Box>

                    <Box
                        gridArea="Name">
                        <NameField
                            value={groundContext.selectedData!.name}
                            onChange={onNameChange} />
                    </Box>

                    <Box
                        gridArea="Type">
                        <TypeSelector
                            selectedValue={groundContext.selectedData!.type}
                            onChange={onTypeChange}
                            values={backgroundGroundTypesLocalization}
                        />
                    </Box>

                    <Box
                        gridArea="Colors">
                        <ColorableElement3InterfaceBase
                            value={groundContext.selectedData!}
                            onChange={groundContext.updateSelected} />
                    </Box>

                    <Box
                        gridArea="LayerPosition"
                    >
                        <LayerSelector
                            value={groundContext!.selectedData!.layerPosition}
                            onChange={setCurrentLayer}
                        />
                    </Box>

                    <Box
                        gridArea="VerticalPositon"
                    >
                        <DrackSlider
                            label="Vertical Position"
                            maxValue={StandardHeight}
                            minValue={0}
                            selectedValue={groundContext!.selectedData!.verticalPosition}
                            updatedSelectedValue={setVerticalPositionLayer} />
                    </Box>

                    <Box
                        gridArea="Height"
                    >
                        <DrackSlider
                            label="Height"
                            maxValue={StandardHeight}
                            minValue={0}
                            selectedValue={groundContext!.selectedData!.height}
                            updatedSelectedValue={setHeight} />
                    </Box>
                </Box>
            }
        </SelectedTabInterface>
    )
}