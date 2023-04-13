import React, { PropsWithChildren, useEffect, useState } from "react";
import { backgroundGroundData } from "../backgroundGroundData";
import { v4 as uuidv4 } from 'uuid'
import { IDataContext } from "./iDataContext";

export interface IBackgroundGroundContext extends IDataContext<backgroundGroundData> {
}

export const backgroundGroundContext = React.createContext<IBackgroundGroundContext>({
    datas: [],
    selectedData: null,
    add: (value: backgroundGroundData) => {
        console.info(value);
    },
    updateSelected: (value: backgroundGroundData) => {
        console.info(value);
    },
    delete: (value: backgroundGroundData) => {
        console.info(value);
    },
    duplicate: (value: backgroundGroundData) => {
        console.info(value);
    },
    select: (value: backgroundGroundData) => {
        console.info(value);
    }
});

export function BackgroundGroundContext(props: PropsWithChildren) {
    const [groundDatas, setGroundDatas] = useState<backgroundGroundData[]>([]);
    const [selectedGround, setSelectedGround] = useState<backgroundGroundData | null>(null);

    function addGround(value: backgroundGroundData) {
        const newGrounds = groundDatas.concat(value);
        setGroundDatas(newGrounds);
        setSelectedGround(value);
    }

    function updateSelectedGround(value: backgroundGroundData) {
        const grounds = groundDatas.map(x => {
            if (x.id === value.id) {
                return value;
            }

            return x;
        })

        setGroundDatas(grounds);
        setSelectedGround(value);
    }

    function deleteGround(value: backgroundGroundData) {
        const grounds = groundDatas.filter(x => x.id !== value.id);

        setGroundDatas(grounds);
        setSelectedGround(null);
    }

    function duplicateGround(value: backgroundGroundData) {
        value.id = uuidv4();
        setGroundDatas(groundDatas.concat(value));
        setSelectedGround(value);
    }

    function selectGround(value: backgroundGroundData) {
        setSelectedGround(value);
    }

    return (
        <backgroundGroundContext.Provider value={
            {
                datas: groundDatas,
                selectedData: selectedGround,
                add: addGround,
                updateSelected: updateSelectedGround,
                delete: deleteGround,
                duplicate: duplicateGround,
                select: selectGround
            }}>
            {props.children}
        </backgroundGroundContext.Provider >
    )
}