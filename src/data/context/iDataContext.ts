export interface IDataBase {
    id: string;
    name: string;
    layerPosition: number;
}

export interface IDataContext<T extends IDataBase> {
    datas: T[];
    selectedData: T | null
    add: (value: T) => void;
    updateSelected: (value: T) => void;
    delete: (value: T) => void;
    duplicate: (value: T) => void;
    select: (value: T) => void;
}