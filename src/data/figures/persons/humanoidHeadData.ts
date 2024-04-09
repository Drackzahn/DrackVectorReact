import { IHasBorder } from "../../baseInterfaces/IHasBorder";
import { IMoveableElement } from "../../baseInterfaces/IMoveableElement";
import { ISizeableElement } from "../../baseInterfaces/ISizeableElement";

export interface humanHead
  extends IMoveableElement,
    ISizeableElement,
    IHasBorder {
  headType: humanHeadType;
  skinColorHex: string;
  overrideSkinColor: boolean;
}

export enum humanoidHeadType {
  humanoidHead = 1,
}

export const humanoidHeadTypeLabels = [
  {
    value: humanoidHeadType.humanoidHead,
    label: "Human",
  },
];

export enum humanHeadType {
  sharp = 1,
  halfRound = 2,
  halfSharp = 3,
  round = 4,
}

export const humanHeadTypeLabels = [
  {
    value: humanHeadType.sharp,
    label: "Sharp",
  },
  {
    value: humanHeadType.halfRound,
    label: "Half Round",
  },
  {
    value: humanHeadType.halfSharp,
    label: "Half Sharp",
  },
  {
    value: humanHeadType.round,
    label: "Round",
  },
];
