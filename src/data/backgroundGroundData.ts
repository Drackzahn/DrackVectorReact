import { IDataBase } from "./context/iDataContext";

export interface backgroundGroundData extends IDataBase {
    type: backgroundGroundType,
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    useSecondColor: boolean,
    useThirdColor: boolean,
    verticalPosition: number
}

export enum backgroundGroundType {
    flatColor = 1
}