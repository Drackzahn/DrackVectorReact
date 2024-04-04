import { IHasOpacity } from "../../baseInterfaces/IHasOpacity";
import { IMoveableElement } from "../../baseInterfaces/IMoveableElement";
import { ISizeableElement } from "../../baseInterfaces/ISizeableElement";
import { IDataBase } from "../../context/iDataContext";

export interface humanoidData extends IMoveableElement, ISizeableElement, IDataBase, IHasOpacity {
    head: humanoidHead;
}

export interface humanoidHead extends IMoveableElement, ISizeableElement {
    headType: humanoidHeadType;
}

export enum humanoidHeadType {
    sharp = 1,
    halfRound = 2,
    halfSharp = 3,
    round = 4,
}
export const humanoidHeadTypes = [
    {
        value: humanoidHeadType.sharp,
        label: "Human Sharp"
    },
    {
        value: humanoidHeadType.halfRound,
        label: "Human Half Round"
    },
    {
        value: humanoidHeadType.halfSharp,
        label: "Human Half Sharp"
    },
    {
        value: humanoidHeadType.round,
        label: "Human Round"
    }
]