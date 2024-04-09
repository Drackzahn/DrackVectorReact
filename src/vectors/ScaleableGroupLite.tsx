import { PropsWithChildren } from "react";
import { IMoveableElement } from "../data/baseInterfaces/IMoveableElement";
import { ISizeableElement } from "../data/baseInterfaces/ISizeableElement";
import { FallbackGrafic } from "./FallbackGrafic";
import { Group } from "react-konva";

interface ScaleableGroupItem extends IMoveableElement, ISizeableElement {}

export interface ScaleableGroupProps<T extends ScaleableGroupItem> {
  item: T | undefined;
}

export function ScaleableGroupLite<T extends ScaleableGroupItem>(
  props: PropsWithChildren<ScaleableGroupProps<T>>
) {
  const { item, children } = props;

  if (item === null || item === undefined) return <FallbackGrafic />;

  return (
    <Group
      x={item!.positionX}
      y={item!.positionY}
      scaleX={item!.scaleX}
      scaleY={item!.scaleY}
    >
      {children}
    </Group>
  );
}
