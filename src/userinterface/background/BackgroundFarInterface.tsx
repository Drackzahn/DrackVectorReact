import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { backgroundFarType } from "../../data/backgroundFarData";
import { ColorBox } from "../../components/ColorBox";
import { DoesBackgroundFarTypeUseSecondColor } from "../../helper/colorUseDecider";
import { backgroundFarContext } from "../../data/context/backgroundFarContext";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";

export function BackgroundFarInterface() {
    var { backgroundFarData, setBackgroundFarData } = useContext(backgroundFarContext);

    const backgroundFarTypes = [
        {
            value: backgroundFarType.blueSky,
            label: "Blue Sky"
        }
    ]

    function setBackgroundType(value: backgroundFarType) {
        const useSecondColor = DoesBackgroundFarTypeUseSecondColor(value);

        setBackgroundFarData({ ...backgroundFarData, backgroundType: value, useSecondColor: useSecondColor })
    }

    function setFirstColor(value: string) {
        setBackgroundFarData({ ...backgroundFarData, firstColor: value })
    }

    function setSecondColor(value: string) {
        setBackgroundFarData({ ...backgroundFarData, secondColor: value })
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'Type .' 'FirstColor SecondColor'"
            gridTemplateColumns="auto auto"
            gap={4}>
            <Box
                gridArea="Type">
                <TypeSelector
                    selectedValue={backgroundFarData.backgroundType}
                    onChange={setBackgroundType}
                    values={backgroundFarTypes}
                />
            </Box>
            <Box
                gridArea="FirstColor">
                <ColorBox color={backgroundFarData.firstColor}
                    setColor={setFirstColor}
                    isActive={true} />
            </Box>
            <Box
                gridArea="SecondColor">
                <ColorBox color={backgroundFarData.secondColor}
                    setColor={setSecondColor}
                    isActive={backgroundFarData.useSecondColor} />
            </Box>
        </Box >
    )
}