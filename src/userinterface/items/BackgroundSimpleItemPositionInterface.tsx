import { Box } from "@mui/material";
import { useContext } from "react";
import { BackgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import { MoveableElementInterfaceBase } from "../bases/MoveableElementInterfaceBase";
import { SizeableElementInterfaceBase } from "../bases/SizeableElementInterfaceBase";
import { SkewableInterfaceBase } from "../bases/SkewableInterfaceBase";

export function BackgroundSimpleItemPositionInterface() {
    var itemContext = useContext(BackgroundSimpleItemContext);

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Position'
                'Scaling' 
                'Skew'
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Position"
            >
                <MoveableElementInterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected}
                />
            </Box>

            <Box
                gridArea="Scaling"
            >
                <SizeableElementInterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected}
                />
            </Box>

            <Box
                gridArea="Skew"
            >
                <SkewableInterfaceBase
                    value={itemContext!.selectedData!}
                    onChange={itemContext!.updateSelected}
                />
            </Box>
        </Box>
    )
}