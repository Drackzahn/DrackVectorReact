import { createContext, PropsWithChildren, useState } from "react";
import { humanoidData } from "../figures/persons/humanoidData";
import { IDataContext } from "./iDataContext";
import { useDataContextHelper } from "../../hooks/useDataContextHelper";

export interface IHumanoidFigureContext extends IDataContext<humanoidData> {
}

export const HumanoidFigureContext = createContext<IHumanoidFigureContext | undefined>(undefined);

export function HumanoidFigureContextProvider(props: PropsWithChildren) {
    const [datas, selected, add, updateSelected, deleteSelected, duplicate, select] = useDataContextHelper<humanoidData>();

    return (
        <HumanoidFigureContext.Provider value={
            {
                datas: datas,
                selectedData: selected,
                add: add,
                updateSelected: updateSelected,
                delete: deleteSelected,
                duplicate: duplicate,
                select: select
            }}>
            {props.children}
        </HumanoidFigureContext.Provider >
    )
}
