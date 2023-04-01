export interface backgroundGroundData {
    type: backgroundGroundType,
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    useSecondColor: boolean,
    useThirdColor: boolean,
    verticalPosition: number,
    layerPosition: number,
    id: string,
    name: string
}

export enum backgroundGroundType {
    flatColor = 1
}