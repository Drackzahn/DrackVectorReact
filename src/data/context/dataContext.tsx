import React, { PropsWithChildren, useEffect, useState } from "react";
import { backgroundFarType } from "../backgroundFarData";
import { StandardHeight } from "../../canvas/DrackVectorConstants";

export interface IData {
    stageHeight: number;
    stageWidth: number;
    sizeScaleFactor: number;
    generalScaleFactor: number;
}

export const DataContext = React.createContext<IData>({
    sizeScaleFactor: 1,
    generalScaleFactor: 1,
    stageHeight: 1080,
    stageWidth: 1920
});

export function DataContextWrapper(props: PropsWithChildren) {

    const [stageHeight, setStageHeight] = useState<number>(window.innerHeight);
    const [stageWidth, setStageWidth] = useState<number>(window.innerWidth);
    const [sizeScaleFactor, setSizeScaleFactor] = useState<number>(1);
    const [generalScaleFactor, setGeneralScaleFactor] = useState<number>(1);

    useEffect(() => {
        const handleResize = () => setTimeout(() => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            const sizeScaleFactor = GetSizeScaleFactor(windowHeight);
            const zoomScaleFactor = 1; //TODO later add Zoom here!
            const generalScaleFactor = sizeScaleFactor * zoomScaleFactor;

            setStageHeight(windowHeight);
            setStageWidth(windowWidth);

            setSizeScaleFactor(sizeScaleFactor);
            setGeneralScaleFactor(generalScaleFactor);
        }, 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <DataContext.Provider value={{
            stageHeight: stageHeight, stageWidth: stageWidth, sizeScaleFactor: sizeScaleFactor,
            generalScaleFactor: generalScaleFactor
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

function GetSizeScaleFactor(stageHeight: number): number {
    return stageHeight / StandardHeight;
}