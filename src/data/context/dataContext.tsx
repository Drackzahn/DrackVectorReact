import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { StandardHeight } from "../../canvas/DrackVectorConstants";

const scrollFactor = 0.01;

export interface IData {
    stageHeight: number;
    stageWidth: number;
    sizeScaleFactor: number;
    scrollScaleFacor: number;
    generalScaleFactor: number;
    positionOffsetX: number;
    positionOffsetY: number;
}

export const DataContext = React.createContext<IData>({
    sizeScaleFactor: 1,
    scrollScaleFacor: 1,
    generalScaleFactor: 1,
    stageHeight: 1080,
    stageWidth: 1920,
    positionOffsetX: 0,
    positionOffsetY: 0
});

export function DataContextWrapper(props: PropsWithChildren) {
    const [stageHeight, setStageHeight] = useState<number>(window.innerHeight);
    const [stageWidth, setStageWidth] = useState<number>(window.innerWidth);
    const [sizeScaleFactor, setSizeScaleFactor] = useState<number>(1);
    const [scrollScaleFactor, setScrollScaleFactor] = useState<number>(1);
    const [generalScaleFactor, setGeneralScaleFactor] = useState<number>(1);
    const [positionOffsetX, setPositionOffsetX] = useState<number>(0);
    const [positionOffsetY, setPositionOffsetY] = useState<number>(0);

    const scrollScaleFactorRef = useRef<number>(1);

    function handleWheel(event: WheelEvent) {
        // how to scale? Zoom in? Or zoom out?
        let direction = event.deltaY > 0 ? -scrollFactor : scrollFactor;

        // when we zoom on trackpad, e.evt.ctrlKey is true
        // in that case lets revert direction
        if (event.ctrlKey) {
            direction = -direction;
        }

        scrollScaleFactorRef.current = scrollScaleFactorRef.current + direction;
        setScrollScaleFactor(scrollScaleFactorRef.current);
    }

    useEffect(() => {
        setGeneralScaleFactor(sizeScaleFactor * scrollScaleFactor);
    }, [sizeScaleFactor, scrollScaleFactor])

    useEffect(() => {
        const handleResize = () => setTimeout(() => {
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;

            setStageHeight(windowHeight);
            setStageWidth(windowWidth);

            const sizeScaleFactor = GetSizeScaleFactor(windowHeight);
            setSizeScaleFactor(sizeScaleFactor);
        }, 100)

        window.addEventListener('resize', handleResize);
        window.addEventListener('wheel', handleWheel);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('wheel', handleWheel);
        }
    }, [])

    return (
        <DataContext.Provider value={{
            stageHeight: stageHeight, stageWidth: stageWidth, sizeScaleFactor: sizeScaleFactor,
            generalScaleFactor: generalScaleFactor, scrollScaleFacor: scrollScaleFactor
        }}>
            {props.children}
        </DataContext.Provider>
    )
}

function GetSizeScaleFactor(stageHeight: number): number {
    return stageHeight / StandardHeight;
}