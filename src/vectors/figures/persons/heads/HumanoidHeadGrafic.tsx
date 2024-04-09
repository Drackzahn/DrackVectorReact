import { Path, Rect } from "react-konva";
import { ScaleableGroupLite } from "../../../ScaleableGroupLite";
import {
  humanHead,
  humanHeadType,
} from "../../../../data/figures/persons/humanoidHeadData";
import {
  GetHasBorderColor,
  GetHasBorderThickness,
} from "../../../../data/baseInterfaces/IHasBorder";

export interface HumanoidHeadGraficProps {
  item: humanHead | undefined;
}

export function HumanoidHeadGrafic(props: HumanoidHeadGraficProps) {
  return (
    <ScaleableGroupLite item={props.item}>
      <SimpleHumanoidHeadOutline item={props.item} />
    </ScaleableGroupLite>
  );
}

function SimpleHumanoidHeadOutline(props: HumanoidHeadGraficProps) {
  function getSvgPath(): string {
    switch (props.item!.headType) {
      case humanHeadType.sharp:
        return "M256.82,5.00 C253.41,4.98 233.27,5.73 227.02,6.43 C219.44,7.35 205.47,10.25 198.03,11.98 C189.60,14.02 173.47,19.84 166.73,23.29 C159.15,27.24 145.70,35.38 139.01,40.08 C132.13,44.92 119.57,55.61 114.89,60.77 C109.30,66.96 101.06,79.15 97.24,86.70 C93.89,93.36 88.58,107.02 86.32,115.71 C84.35,123.33 81.63,139.67 80.62,147.15 C79.57,156.42 79.41,170.51 80.23,178.24 C81.31,188.54 83.55,225.73 85.28,236.15 C86.91,245.84 96.38,283.59 100.78,300.10 C105.03,316.36 113.54,352.83 115.94,365.59 C118.08,378.68 119.75,387.30 121.52,393.34 C122.64,397.09 124.88,403.02 126.74,406.74 C130.15,413.47 139.80,425.22 145.72,431.12 C148.90,434.28 162.21,445.48 168.30,450.26 C175.48,455.69 189.16,464.85 195.62,468.46 C203.15,472.55 218.89,480.32 226.81,484.09 C232.88,486.92 245.41,492.83 251.36,494.08 C253.99,494.59 260.60,493.41 263.98,492.18 C269.35,490.19 309.79,469.67 320.48,463.69 C327.29,459.75 341.51,451.33 346.46,447.92 C353.38,443.05 363.52,433.85 368.60,427.76 C373.75,421.54 379.74,412.28 382.45,406.07 C384.83,400.56 388.53,387.07 390.51,378.01 C393.42,363.34 399.08,335.77 404.08,315.44 C407.80,301.12 417.58,266.89 420.45,255.33 C422.19,247.58 425.18,232.07 426.41,223.96 C427.46,215.83 428.98,199.51 429.46,191.32 C429.75,183.16 429.91,167.86 429.78,160.77 C429.38,150.76 428.17,137.64 426.30,128.95 C425.01,123.03 416.83,98.51 412.47,88.37 C409.60,81.94 402.63,71.96 396.51,64.82 C391.63,59.38 380.67,47.35 375.17,42.49 C368.69,36.81 356.76,28.77 349.34,24.96 C342.60,21.52 327.90,15.80 320.62,13.50 C312.63,10.98 298.79,7.82 290.14,6.79 C283.64,6.02 257.49,5.00 256.82,5.00 Z";
      default:
        return "";
    }
  }

  const fillColor = props.item!.overrideSkinColor
    ? props.item!.skinColorHex
    : "#00000000"; // TODO Replace with general Skin color

  return (
    <Path
      data={getSvgPath()}
      stroke={GetHasBorderColor(props.item!)}
      strokeWidth={GetHasBorderThickness(props.item!, props.item!.scaleX)}
      fill={fillColor}
    />
  );
}
