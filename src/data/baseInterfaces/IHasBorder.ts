export interface IHasBorder {
    borderThickness: number;
    isBorderActive: boolean;
    borderColor: string;
}

export function GetHasBorderColor(hasBorder: IHasBorder): string {
    return hasBorder.isBorderActive ? hasBorder.borderColor : "#00000000";
}

export function GetHasBorderThickness(hasBorder: IHasBorder, scaleFactor: number): number {
    return hasBorder.isBorderActive ? hasBorder.borderThickness / scaleFactor : 0;
}