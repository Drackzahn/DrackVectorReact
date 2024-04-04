import { PropsWithChildren, useContext, useRef, useState } from "react";
import { DataContext } from "../data/context/dataContext";
import { MaxPositions } from "../canvas/DrackVectorConstants";

const mouseDragFactor = 0.8;

export function DragableArea(props: PropsWithChildren) {
  const dataContext = useContext(DataContext);

  const ourRef = useRef<any>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseCoords = useRef({
    startX: 0,
    startY: 0,
    startMouseX: 0,
    startMouseY: 0,
  });

  const updatePositions = (walkX: number, walkY: number) => {
    let scrollFactor = dataContext!.scrollScaleFacor;

    if (scrollFactor < 1) {
      scrollFactor = 1;
    }

    let newX = mouseCoords.current.startX - walkX / scrollFactor;
    let newY = mouseCoords.current.startY - walkY / scrollFactor;

    if (newX < MaxPositions.minX) {
      newX = MaxPositions.minX;
    }

    if (newX > MaxPositions.maxX) {
      newX = MaxPositions.maxX;
    }

    if (newY < MaxPositions.minY) {
      newY = MaxPositions.minY;
    }

    if (newY > MaxPositions.maxY) {
      newY = MaxPositions.maxY;
    }

    dataContext!.setPositionOffsetX(newX);
    dataContext!.setPositionOffsetY(newY);
  };

  const handleDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!ourRef.current) return;
    const startX = dataContext!.positionOffsetX;
    const startY = dataContext!.positionOffsetY;
    const startMouseX = e.pageX;
    const startMouseY = e.pageY;
    mouseCoords.current = { startX, startY, startMouseX, startMouseY };
    setIsMouseDown(true);
    document.body.style.cursor = "grabbing";
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!ourRef.current) return;
    document.body.style.cursor = "default";
  };

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isMouseDown || !ourRef.current) return;
    e.preventDefault();
    const x = e.clientX;
    const y = e.clientY;
    const walkX = (x - mouseCoords.current.startMouseX) * mouseDragFactor;
    const walkY = (y - mouseCoords.current.startMouseY) * mouseDragFactor;
    updatePositions(walkX, walkY);
  };

  return (
    <div
      ref={ourRef}
      onMouseDown={handleDragStart}
      onMouseUp={handleDragEnd}
      onMouseMove={handleDrag}
    >
      {props.children}
    </div>
  );
}
