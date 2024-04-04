import { Box } from "@mui/material";
import { useContext } from "react";
import { BackgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import { ColorableElement5InterfaceBase } from "../bases/ColorableElementInterfaceBase";
import { HasBorderInterfaceBase } from "../bases/HasBorderInterfaceBase";
import { HasOpacityInterfaceBase } from "../bases/HasOpacityInterfaceBase";

export function BackgroundSimpleItemStyleInterface() {
    var itemContext = useContext(BackgroundSimpleItemContext);

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Colors' 
                'Opacity'
                'Border'
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Colors">
                <ColorableElement5InterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected} />
            </Box>

            <Box
                gridArea="Border"
            >
                <HasBorderInterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected}
                />
            </Box>

            <Box
                gridArea="Opacity"
            >
                <HasOpacityInterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected}
                />
            </Box>
        </Box>
    )
}