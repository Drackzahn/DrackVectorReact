import { Circle, Rect } from "react-konva";
import { simpleItemData, simpleItemDataType } from "../data/items/simpleItemData";
import { FallbackGrafic } from "./FallbackGrafic";
import { GetHasBorderColor, GetHasBorderThickness } from "../data/baseInterfaces/IHasBorder";

const BaseItemSize = 50;

export interface ISimpleItemGraficProps {
    item: simpleItemData | undefined;
}

export function SimpleItemGrafic(props: ISimpleItemGraficProps) {
    if (props.item === null)
        return (
            <FallbackGrafic />
        )

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
            offsetX={-BaseItemSize / 2}
            offsetY={-BaseItemSize / 2}
            key={props.item?.id}
            id={props.item?.id}
            fill={color}
            x={props.item?.positionX}
            y={props.item?.positionY}
            scaleX={props.item?.scaleX}
            scaleY={props.item?.scaleY}
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
            key={props.item?.id}
            id={props.item?.id}
            fill={color}
            x={props.item?.positionX}
            y={props.item?.positionY}
            scaleX={props.item?.scaleX}
            scaleY={props.item?.scaleY}
            height={BaseItemSize}
            width={BaseItemSize}
            stroke={GetHasBorderColor(props.item!)}
            strokeWidth={GetHasBorderThickness(props.item!, props.item!.scaleX)}
        />
    )
}