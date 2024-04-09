import { PropsWithChildren, createRef, useEffect } from "react";
import { IMoveableElement } from "../data/baseInterfaces/IMoveableElement";
import { FallbackGrafic } from "./FallbackGrafic";
import Konva from "konva";
import { Group } from "react-konva";
import { ISizeableElement } from "../data/baseInterfaces/ISizeableElement";
import { IHasOpacity } from "../data/baseInterfaces/IHasOpacity";
import { ISkewable } from "../data/baseInterfaces/ISkewable";

interface ScaleableGroupItem
  extends IMoveableElement,
    ISizeableElement,
    IHasOpacity,
    ISkewable {}

export interface ScaleableGroupProps<T extends ScaleableGroupItem> {
  item: T | undefined;
}

export function ScaleableGroup<T extends ScaleableGroupItem>(
  props: PropsWithChildren<ScaleableGroupProps<T>>
) {
  const { item, children } = props;

  if (item === null || item === undefined) return <FallbackGrafic />;

  const groupRef: React.RefObject<Konva.Group> = createRef();

  useEffect(() => {
    if (groupRef.current !== null && item !== null) {
      groupRef.current!.skew({
        x: item!.skewX,
        y: item!.skewY,
      });
    }
  });

  return (
    <Group
      ref={groupRef}
      x={item!.positionX}
      y={item!.positionY}
      scaleX={item!.scaleX}
      scaleY={item!.scaleY}
      opacity={item!.opacity}
    >
      {children}
    </Group>
  );
}
