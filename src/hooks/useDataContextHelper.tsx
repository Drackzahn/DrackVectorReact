import { useState } from "react";
import { IDataBase } from "../data/context/iDataContext";
import { v4 as uuidv4 } from 'uuid'

export function useDataContextHelper<T extends IDataBase>() {
    const [datas, setdatas] = useState<T[]>([]);
    const [selected, setSelected] = useState<T | null>(null);

    function add(value: T) {
        const newGrounds = datas.concat(value);
        setdatas(newGrounds);
        setSelected(value);
    }

    function updateSelected(value: T) {
        const data = datas.map(x => {
            if (x.id === value.id) {
                return value;
            }

            return x;
        })

        setdatas(data);
        setSelected(value);
    }

    function deleteSelected(value: T) {
        const data = datas.filter(x => x.id !== value.id);

        setdatas(data);
        setSelected(null);
    }

    function duplicate(value: T) {
        value.id = uuidv4();
        setdatas(datas.concat(value));
        setSelected(value);
    }

    function select(value: T) {
        setSelected(value);
    }

    return [datas, selected, add, updateSelected, deleteSelected, duplicate, select] as const;
}
