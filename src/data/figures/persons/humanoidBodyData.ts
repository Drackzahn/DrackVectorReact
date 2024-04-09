import { ISizeableElement } from "../../baseInterfaces/ISizeableElement";

export interface humanBody extends ISizeableElement {
  shoulderWidth: number;
  hipsWidth: number;
  bellyHeight: number;
  bodyHeight: number;
}

export enum humanoidBodyType {
  humanBody = 1,
}

export const humanoidBodyTypeLabels = [
  {
    value: humanoidBodyType.humanBody,
    label: "Human",
  },
];
