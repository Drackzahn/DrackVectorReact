import { useState } from "react";

export function useDrackTabs(){
    const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedValue(newValue);
  };

  return [selectedValue, handleChange] as const;
}