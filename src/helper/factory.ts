import { v4 as uuidv4 } from 'uuid'
import { backgroundGroundData, backgroundGroundType } from "../data/backgroundGroundData";
import { DoesBackgroundGroundUseSecondColor, DoesBackgroundGroundUseThirdColor } from "./colorUseDecider";
import { StandardHeight } from '../canvas/DrackVectorConstants';

export function CreateNewBackgroundGroundData(): backgroundGroundData {
    const type = backgroundGroundType.flatColor;

    const firstColor = "#FFFFFF"
    const secondColor = "#FFFFFF"
    const thirdColor = "#FFFFFF"

    const useSecondColor = DoesBackgroundGroundUseSecondColor(type);
    const useThirdColor = DoesBackgroundGroundUseThirdColor(type);

    const verticalPosition = StandardHeight / 2;
    const layerPosition = 0;

    const name = "My new Ground"
    const id = uuidv4();

    return {
        color1Hex: firstColor,
        color2Hex: secondColor,
        color3Hex: thirdColor,
        color2IsActive: useSecondColor,
        color3IsActive: useThirdColor,
        verticalPosition: verticalPosition,
        name: name,
        type: type,
        layerPosition: layerPosition,
        height: StandardHeight,
        id: id
    }
}