import { useContext } from "react";
import { backgroundGroundData, backgroundGroundType } from "../../data/backgroundGroundData";
import { Box, Button, Divider, Select, TextField, Typography } from "@mui/material";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "../../helper/colorUseDecider";
import { CreateNewBackgroundGroundData } from "../../helper/factory";
import { backgroundGroundContext } from "../../data/context/backgroundGroundContext";
import { DataSelectorHandler } from "../../components/DataSelectorHandler";
import { DrackSlider } from "../../components/DrackSlider";
import { StandardHeight } from "../../canvas/DrackVectorConstants";

export function BackgroundGroundInterface() {
    var groundContext = useContext(backgroundGroundContext);

    const backgroundGroundTypes = [
        {
            value: backgroundGroundType.flatColor,
            label: "Flat"
        }
    ]

    function setFirstColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, color1Hex: newValue });
    }

    function setSecondColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, color2Hex: newValue });
    }

    function setThirdColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, color3Hex: newValue });
    }

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
        const useSecondColor = DoesBackgroundGroundUseSecondColor(newValue);
        const useThirdColor = DoesBackgroundGroundUseThirdColor(newValue);

        groundContext.updateSelected({
            ...groundContext.selectedData!,
            type: newValue,
            color2IsActive: useSecondColor,
            color3IsActive: useThirdColor
        });
    };

    return (
        <Box
            display="grid"
            gridTemplateAreas="'dataArea selectionArea'"
            gridTemplateColumns="auto auto"
            gridTemplateRows="1fr"
            gap={4}>

            <Box
                gridArea="selectionArea"
                padding={2}>
                <DataSelectorHandler dataContext={groundContext}
                    createNew={CreateNewBackgroundGroundData} />
            </Box>

            {groundContext.selectedData !== null &&
                <Box
                    gridArea="dataArea"
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
                        <TextField
                            label="Name"
                            fullWidth
                            value={groundContext.selectedData!.name}
                            onChange={(event) => onNameChange((event.target.value))}
                        />
                    </Box>

                    <Box
                        gridArea="Type">
                        <TextField
                            select
                            label="Type"
                            fullWidth
                            value={groundContext.selectedData!.type}
                            onChange={(event) => onTypeChange((Number(event.target.value)))}
                        >
                            {backgroundGroundTypes.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </TextField>
                    </Box>

                    <Box
                        gridArea="Colors"
                        display="grid"
                        gridTemplateAreas="'First Second Third'"
                        gridTemplateColumns="1fr 1fr 1fr">
                        <Box
                            gridArea="First"
                        >
                            <ColorBox color={groundContext.selectedData!.color1Hex}
                                setColor={setFirstColor}
                                isActive={true} />
                        </Box>
                        <Box
                            gridArea="Second"
                        >
                            <ColorBox color={groundContext.selectedData!.color2Hex}
                                setColor={setSecondColor}
                                isActive={groundContext.selectedData!.color2IsActive} />
                        </Box>
                        <Box
                            gridArea="Third"
                        >
                            <ColorBox color={groundContext.selectedData!.color3Hex}
                                setColor={setThirdColor}
                                isActive={groundContext.selectedData!.color3IsActive} />
                        </Box>
                    </Box>

                    <Box
                        gridArea="LayerPosition"
                    >
                        <TextField
                            value={groundContext.selectedData.layerPosition}
                            onChange={(event) => setCurrentLayer(Number(event.target.value))}
                            fullWidth
                            type="number"
                            label="Layer"
                        />
                    </Box>

                    <Box
                        gridArea="VerticalPositon"
                    >
                        <DrackSlider
                            label="Vertical Position"
                            maxValue={StandardHeight}
                            minValue={0}
                            selectedValue={groundContext.selectedData.verticalPosition}
                            updatedSelectedValue={setVerticalPositionLayer} />
                    </Box>

                    <Box
                        gridArea="Height"
                    >
                        <DrackSlider
                            label="Height"
                            maxValue={StandardHeight}
                            minValue={0}
                            selectedValue={groundContext.selectedData.height}
                            updatedSelectedValue={setHeight} />
                    </Box>
                </Box>
            }
        </Box>
    )
}