import { StandardHeight } from "../canvas/DrackVectorConstants";
import { IData } from "../data/context/dataContext";

export function GetFillingHeight(data: IData): number {
    return StandardHeight / data.generalScaleFactor;
}

export function GetFillingWidth(data: IData): number {
    return data.stageWidth / data.generalScaleFactor;
}