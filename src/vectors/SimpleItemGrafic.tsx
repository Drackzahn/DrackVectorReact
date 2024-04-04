import { Circle, Group, KonvaNodeComponent, Layer, Rect } from "react-konva";
import { simpleItemData, simpleItemDataType } from "../data/figures/items/simpleItemData";
import { FallbackGrafic } from "./FallbackGrafic";
import { GetHasBorderColor, GetHasBorderThickness } from "../data/baseInterfaces/IHasBorder";
import { useEffect, useRef } from "react";
import Konva from "konva";
import React from "react";

const BaseItemSize = 50;

export interface ISimpleItemGraficProps {
    item: simpleItemData | undefined;
}

export function SimpleItemGrafic(props: ISimpleItemGraficProps) {
    if (props.item === null)
        return (
            <FallbackGrafic />
        )

    const groupRef: React.RefObject<Konva.Group> = React.createRef();

    useEffect(() => {
        if (groupRef.current !== null && props.item !== null) {
            groupRef.current!.skew({
                x: props.item!.skewX,
                y: props.item!.skewY
            })
        }
    })


    return (
        <Group
            ref={groupRef}
            x={props.item!.positionX}
            y={props.item!.positionY}
            scaleX={props.item!.scaleX}
            scaleY={props.item!.scaleY}
            opacity={props.item!.opacity}
        >
            <SimpleItemGraficInternal item={props.item} />
        </Group>
    )
}

function SimpleItemGraficInternal(props: ISimpleItemGraficProps) {


    if (props.item?.simpleItemType === simpleItemDataType.circle)
        return (
            <CircleGrafic item={props.item}
            />)

    if (props.item?.simpleItemType === simpleItemDataType.rectangle)
        return (
            <RectangleGrafic item={props.item}
            />)

    //Fallback Value
    return (
        <FallbackGrafic />
    )
}

function CircleGrafic(props: ISimpleItemGraficProps) {
    const color = props.item?.color1Hex ?? "#FFFFFF";

    return (
        <Circle
            offsetY={BaseItemSize / 2}
            fill={color}
            height={BaseItemSize}
            width={BaseItemSize}
            stroke={GetHasBorderColor(props.item!)}
            strokeWidth={GetHasBorderThickness(props.item!, props.item!.scaleX)}
        />
    )
}

function RectangleGrafic(props: ISimpleItemGraficProps) {
    const color = props.item?.color1Hex ?? "#FFFFFF";

    return (
        <Rect
            offsetY={BaseItemSize}
            offsetX={BaseItemSize / 2}
            fill={color}
            height={BaseItemSize}
            width={BaseItemSize}
            stroke={GetHasBorderColor(props.item!)}
            strokeWidth={GetHasBorderThickness(props.item!, props.item!.scaleX)}
        />
    )
}