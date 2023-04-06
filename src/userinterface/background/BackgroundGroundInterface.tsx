import { useContext } from "react";
import { backgroundGroundData, backgroundGroundType } from "../../data/backgroundGroundData";
import { Box, Button, Divider, Select, TextField, Typography } from "@mui/material";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "../../helper/colorUseDecider";
import { CreateNewBackgroundGroundData } from "../../helper/factory";
import { backgroundGroundContext } from "../../data/context/backgroundGroundContext";

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

    function addNewGround() {
        const newValue = CreateNewBackgroundGroundData();
        groundContext.add(newValue);
    }

    function deleteGround() {
        if (groundContext.selectedData !== null)
            groundContext.delete(groundContext.selectedData);
    }

    function duplicateGround() {
        if (groundContext.selectedData !== null)
            groundContext.duplicate(groundContext.selectedData);
    }

    const onTypeChange = (newValue: backgroundGroundType) => {
        const useSecondColor = DoesBackgroundGroundUseSecondColor(newValue);
        const useThirdColor = DoesBackgroundGroundUseThirdColor(newValue);

        groundContext.updateSelected({ ...groundContext.selectedData!, type: newValue, useSecondColor: useSecondColor, useThirdColor: useThirdColor });
    };

    function changeSelectedGround(newValue: backgroundGroundData) {
        groundContext.select(newValue);
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'CurrentSelection AddButton' 'DeleteButton DuplicateButton' 'Divider Divider' 'Name .' 'Type LayerPosition' 'Colors Colors' 'Divider2 Divider2' 'VerticalPositon .'"
            gridTemplateColumns="auto auto"
            gap={4}>

            <Box
                gridArea="CurrentSelection">
                {groundContext.selectedData !== null &&
                    <Select
                        fullWidth
                        value={groundContext.selectedData}
                        onChange={(event) => changeSelectedGround((event.target.value as unknown as backgroundGroundData))}>
                        {groundContext.datas.sort(x => x.layerPosition).map((option) => (
                            <option value={option.id} key={option.id}>
                                {option.layerPosition} - {option.name}
                            </option>
                        ))}
                    </Select>
                }
            </Box>

            <Box
                gridArea="Divider">
                <Divider />
            </Box>

            <Box
                gridArea="Divider2">
                <Divider />
            </Box>


            <Box
                gridArea="AddButton">
                <Button
                    variant="contained"
                    onClick={addNewGround}
                >
                    <Typography>Add</Typography>
                </Button>
            </Box>

            <Box
                gridArea="DeleteButton">
                <Button
                    variant="contained"
                    onClick={deleteGround}
                >
                    <Typography>Delete</Typography>
                </Button>
            </Box>

            <Box
                gridArea="DuplicateButton">
                <Button
                    variant="contained"
                    onClick={duplicateGround}
                >
                    <Typography>Duplicate</Typography>
                </Button>
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
    )
}