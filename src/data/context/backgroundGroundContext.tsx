import React, { PropsWithChildren, useState } from "react";
import { backgroundGroundData } from "../backgroundGroundData";
import { v4 as uuidv4 } from 'uuid'

export interface IBackgroundGroundContext {
    backgroundGroundDatas: backgroundGroundData[];
    selectedGroundData: backgroundGroundData | null
    addGround: (value: backgroundGroundData) => void;
    updateSelectedGround: (value: backgroundGroundData) => void;
    deleteGround: (value: backgroundGroundData) => void;
    duplicateGround: (value: backgroundGroundData) => void;
    selectGround: (value: backgroundGroundData) => void;
}

export const backgroundGroundContext = React.createContext<IBackgroundGroundContext>({
    backgroundGroundDatas: [],
    selectedGroundData: null,
    addGround: (value: backgroundGroundData) => {
        console.info(value);
    },
    updateSelectedGround: (value: backgroundGroundData) => {
        console.info(value);
    },
    deleteGround: (value: backgroundGroundData) => {
        console.info(value);
    },
    duplicateGround: (value: backgroundGroundData) => {
        console.info(value);
    },
    selectGround: (value: backgroundGroundData) => {
        console.info(value);
    }
});

export function BackgroundGroundContext(props: PropsWithChildren) {

    const [groundDatas, setGroundDatas] = useState<backgroundGroundData[]>([]);
    const [selectedGround, setSelectedGround] = useState<backgroundGroundData | null>(null);

    function addGround(value: backgroundGroundData) {
        groundDatas.push(value);
        setGroundDatas(groundDatas);
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
        groundDatas.push(value);
        setGroundDatas(groundDatas);
        setSelectedGround(value);
    }

    function selectGround(value: backgroundGroundData) {
        setSelectedGround(value);
    }

    return (
        <backgroundGroundContext.Provider value={
            {
                backgroundGroundDatas: groundDatas,
                selectedGroundData: selectedGround,
                addGround: addGround,
                updateSelectedGround: updateSelectedGround,
                deleteGround: deleteGround,
                duplicateGround: duplicateGround,
                selectGround: selectGround
            }}>
            {props.children}
        </backgroundGroundContext.Provider >
    )
}