import { useContext } from "react";
import { backgroundGroundData, backgroundGroundType } from "../../data/backgroundGroundData";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
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
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, firstColor: newValue });
    }

    function setSecondColor(newValue: string) {
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, secondColor: newValue });
    }

    function setThirdColor(newValue: string) {
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, thirdColor: newValue });
    }

    function onNameChange(newValue: string) {
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, name: newValue });
    }

    function setCurrentLayer(newValue: number) {
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, layerPosition: newValue });
    }

    function setVerticalPositionLayer(newValue: number) {
        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, verticalPosition: newValue });
    }

    function addNewGround() {
        const newValue = CreateNewBackgroundGroundData();
        groundContext.addGround(newValue);
    }

    function deleteGround() {
        if (groundContext.selectedGroundData !== null)
            groundContext.deleteGround(groundContext.selectedGroundData);
    }

    function duplicateGround() {
        if (groundContext.selectedGroundData !== null)
            groundContext.duplicateGround(groundContext.selectedGroundData);
    }

    const onTypeChange = (newValue: backgroundGroundType) => {
        const useSecondColor = DoesBackgroundGroundUseSecondColor(newValue);
        const useThirdColor = DoesBackgroundGroundUseThirdColor(newValue);

        groundContext.updateSelectedGround({ ...groundContext.selectedGroundData!, type: newValue, useSecondColor: useSecondColor, useThirdColor: useThirdColor });
    };

    function changeSelectedGround(newValue: backgroundGroundData) {
        groundContext.selectGround(newValue);
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'CurrentSelection AddButton' 'DeleteButton DuplicateButton' 'Divider Divider' 'Name .' 'Type LayerPosition' 'Colors Colors' 'Divider2 Divider2' 'VerticalPositon .'"
            gridTemplateColumns="auto auto"
            gap={4}>

            {/* <Box
                gridArea="CurrentSelection">
                {currentSelectedGround !== null &&
                    <Select
                        fullWidth
                        value={data!.background.selectedGroundData}
                        onChange={(event) => setCurrentSelectedGround((event.target.value as unknown as backgroundGroundData))}>
                        {data!.background.groundDatas.sort(x => x.layerPosition).map((option) => (
                            <option value={option.id} key={option.id}>
                                {option.layerPosition} - {option.name}
                            </option>
                        ))}
                    </Select>
                }

            </Box> */}

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
                {groundContext.selectedGroundData !== null &&
                    <TextField
                        label="Name"
                        fullWidth
                        value={groundContext.selectedGroundData!.name}
                        onChange={(event) => onNameChange((event.target.value))}
                    />
                }
            </Box>

            <Box
                gridArea="Type">
                {groundContext.selectedGroundData !== null &&
                    <TextField
                        select
                        label="Type"
                        fullWidth
                        value={groundContext.selectedGroundData!.type}
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
                    {groundContext.selectedGroundData !== null &&
                        <ColorBox color={groundContext.selectedGroundData!.firstColor}
                            setColor={setFirstColor}
                            isActive={true} />
                    }
                </Box>
                <Box
                    gridArea="Second"
                >
                    {groundContext.selectedGroundData !== null &&
                        <ColorBox color={groundContext.selectedGroundData!.secondColor}
                            setColor={setSecondColor}
                            isActive={groundContext.selectedGroundData!.useSecondColor} />
                    }
                </Box>
                <Box
                    gridArea="Third"
                >
                    {groundContext.selectedGroundData !== null &&
                        <ColorBox color={groundContext.selectedGroundData!.thirdColor}
                            setColor={setThirdColor}
                            isActive={groundContext.selectedGroundData!.useThirdColor} />
                    }
                </Box>
            </Box>

            <Box
                gridArea="LayerPosition"
            >
                {groundContext.selectedGroundData !== null &&
                    <TextField
                        value={groundContext.selectedGroundData.layerPosition}
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
                {groundContext.selectedGroundData !== null &&
                    <TextField
                        value={groundContext.selectedGroundData.verticalPosition}
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