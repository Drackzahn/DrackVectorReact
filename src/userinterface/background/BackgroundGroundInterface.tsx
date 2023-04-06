import { useContext } from "react";
import { backgroundGroundData, backgroundGroundType } from "../../data/backgroundGroundData";
import { Box, Button, Divider, Select, TextField, Typography } from "@mui/material";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "../../helper/colorUseDecider";
import { CreateNewBackgroundGroundData } from "../../helper/factory";
import { backgroundGroundContext } from "../../data/context/backgroundGroundContext";
import { DataSelectorHandler } from "../../components/DataSelectorHandler";

export function BackgroundGroundInterface() {
    var groundContext = useContext(backgroundGroundContext);

    const backgroundGroundTypes = [
        {
            value: backgroundGroundType.flatColor,
            label: "Flat"
        }
    ]

    function setFirstColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, firstColor: newValue });
    }

    function setSecondColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, secondColor: newValue });
    }

    function setThirdColor(newValue: string) {
        groundContext.updateSelected({ ...groundContext.selectedData!, thirdColor: newValue });
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

    const onTypeChange = (newValue: backgroundGroundType) => {
        const useSecondColor = DoesBackgroundGroundUseSecondColor(newValue);
        const useThirdColor = DoesBackgroundGroundUseThirdColor(newValue);

        groundContext.updateSelected({ ...groundContext.selectedData!, type: newValue, useSecondColor: useSecondColor, useThirdColor: useThirdColor });
    };

    return (
        <Box
            display="grid"
            gridTemplateAreas="'dataArea selectionArea'"
            gridTemplateColumns="auto auto"
            gap={4}>

            <Box
                gridArea="selectionArea"
                borderLeft={1}
                padding={2}>
                <DataSelectorHandler dataContext={groundContext}
                    createNew={CreateNewBackgroundGroundData} />
            </Box>

            <Box
                gridArea="dataArea"
                display="grid"
                gridTemplateAreas="'Name .' 'Type LayerPosition' 'Colors Colors' 'Divider Divider' 'VerticalPositon .'"
                gridTemplateColumns="auto auto"
                gap={4}>

                <Box
                    gridArea="Divider">
                    <Divider />
                </Box>

                <Box
                    gridArea="Name">
                    {groundContext.selectedData !== null &&
                        <TextField
                            label="Name"
                            fullWidth
                            value={groundContext.selectedData!.name}
                            onChange={(event) => onNameChange((event.target.value))}
                        />
                    }
                </Box>

                <Box
                    gridArea="Type">
                    {groundContext.selectedData !== null &&
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
                    }
                </Box>

                <Box
                    gridArea="Colors"
                    display="grid"
                    gridTemplateAreas="'First Second Third .'"
                    gridTemplateColumns="1fr 1fr 1fr 1fr">
                    <Box
                        gridArea="First"
                    >
                        {groundContext.selectedData !== null &&
                            <ColorBox color={groundContext.selectedData!.firstColor}
                                setColor={setFirstColor}
                                isActive={true} />
                        }
                    </Box>
                    <Box
                        gridArea="Second"
                    >
                        {groundContext.selectedData !== null &&
                            <ColorBox color={groundContext.selectedData!.secondColor}
                                setColor={setSecondColor}
                                isActive={groundContext.selectedData!.useSecondColor} />
                        }
                    </Box>
                    <Box
                        gridArea="Third"
                    >
                        {groundContext.selectedData !== null &&
                            <ColorBox color={groundContext.selectedData!.thirdColor}
                                setColor={setThirdColor}
                                isActive={groundContext.selectedData!.useThirdColor} />
                        }
                    </Box>
                </Box>

                <Box
                    gridArea="LayerPosition"
                >
                    {groundContext.selectedData !== null &&
                        <TextField
                            value={groundContext.selectedData.layerPosition}
                            onChange={(event) => setCurrentLayer(Number(event.target.value))}
                            fullWidth
                            type="number"
                            label="Layer"
                        />
                    }
                </Box>

                <Box
                    gridArea="VerticalPositon"
                >
                    {groundContext.selectedData !== null &&
                        <TextField
                            value={groundContext.selectedData.verticalPosition}
                            onChange={(event) => setVerticalPositionLayer(Number(event.target.value))}
                            fullWidth
                            type="number"
                            label="Vertical Position"
                        />
                    }
                </Box>

            </Box>
        </Box>
    )
}