import { TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useRef, useState } from "react";
import { backgroundFarData, backgroundFarType } from "../../data/backgroundFarData";
import { DataContext } from "../../data/context/dataContext";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundFarTypeUseSecondColor } from "../../helper/colorUseDecider";

export function BackgroundFarInterface() {
    var data = useContext(DataContext);

    const backgroundFarTypes = [
        {
            value: backgroundFarType.blueSky,
            label: "Blue Sky"
        }
    ]

    const backgroundFarDataRef = useRef<backgroundFarData>(data?.background.farData!);
    const [backgroundType, setBackgroundType] = useState<backgroundFarType>(data?.background.farData.backgroundType ?? backgroundFarType.blueSky);
    const [firstColor, setFirstColor] = useState<string>(backgroundFarDataRef.current.firstColor);
    const [secondColor, setSecondColor] = useState<string>(backgroundFarDataRef.current.secondColor);
    const [useSecondColor, setUseSecondColor] = useState<boolean>(true);

    const onTypeChange = (newValue: backgroundFarType) => {
        backgroundFarDataRef.current.useSecondColor = DoesBackgroundFarTypeUseSecondColor(newValue);
        setUseSecondColor(backgroundFarDataRef.current.useSecondColor);
        setBackgroundType(newValue);
    };

    useEffect(() => {
        backgroundFarDataRef.current.backgroundType = backgroundType;
        const backgroundContainer = { ...data?.background!, backgroundFarData: backgroundFarDataRef.current }
        data?.setBackgroundContainer(backgroundContainer);
    }, [backgroundType]);

    useEffect(() => {
        backgroundFarDataRef.current.firstColor = firstColor;
        const backgroundContainer = { ...data?.background!, backgroundFarData: backgroundFarDataRef.current }
        data?.setBackgroundContainer(backgroundContainer);
    }, [firstColor]);

    useEffect(() => {
        backgroundFarDataRef.current.secondColor = secondColor;
        const backgroundContainer = { ...data?.background!, backgroundFarData: backgroundFarDataRef.current }
        data?.setBackgroundContainer(backgroundContainer);
    }, [secondColor]);

    return (
        <Box
            display="grid"
            gridTemplateAreas="'Type .' 'FirstColor SecondColor'"
            gridTemplateColumns="auto auto"
            gap={4}>
            <Box
                gridArea="Type">
                <TextField
                    select
                    label="Type"
                    fullWidth
                    value={backgroundType}
                    onChange={(event) => onTypeChange((Number(event.target.value)))}
                >
                    {backgroundFarTypes.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </Box>
            <Box
                gridArea="FirstColor">
                <ColorBox color={firstColor}
                    setColor={setFirstColor}
                    isActive={true} />
            </Box>
            <Box
                gridArea="SecondColor">
                <ColorBox color={secondColor}
                    setColor={setSecondColor}
                    isActive={useSecondColor} />
            </Box>
        </Box >
    )
}