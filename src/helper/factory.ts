import { v4 as uuidv4 } from 'uuid'
import { backgroundGroundData, backgroundGroundType } from "../data/backgroundGroundData";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "./colorUseDecider";

export function CreateNewBackgroundGroundData(): backgroundGroundData {
    const type = backgroundGroundType.flatColor;

    const firstColor = "#FFFFFF"
    const secondColor = "#FFFFFF"
    const thirdColor = "#FFFFFF"

    const useSecondColor = DoesBackgroundGroundUseSecondColor(type);
    const useThirdColor = DoesBackgroundGroundUseThirdColor(type);

    const verticalPosition = 0;
    const layerPosition = 0;

    const name = "My new Ground"
    const id = uuidv4();

    return {
        firstColor: firstColor,
        secondColor: secondColor,
        thirdColor: thirdColor,
        useSecondColor: useSecondColor,
        useThirdColor: useThirdColor,
        verticalPosition: verticalPosition,
        name: name,
        type: type,
        layerPosition: layerPosition,
        id: id
    }
}