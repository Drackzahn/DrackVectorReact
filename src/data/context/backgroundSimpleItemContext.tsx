import React, { PropsWithChildren, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { IDataContext } from "./iDataContext";
import { simpleItemData } from "../items/simpleItemData";

export interface IBackgroundSimpleItemContext extends IDataContext<simpleItemData> {
}

export const backgroundSimpleItemContext = React.createContext<IBackgroundSimpleItemContext>({
    datas: [],
    selectedData: null,
    add: (value: simpleItemData) => {
        console.info(value);
    },
    updateSelected: (value: simpleItemData) => {
        console.info(value);
    },
    delete: (value: simpleItemData) => {
        console.info(value);
    },
    duplicate: (value: simpleItemData) => {
        console.info(value);
    },
    select: (value: simpleItemData) => {
        console.info(value);
    }
});

export function BackgroundSimpleItemContext(props: PropsWithChildren) {
    const [datas, setdatas] = useState<simpleItemData[]>([]);
    const [selected, setSelected] = useState<simpleItemData | null>(null);

    function add(value: simpleItemData) {
        const newGrounds = datas.concat(value);
        setdatas(newGrounds);
        setSelected(value);
    }

    function updateSelected(value: simpleItemData) {
        const grounds = datas.map(x => {
            if (x.id === value.id) {
                return value;
            }

            return x;
        })

        setdatas(grounds);
        setSelected(value);
    }

    function deleteSelected(value: simpleItemData) {
        const grounds = datas.filter(x => x.id !== value.id);

        setdatas(grounds);
        setSelected(null);
    }

    function duplicate(value: simpleItemData) {
        value.id = uuidv4();
        setdatas(datas.concat(value));
        setSelected(value);
    }

    function select(value: simpleItemData) {
        setSelected(value);
    }

    return (
        <backgroundSimpleItemContext.Provider value={
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
        </backgroundSimpleItemContext.Provider >
    )
}