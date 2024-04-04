import {
  PropsWithChildren,
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MaxScrollScaleFactor,
  StandardHeight,
} from "../../canvas/DrackVectorConstants";
import Konva from "konva";
import { useDrackTabs } from "../../hooks/useDrackTabs";

const scrollFactor = 0.01;

export interface IInterfaceData {
  stageHeight: number;
  stageWidth: number;
  sizeScaleFactor: number;
  scrollScaleFacor: number;
  generalScaleFactor: number;
  positionOffsetX: number;
  positionOffsetY: number;
  setPositionOffsetX: (newValue: number) => void;
  setPositionOffsetY: (newValue: number) => void;
  setScrollScaleFactor: (newValue: number) => void;
  includeBackground: boolean;
  setIncludeBackground: (newValue: boolean) => void;
  stage?: Konva.Stage;
  setStage: (newStage: Konva.Stage) => void;
  isInterfaceVisible: boolean;
  setIsInterfaceVisible: (value: boolean) => void;
  selectedTab: number;
  changeSelectedTab: (event: React.SyntheticEvent, newValue: number) => void;
}

export const DataContext = createContext<IInterfaceData | undefined>(undefined);

export function DataContextWrapper(props: PropsWithChildren) {
  const [stageHeight, setStageHeight] = useState<number>(window.innerHeight);
  const [stageWidth, setStageWidth] = useState<number>(window.innerWidth);
  const [sizeScaleFactor, setSizeScaleFactor] = useState<number>(1);
  const [scrollScaleFactor, setScrollScaleFactor] = useState<number>(1);
  const [positionOffsetX, setPositionOffsetX] = useState<number>(0);
  const [positionOffsetY, setPositionOffsetY] = useState<number>(0);
  const [includeBackground, setIncludeBackground] = useState<boolean>(true);
  const [stage, setStage] = useState<Konva.Stage | undefined>(undefined);
  const [isInterfaceVisible, setIsInterfaceVisible] = useState<boolean>(true);

  const [selectedTab, changeSelectedTab] = useDrackTabs();

  const scrollScaleFactorRef = useRef<number>(1);

  function changeScrollFactor(newValue: number) {
    setScrollScaleFactor(
      Number(newValue.toFixed(MaxScrollScaleFactor.decimals))
    );
  }

  function handleWheel(event: WheelEvent) {
    // how to scale? Zoom in? Or zoom out?
    let direction = event.deltaY > 0 ? -scrollFactor : scrollFactor;

    // when we zoom on trackpad, e.evt.ctrlKey is true
    // in that case lets revert direction
    if (event.ctrlKey) {
      direction = -direction;
    }

    scrollScaleFactorRef.current = scrollScaleFactorRef.current + direction;

    if (scrollScaleFactorRef.current < MaxScrollScaleFactor.min) {
      scrollScaleFactorRef.current = MaxScrollScaleFactor.min;
    }

    if (scrollScaleFactorRef.current > MaxScrollScaleFactor.max) {
      scrollScaleFactorRef.current = MaxScrollScaleFactor.max;
    }

    changeScrollFactor(scrollScaleFactorRef.current);
  }

  useEffect(() => {
    const resize = () => {
      const windowHeight = window.innerHeight;
      const windowWidth = window.innerWidth;

      setStageHeight(windowHeight);
      setStageWidth(windowWidth);

      const sizeScaleFactor = GetSizeScaleFactor(windowHeight);
      setSizeScaleFactor(sizeScaleFactor);
    };

    const handleResize = () =>
      setTimeout(() => {
        resize();
      }, 100);

    window.addEventListener("resize", handleResize);
    window.addEventListener("wheel", handleWheel);

    resize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <DataContext.Provider
      value={{
        stageHeight: stageHeight,
        stageWidth: stageWidth,
        sizeScaleFactor: sizeScaleFactor,
        generalScaleFactor: sizeScaleFactor * scrollScaleFactor,
        scrollScaleFacor: scrollScaleFactor,
        positionOffsetX: positionOffsetX,
        setPositionOffsetX: setPositionOffsetX,
        positionOffsetY: positionOffsetY,
        setPositionOffsetY: setPositionOffsetY,
        setScrollScaleFactor: changeScrollFactor,
        stage,
        setStage,
        includeBackground,
        setIncludeBackground,
        isInterfaceVisible,
        setIsInterfaceVisible,
        selectedTab,
        changeSelectedTab,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

function GetSizeScaleFactor(stageHeight: number): number {
  return stageHeight / StandardHeight;
}
