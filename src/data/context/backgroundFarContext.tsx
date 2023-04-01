import React, { PropsWithChildren, useState } from "react";
import { backgroundFarData, backgroundFarType } from "../backgroundFarData";

export interface IBackgroundFarContext {
    backgroundFarData: backgroundFarData;
    setBackgroundFarData: (newValue: backgroundFarData) => void;
}

export const backgroundFarContext = React.createContext<IBackgroundFarContext>({
    backgroundFarData: {
        backgroundType: backgroundFarType.blueSky,
        firstColor: "#87CEEB",
        secondColor: "#87CEEB",
        useSecondColor: true
    },
    setBackgroundFarData: (newValue: backgroundFarData) => {
        console.info(newValue);
    }
});

export function BackgroundFarContext(props: PropsWithChildren) {

    const [background, setBackground] = useState<backgroundFarData>({
        backgroundType: backgroundFarType.blueSky,
        firstColor: "#87CEEB",
        secondColor: "#87CEEB",
        useSecondColor: true
    });

    return (
        <backgroundFarContext.Provider value={{ backgroundFarData: background, setBackgroundFarData: setBackground }}>
            {props.children}
        </backgroundFarContext.Provider >
    )
}