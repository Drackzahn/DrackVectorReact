import { backgroundFarType } from "../data/backgroundFarData";
import { backgroundGroundType } from "../data/backgroundGroundData";

export function DoesBackgroundFarTypeUseSecondColor(type: backgroundFarType) {
    switch (type) {
        case backgroundFarType.blueSky:
            return true;
    }
}

export function DoesBackgroundGroundUseSecondColor(type: backgroundGroundType) {
    switch (type) {
        case backgroundGroundType.flatColor:
            return false;
    }
}

export function DoesBackgroundGroundUseThirdColor(type: backgroundGroundType) {
    switch (type) {
        case backgroundGroundType.flatColor:
            return false;
    }
}