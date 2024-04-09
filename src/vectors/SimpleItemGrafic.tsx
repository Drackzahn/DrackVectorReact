import { Circle, Group, KonvaNodeComponent, Layer, Rect } from "react-konva";
import {
  simpleItemData,
  simpleItemDataType,
} from "../data/figures/items/simpleItemData";
import { FallbackGrafic } from "./FallbackGrafic";
import {
  GetHasBorderColor,
  GetHasBorderThickness,
} from "../data/baseInterfaces/IHasBorder";
import { useEffect, useRef } from "react";
import Konva from "konva";
import React from "react";
import { ScaleableGroup } from "./ScaleableGroup";

const BaseItemSize = 50;

export interface ISimpleItemGraficProps {
  item: simpleItemData | undefined;
}

export function SimpleItemGrafic(props: ISimpleItemGraficProps) {
  return (
    <ScaleableGroup item={props.item}>
      <SimpleItemGraficInternal item={props.item} />
    </ScaleableGroup>
  );
}

function SimpleItemGraficInternal(props: ISimpleItemGraficProps) {
  if (props.item?.simpleItemType === simpleItemDataType.circle)
    return <CircleGrafic item={props.item} />;

  if (props.item?.simpleItemType === simpleItemDataType.rectangle)
    return <RectangleGrafic item={props.item} />;

  //Fallback Value
  return <FallbackGrafic />;
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
  );
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
  );
}
