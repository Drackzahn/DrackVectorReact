import { IDataBase } from "./context/iDataContext";
import { IColorableElement3 } from "./items/baseInterfaces/ColorableElement";

export interface backgroundGroundData extends IDataBase, IColorableElement3 {
    type: backgroundGroundType,
    verticalPosition: number,
    height: number
}

export enum backgroundGroundType {
    flatColor = 1
}

export const backgroundGroundTypesLocalization = [
    {
        value: backgroundGroundType.flatColor,
        label: "Flat"
    }
]