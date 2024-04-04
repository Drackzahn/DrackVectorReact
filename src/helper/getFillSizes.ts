import { useContext, useEffect, useState } from "react";
import { StandardHeight } from "../canvas/DrackVectorConstants";
import { DataContext } from "../data/context/dataContext";

export function useFillingHeight() {
  const data = useContext(DataContext);
  const [fillingHeight, setFillingHeight] = useState<number>(StandardHeight);

  useEffect(() => {
    setFillingHeight(StandardHeight);
  }, [data!.generalScaleFactor]);

  return [fillingHeight];
}

export function useFillingWidth() {
  const data = useContext(DataContext);
  const [fillingWidth, setFillingWidth] = useState<number>(StandardHeight);

  useEffect(() => {
    setFillingWidth(data!.stageWidth);
  }, [data]);

  return [fillingWidth];
}
