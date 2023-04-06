export interface IDataContext<T> {
    datas: T[];
    selectedData: T | null
    add: (value: T) => void;
    updateSelected: (value: T) => void;
    delete: (value: T) => void;
    duplicate: (value: T) => void;
    select: (value: T) => void;
}