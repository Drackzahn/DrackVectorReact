import { IDataBase, IDataContext } from "../data/context/iDataContext";

export function useDataSelector<T extends IDataBase>(
  dataContext: IDataContext<T>,
  createNew: () => T
) {
  function addElement() {
    const newValue = createNew();
    dataContext.add(newValue);
  }

  function deleteElement() {
    if (dataContext.selectedData !== null)
      dataContext.delete(dataContext.selectedData);
  }

  function duplicateElement() {
    if (dataContext.selectedData !== null)
      dataContext.duplicate(dataContext.selectedData);
  }

  function changeSelectedElement(newValue: T) {
    dataContext.select(newValue);
  }

  return [
    addElement,
    deleteElement,
    duplicateElement,
    changeSelectedElement,
  ] as const;
}
