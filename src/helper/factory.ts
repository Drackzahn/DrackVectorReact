import { v4 as uuidv4 } from "uuid";
import {
  backgroundGroundData,
  backgroundGroundType,
} from "../data/backgroundGroundData";
import { StandardHeight } from "../canvas/DrackVectorConstants";
import {
  simpleItemData,
  simpleItemDataType,
} from "../data/figures/items/simpleItemData";
import {
  DoesBackgroundGroundUseColors,
  DoesSimpleItemUseColors,
} from "./colorUseDecider";
import { humanoidData } from "../data/figures/persons/humanoidData";
import {
  humanBody,
  humanoidBodyType,
} from "../data/figures/persons/humanoidBodyData";
import {
  humanHead,
  humanHeadType,
  humanoidHeadType,
} from "../data/figures/persons/humanoidHeadData";
import { baseColors } from "./baseColors";

export function CreateNewBackgroundGroundData(): backgroundGroundData {
  const type = backgroundGroundType.flatColor;

  const colorUse = DoesBackgroundGroundUseColors(type);

  const verticalPosition = StandardHeight / 2;
  const layerPosition = 0;

  const name = "My new Ground";
  const id = uuidv4();

  return {
    color1Hex: baseColors.white,
    color2Hex: baseColors.white,
    color3Hex: baseColors.white,
    color2IsActive: colorUse.useColor2,
    color3IsActive: colorUse.useColor3,
    verticalPosition: verticalPosition,
    name: name,
    type: type,
    layerPosition: layerPosition,
    height: StandardHeight,
    id: id,
  };
}

export function CreateHumanBody(): humanBody {
  // TODO Define Numbers
  return {
    bellyHeight: 1,
    bodyHeight: 1,
    combineScaling: true,
    hipsWidth: 1,
    scaleX: 1,
    scaleY: 1,
    shoulderWidth: 1,
  };
}

export function CreateHumanHead(): humanHead {
  return {
    combineScaling: true,
    headType: humanHeadType.sharp,
    positionX: 0,
    positionY: 0,
    scaleX: 1,
    scaleY: 1,
    borderColor: baseColors.black,
    borderThickness: 1,
    isBorderActive: true,
    overrideSkinColor: true,
    skinColorHex: baseColors.humanSkin.white,
  };
}

export function CreateNewHumanoidFigureData(): humanoidData {
  return {
    body: CreateHumanBody(),
    bodyType: humanoidBodyType.humanBody,
    combineScaling: true,
    combineSkew: true,
    head: CreateHumanHead(),
    headType: humanoidHeadType.humanoidHead,
    id: uuidv4(),
    name: "Max Mustermann",
    layerPosition: 100,
    opacity: 1,
    positionX: 0,
    positionY: 0,
    scaleX: 1,
    scaleY: 1,
    skewX: 0,
    skewY: 0,
  };
}

export function CreateNewSimpleItemData(): simpleItemData {
  const type = simpleItemDataType.circle;

  const startColor = baseColors.white;
  const colorUse = DoesSimpleItemUseColors(type);

  const name = "My Item";
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
    borderColor: baseColors.black,
    borderThickness: 1,
    isBorderActive: true,
    opacity: 1,
    skewX: 0,
    skewY: 0,
    combineSkew: true,
  };
}
