import { humanoidData } from "../../../data/figures/persons/humanoidData";
import { ScaleableGroup } from "../../ScaleableGroup";
import { HumanoidHeadGrafic } from "./heads/HumanoidHeadGrafic";

export interface HumanoidPersonGraficProps {
  item: humanoidData | undefined;
}

export function HumanoidPersonGrafic(props: HumanoidPersonGraficProps) {
  return (
    <ScaleableGroup item={props.item}>
      <HumanoidHeadGrafic item={props.item?.head} />
    </ScaleableGroup>
  );
}
