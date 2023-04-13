import { backgroundFarType } from "../data/backgroundFarData";
import { backgroundGroundType } from "../data/backgroundGroundData";
import { simpleItemDataType } from "../data/items/simpleItemData";

export function DoesBackgroundFarTypeUseSecondColor(type: backgroundFarType) {
    switch (type) {
        case backgroundFarType.blueSky:
            return true;
    }
}

export function DoesBackgroundGroundUseColors(type: backgroundGroundType): { useColor2: boolean, useColor3: boolean } {
    switch (type) {
        case backgroundGroundType.flatColor:
            return { useColor2: false, useColor3: false };
    }
}

export function DoesSimpleItemUseColors(type: simpleItemDataType): { useColor2: boolean, useColor3: boolean, useColor4: boolean, useColor5: boolean } {
    switch (type) {
        case simpleItemDataType.circle:
            return { useColor2: false, useColor3: false, useColor4: false, useColor5: false };
        case simpleItemDataType.rectangle:
            return { useColor2: false, useColor3: false, useColor4: false, useColor5: false };
    }
}