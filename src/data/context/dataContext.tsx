import React, { PropsWithChildren, useEffect, useState } from "react";
import { backgroundContainer } from "../backgroundContainer";
import { backgroundFarType } from "../backgroundFarData";

export interface IData {
    background: backgroundContainer;
    setBackgroundContainer: (background: backgroundContainer) => void;
    stageHeight: number;
    stageWidth: number;
}

export const DataContext = React.createContext<IData | null>(null);

export function DataContextWrapper(props: PropsWithChildren) {


    const [background, setBackground] = useState<backgroundContainer>({
        groundDatas: [],
        middleDatas: [],
        farData: {
            backgroundType: backgroundFarType.blueSky,
            firstColor: "#87CEEB",
            secondColor: "#87CEEB",
            useSecondColor: true
        },
        selectedGroundData: null
    });

    const [data, setData] = useState<IData>({
        background: background,
        stageHeight: window.innerHeight,
        stageWidth: window.innerWidth,
        setBackgroundContainer: setBackground
    })

    useEffect(() => {
        const handleResize = () => setTimeout(() => {
            setData({ ...data, stageHeight: window.innerHeight, stageWidth: window.innerWidth });
        }, 100)

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    useEffect(() => {
        setData({ ...data, background: background })
    }, [background])

    return (
        <DataContext.Provider value={data}>
            {props.children}
        </DataContext.Provider>
    )
}