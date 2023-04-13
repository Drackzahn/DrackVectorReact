import { v4 as uuidv4 } from 'uuid'
import { backgroundGroundData, backgroundGroundType } from "../data/backgroundGroundData";
import { StandardHeight } from '../canvas/DrackVectorConstants';
import { simpleItemData, simpleItemDataType } from '../data/items/simpleItemData';
import { DoesBackgroundGroundUseColors, DoesSimpleItemUseColors } from './colorUseDecider';

export function CreateNewBackgroundGroundData(): backgroundGroundData {
    const type = backgroundGroundType.flatColor;

    const firstColor = "#FFFFFF"
    const secondColor = "#FFFFFF"
    const thirdColor = "#FFFFFF"

    const colorUse = DoesBackgroundGroundUseColors(type);

    const verticalPosition = StandardHeight / 2;
    const layerPosition = 0;

    const name = "My new Ground"
    const id = uuidv4();

    return {
        color1Hex: firstColor,
        color2Hex: secondColor,
        color3Hex: thirdColor,
        color2IsActive: colorUse.useColor2,
        color3IsActive: colorUse.useColor3,
        verticalPosition: verticalPosition,
        name: name,
        type: type,
        layerPosition: layerPosition,
        height: StandardHeight,
        id: id
    }
}

export function CreateNewSimpleItemData(): simpleItemData {
    const type = simpleItemDataType.circle;

    const startColor = "#FFFFFF";
    const colorUse = DoesSimpleItemUseColors(type);

    const name = "My Item"
    const id = uuidv4();

    const layerPosition = 0;

    const startPosition = StandardHeight / 2;

    return {
        color1Hex: startColor,
        color2Hex: startColor,
        color3Hex: startColor,
        color4Hex: startColor,
        color5Hex: startColor,
        color2IsActive: colorUse.useColor2,
        color3IsActive: colorUse.useColor3,
        color4IsActive: colorUse.useColor4,
        color5IsActive: colorUse.useColor5,
        combineScaling: true,
        id: id,
        name: name,
        layerPosition: layerPosition,
        scaleX: 1,
        scaleY: 1,
        simpleItemType: type,
        positionX: startPosition,
        positionY: startPosition,
        borderColor: "#000000",
        borderThickness: 1,
        isBorderActive: true,
        opacity: 1
    }
}