import { useContext, useEffect, useState } from "react";
import { Stage, Layer, Group } from "react-konva"
import { DataContext } from "../data/context/dataContext";
import { BackgroundFarGrafic } from "./BackgroundFarGrafic";
import { BackgroundGroundGrafic } from "./BackgroundGroundGrafic";
import { backgroundFarContext } from "../data/context/backgroundFarContext";
import { backgroundGroundContext } from "../data/context/backgroundGroundContext";
import { backgroundGroundData } from "../data/backgroundGroundData";
import { CreateNewBackgroundGroundData } from "../helper/factory";
import React from "react";

export function BackgroundGrafic() {
    var data = useContext(DataContext);

    return (
        <Stage height={data?.stageHeight} width={data?.stageWidth}>
            <Layer>
                <BackgroundFarGraficContainer />
            </Layer>
            <BackgroundGroundsGraficContainer />
        </Stage >
    )
}

export function BackgroundFarGraficContainer() {
    var data = useContext(backgroundFarContext);

    return (
        <BackgroundFarGrafic background={data.backgroundFarData} />
    )
}

export function BackgroundGroundsGraficContainer() {
    var data = useContext(backgroundGroundContext);

    return (
        <Layer>
            {data.backgroundGroundDatas.sort(x => x.layerPosition).map((background) => (
                <BackgroundGroundGrafic background={background} />
            )
            )}
        </Layer>
    )
}