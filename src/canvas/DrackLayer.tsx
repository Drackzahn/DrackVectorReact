import Konva from "konva";
import { PropsWithChildren, createRef, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { DataContext } from "../data/context/dataContext";
import { Layer } from "react-konva";

export interface IDrackLayer {
    isBackgroundLayer: boolean
}

export function DrackLayer(props: PropsWithChildren<IDrackLayer>) {
    var data = useContext(DataContext);

    const layerRef: React.RefObject<Konva.Layer> = createRef();
    var [layerId] = useState<string>(uuidv4());

    useEffect(() => {
        data.addLayer({
            layer: layerRef.current!,
            id: layerId,
            isBackground: props.isBackgroundLayer
        })

        return () => {
            data.removeLayer(layerId);
        }
    }, [])

    return (
        <Layer
            ref={layerRef}>
            {props.children}
        </Layer>
    )
}