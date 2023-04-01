export enum backgroundFarType {
    blueSky = 1
}

export interface backgroundFarData {
    backgroundType: backgroundFarType,
    firstColor: string,
    secondColor: string,
    useSecondColor: boolean,
}