import { Box } from "@mui/material";
import { IMoveableElement } from "../../data/items/baseInterfaces/IMoveableElement";
import { DrackSlider } from "../../components/DrackSlider";
import { DataContext } from "../../data/context/dataContext";
import { useContext } from "react";
import { MaxMoveableDistanceOutsideBorder, StandardHeight } from "../../canvas/DrackVectorConstants";

export interface IMoveableElementInterfaceBaseProps<T> {
    value: T;
    onChange: (newValue: T) => void;
}

export function MoveableElementInterfaceBase<T extends IMoveableElement>(props: IMoveableElementInterfaceBaseProps<T>) {
    var dataContext = useContext(DataContext);

    const maxXValue = (dataContext.stageWidth * dataContext.generalScaleFactor) + MaxMoveableDistanceOutsideBorder;
    const minXValue = -MaxMoveableDistanceOutsideBorder;

    const maxYValue = StandardHeight + MaxMoveableDistanceOutsideBorder;
    const minYValue = -MaxMoveableDistanceOutsideBorder;

    function setX(newValue: number) {
        props.onChange({ ...props.value, positionX: newValue });
    }

    function setY(newValue: number) {
        props.onChange({ ...props.value, positionY: newValue });
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="'positionX' 'positionY'">
            <Box gridArea="positionX">
                <DrackSlider
                    label="X Position"
                    maxValue={maxXValue}
                    minValue={minXValue}
                    selectedValue={props.value.positionX}
                    updatedSelectedValue={setX} />
            </Box>
            <Box gridArea="positionY">
                <DrackSlider
                    label="Y Position"
                    maxValue={maxYValue}
                    minValue={minYValue}
                    selectedValue={props.value.positionY}
                    updatedSelectedValue={setY} />
            </Box>
        </Box>
    )
}