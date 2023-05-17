import { PropsWithChildren } from "react";
import { Layer } from "react-konva";

export function DrackLayer(props: PropsWithChildren) {
    return (
        <Layer>
            {props.children}
        </Layer>
    )
}