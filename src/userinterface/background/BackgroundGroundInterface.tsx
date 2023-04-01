import { useContext, useEffect, useState } from "react";
import { backgroundGroundData, backgroundGroundType } from "../../data/backgroundGroundData";
import { DataContext } from "../../data/context/dataContext";
import { Box, Button, Divider, MenuItem, Select, TextField, Typography } from "@mui/material";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "../../helper/colorUseDecider";
import { CreateNewBackgroundGroundData } from "../../helper/factory";

export function BackgroundGroundInterface() {
    var data = useContext(DataContext);

    const backgroundGroundTypes = [
        {
            value: backgroundGroundType.flatColor,
            label: "Flat"
        }
    ]

    const [currentSelectedGround, setCurrentSelectedGround] = useState<backgroundGroundData | null>(data?.background.selectedGroundData ?? null);
    //const [grounds, setGrounds] = useState<backgroundGroundData[]>(data?.background.groundDatas ?? []);

    function setFirstColor(newValue: string) {
        setCurrentSelectedGround({ ...currentSelectedGround!, firstColor: newValue });
    }

    function setSecondColor(newValue: string) {
        setCurrentSelectedGround({ ...currentSelectedGround!, secondColor: newValue });
    }

    function setThirdColor(newValue: string) {
        setCurrentSelectedGround({ ...currentSelectedGround!, thirdColor: newValue });
    }

    function onNameChange(newValue: string) {
        setCurrentSelectedGround({ ...currentSelectedGround!, name: newValue });
    }

    function addNewGround() {
        const newValue = CreateNewBackgroundGroundData();
        //setGrounds(grounds.map(el => (el.id === currentSelectedGround?.id ? Object.assign({}, el, { currentSelectedGround }) : el)))
        setCurrentSelectedGround(newValue);
    }

    function deleteGround() {
        //TODO
    }

    function copyGround() {
        //TODO
    }

    function setCurrentLayer(newValue: number) {
        setCurrentSelectedGround({ ...currentSelectedGround!, layerPosition: newValue });
    }

    function setVerticalPositionLayer(newValue: number) {
        setCurrentSelectedGround({ ...currentSelectedGround!, verticalPosition: newValue });
    }

    const onTypeChange = (newValue: backgroundGroundType) => {
        const useSecondColor = DoesBackgroundGroundUseSecondColor(newValue);
        const useThirdColor = DoesBackgroundGroundUseThirdColor(newValue);

        setCurrentSelectedGround({ ...currentSelectedGround!, type: newValue, useSecondColor: useSecondColor, useThirdColor: useThirdColor });
    };

    useEffect(() => {
        if (currentSelectedGround === null)
            return;

        let grounds = data!.background.groundDatas;
        if (!grounds.some(x => x.id === currentSelectedGround.id)) {
            grounds.push(currentSelectedGround!);
        } else {
            grounds = grounds.map(x => {
                if (x.id === currentSelectedGround.id) {
                    return currentSelectedGround;
                }

                return x;
            })
        }

        const backgroundContainer = { ...data!.background!, selectedGroundData: currentSelectedGround, groundDatas: grounds }
        data?.setBackgroundContainer(backgroundContainer);
    }, [currentSelectedGround]);

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
                    onClick={copyGround}
                >
                    <Typography>Duplicate</Typography>
                </Button>
            </Box>

            <Box
                gridArea="Name">
                {currentSelectedGround !== null &&
                    <TextField
                        label="Name"
                        fullWidth
                        value={currentSelectedGround!.name}
                        onChange={(event) => onNameChange((event.target.value))}
                    />
                }
            </Box>

            <Box
                gridArea="Type">
                {currentSelectedGround !== null &&
                    <TextField
                        select
                        label="Type"
                        fullWidth
                        value={currentSelectedGround!.type}
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
                    {currentSelectedGround !== null &&
                        <ColorBox color={currentSelectedGround!.firstColor}
                            setColor={setFirstColor}
                            isActive={true} />
                    }
                </Box>
                <Box
                    gridArea="Second"
                >
                    {currentSelectedGround !== null &&
                        <ColorBox color={currentSelectedGround!.secondColor}
                            setColor={setSecondColor}
                            isActive={currentSelectedGround!.useSecondColor} />
                    }
                </Box>
                <Box
                    gridArea="Third"
                >
                    {currentSelectedGround !== null &&
                        <ColorBox color={currentSelectedGround!.thirdColor}
                            setColor={setThirdColor}
                            isActive={currentSelectedGround!.useThirdColor} />
                    }
                </Box>
            </Box>

            <Box
                gridArea="LayerPosition"
            >
                {currentSelectedGround !== null &&
                    <TextField
                        value={currentSelectedGround.layerPosition}
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
                {currentSelectedGround !== null &&
                    <TextField
                        value={currentSelectedGround.verticalPosition}
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