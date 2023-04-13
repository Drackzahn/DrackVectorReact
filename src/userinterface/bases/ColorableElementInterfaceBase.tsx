import { Box } from "@mui/material";
import { IColorableElement3, IColorableElement5 } from "../../data/baseInterfaces/ColorableElement";
import { ColorBox } from "../../components/ColorBox";

export interface IColorableElementInterfaceBaseProps<T> {
    value: T;
    onChange: (newValue: T) => void;
}

export function ColorableElement3InterfaceBase<T extends IColorableElement3>(props: IColorableElementInterfaceBaseProps<T>) {

    function setFirstColor(newValue: string) {
        props.onChange({ ...props.value, color1Hex: newValue });
    }

    function setSecondColor(newValue: string) {
        props.onChange({ ...props.value, color2Hex: newValue });
    }

    function setThirdColor(newValue: string) {
        props.onChange({ ...props.value, color3Hex: newValue });
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'First Second Third'"
            gridTemplateColumns="1fr 1fr 1fr">
            <Box
                gridArea="First"
            >
                <ColorBox color={props.value.color1Hex}
                    setColor={setFirstColor}
                    isActive={true} />
            </Box>
            <Box
                gridArea="Second"
            >
                <ColorBox color={props.value.color2Hex}
                    setColor={setSecondColor}
                    isActive={props.value.color2IsActive} />
            </Box>
            <Box
                gridArea="Third"
            >
                <ColorBox color={props.value.color3Hex}
                    setColor={setThirdColor}
                    isActive={props.value.color3IsActive} />
            </Box>
        </Box>
    )
}

export function ColorableElement5InterfaceBase<T extends IColorableElement5>(props: IColorableElementInterfaceBaseProps<T>) {

    function setFirstColor(newValue: string) {
        props.onChange({ ...props.value, color1Hex: newValue });
    }

    function setSecondColor(newValue: string) {
        props.onChange({ ...props.value, color2Hex: newValue });
    }

    function setThirdColor(newValue: string) {
        props.onChange({ ...props.value, color3Hex: newValue });
    }

    function setColor4(newValue: string) {
        props.onChange({ ...props.value, color4Hex: newValue });
    }

    function setColor5(newValue: string) {
        props.onChange({ ...props.value, color5Hex: newValue });
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'First Second Third Fourth Fifth'"
            gridTemplateColumns="1fr 1fr 1fr 1fr 1fr">
            <Box
                gridArea="First"
            >
                <ColorBox color={props.value.color1Hex}
                    setColor={setFirstColor}
                    isActive={true} />
            </Box>
            <Box
                gridArea="Second"
            >
                <ColorBox color={props.value.color2Hex}
                    setColor={setSecondColor}
                    isActive={props.value.color2IsActive} />
            </Box>
            <Box
                gridArea="Third"
            >
                <ColorBox color={props.value.color3Hex}
                    setColor={setThirdColor}
                    isActive={props.value.color3IsActive} />
            </Box>
            <Box
                gridArea="Fourth"
            >
                <ColorBox color={props.value.color4Hex}
                    setColor={setColor4}
                    isActive={props.value.color4IsActive} />
            </Box>
            <Box
                gridArea="Fifth"
            >
                <ColorBox color={props.value.color5Hex}
                    setColor={setColor5}
                    isActive={props.value.color5IsActive} />
            </Box>
        </Box>
    )
}