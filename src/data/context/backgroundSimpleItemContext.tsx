import React, { PropsWithChildren } from "react";
import { IDataContext } from "./iDataContext";
import { simpleItemData } from "../figures/items/simpleItemData";
import { useDataContextHelper } from "../../hooks/useDataContextHelper";

export interface IBackgroundSimpleItemContext extends IDataContext<simpleItemData> {
}

export const BackgroundSimpleItemContext = React.createContext<IBackgroundSimpleItemContext | undefined>(undefined);

export function BackgroundSimpleItemContextProvider(props: PropsWithChildren) {
    const [datas, selected, add, updateSelected, deleteSelected, duplicate, select] = useDataContextHelper<simpleItemData>();

    return (
        <BackgroundSimpleItemContext.Provider value={
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
        </BackgroundSimpleItemContext.Provider >
    )
}