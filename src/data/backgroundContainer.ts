import { backgroundFarData } from "./backgroundFarData";
import { backgroundGroundData } from "./backgroundGroundData";
import { backgroundMiddleData } from "./backgroundMiddleData";


export interface backgroundContainer {
    farData: backgroundFarData;
    middleDatas: backgroundMiddleData[];
    groundDatas: backgroundGroundData[];
    selectedGroundData: backgroundGroundData | null;
}