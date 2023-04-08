import { IDataBase } from "./context/iDataContext";

export interface backgroundGroundData extends IDataBase {
    type: backgroundGroundType,
    color1Hex: string,
    color2Hex: string,
    color3Hex: string,
    color2IsActive: boolean,
    color3IsActive: boolean,
    verticalPosition: number,
    height: number
}

export enum backgroundGroundType {
    flatColor = 1
}