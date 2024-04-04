import { IDataBase } from "../../context/iDataContext";
import { IColorableElement5 } from "../../baseInterfaces/ColorableElement";
import { IMoveableElement } from "../../baseInterfaces/IMoveableElement";
import { ISizeableElement } from "../../baseInterfaces/ISizeableElement";
import { IHasBorder } from "../../baseInterfaces/IHasBorder";
import { IHasOpacity } from "../../baseInterfaces/IHasOpacity";
import { ISkewable } from "../../baseInterfaces/ISkewable";

export interface simpleItemData extends IMoveableElement, ISizeableElement, IDataBase,
    IColorableElement5, IHasBorder, IHasOpacity, ISkewable {
    simpleItemType: simpleItemDataType
}

export enum simpleItemDataType {
    circle = 1,
    rectangle = 2,
}

export const simpleItemDataTypes = [
    {
        value: simpleItemDataType.circle,
        label: "Circle"
    },
    {
        value: simpleItemDataType.rectangle,
        label: "Rectangle"
    }
]