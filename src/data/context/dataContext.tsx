import React, { PropsWithChildren, useEffect, useState } from "react";
import { backgroundFarType } from "../backgroundFarData";

export interface IData {
    stageHeight: number;
    stageWidth: number;
}

export const DataContext = React.createContext<IData | null>(null);

export function DataContextWrapper(props: PropsWithChildren) {

    const [stageHeight, setStageHeight] = useState<number>(window.innerHeight);
    const [stageWidth, setStageWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setTimeout(() => {
            setStageHeight(window.innerHeight);
            setStageWidth(window.innerWidth);
        }, 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <DataContext.Provider value={{ stageHeight: stageHeight, stageWidth: stageWidth }}>
            {props.children}
        </DataContext.Provider>
    )
}