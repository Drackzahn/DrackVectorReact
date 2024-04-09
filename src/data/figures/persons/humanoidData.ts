import { IHasOpacity } from "../../baseInterfaces/IHasOpacity";
import { IMoveableElement } from "../../baseInterfaces/IMoveableElement";
import { ISizeableElement } from "../../baseInterfaces/ISizeableElement";
import { ISkewable } from "../../baseInterfaces/ISkewable";
import { IDataBase } from "../../context/iDataContext";
import { humanBody, humanoidBodyType } from "./humanoidBodyData";
import { humanHead, humanoidHeadType } from "./humanoidHeadData";

export interface humanoidData
  extends IMoveableElement,
    ISizeableElement,
    IDataBase,
    IHasOpacity,
    ISkewable {
  head: humanHead; // !Hint add other head types here
  headType: humanoidHeadType;
  body: humanBody; // !Hint add other body types here
  bodyType: humanoidBodyType;
}
