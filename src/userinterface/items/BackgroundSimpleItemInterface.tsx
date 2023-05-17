import { PropsWithChildren, useContext, useState } from "react";
import { backgroundSimpleItemContext } from "../../data/context/backgroundSimpleItemContext";
import { Badge, Box, Divider, Tab, Tabs, Typography } from "@mui/material";
import { CreateNewSimpleItemData } from "../../helper/factory";
import { SelectedTabInterface } from "../../components/SelectedTabInterface";
import { NameField } from "../../components/elementInterface/NameField";
import { TypeSelector } from "../../components/elementInterface/TypeSelector";
import { simpleItemDataType, simpleItemDataTypes } from "../../data/items/simpleItemData";
import { DoesSimpleItemUseColors } from "../../helper/colorUseDecider";
import { ColorableElement5InterfaceBase } from "../bases/ColorableElementInterfaceBase";
import { LayerSelector } from "../../components/elementInterface/LayerSelector";
import { MoveableElementInterfaceBase } from "../bases/MoveableElementInterfaceBase";
import { SizeableElementInterfaceBase } from "../bases/SizeableElementInterfaceBase";
import { HasBorderInterfaceBase } from "../bases/HasBorderInterfaceBase";
import { HasOpacityInterfaceBase } from "../bases/HasOpacityInterfaceBase";
import { SkewableInterfaceBase } from "../bases/SkewableInterfaceBase";
import { ColorLens, Radar } from "@mui/icons-material";

function GeneralInterface() {
    var itemContext = useContext(backgroundSimpleItemContext);

    function onNameChange(newValue: string) {
        itemContext.updateSelected({ ...itemContext.selectedData!, name: newValue });
    }

    function setCurrentLayer(newValue: number) {
        itemContext.updateSelected({ ...itemContext.selectedData!, layerPosition: newValue });
    }

    const onTypeChange = (newValue: simpleItemDataType) => {
        const useColors = DoesSimpleItemUseColors(newValue);

        itemContext.updateSelected({
            ...itemContext.selectedData!,
            simpleItemType: newValue,
            color2IsActive: useColors.useColor2,
            color3IsActive: useColors.useColor3,
            color4IsActive: useColors.useColor4,
            color5IsActive: useColors.useColor5
        });
    };

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Name' 
                'Type' 
                'LayerPosition'
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Name">
                <NameField
                    value={itemContext.selectedData!.name}
                    onChange={onNameChange} />
            </Box>

            <Box
                gridArea="Type">
                <TypeSelector
                    selectedValue={itemContext.selectedData!.simpleItemType}
                    onChange={onTypeChange}
                    values={simpleItemDataTypes}
                />
            </Box>

            <Box
                gridArea="LayerPosition"
            >
                <LayerSelector
                    value={itemContext!.selectedData!.layerPosition}
                    onChange={setCurrentLayer}
                />
            </Box>
        </Box>
    )
}

function StyleInterface() {
    var itemContext = useContext(backgroundSimpleItemContext);

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Colors' 
                'Opacity'
                'Border'
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Colors">
                <ColorableElement5InterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected} />
            </Box>

            <Box
                gridArea="Border"
            >
                <HasBorderInterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected}
                />
            </Box>

            <Box
                gridArea="Opacity"
            >
                <HasOpacityInterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected}
                />
            </Box>
        </Box>
    )
}

function PositionInterface() {
    var itemContext = useContext(backgroundSimpleItemContext);

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Position'
                'Scaling' 
                'Skew'
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Position"
            >
                <MoveableElementInterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected}
                />
            </Box>

            <Box
                gridArea="Scaling"
            >
                <SizeableElementInterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected}
                />
            </Box>

            <Box
                gridArea="Skew"
            >
                <SkewableInterfaceBase
                    value={itemContext.selectedData!}
                    onChange={itemContext.updateSelected}
                />
            </Box>
        </Box>
    )
}

interface ITabPanelProps {
    index: number;
    value: number;
    header: string;
}

function TabPanel(props: PropsWithChildren<ITabPanelProps>) {
    const { children, value, index, header, ...other } = props;

    if (index !== value)
        return null;

    return (
        <Box
            display="grid"
            gridTemplateAreas="
                'Name' 
                'Children' 
                "
            gridTemplateColumns="auto"
            gap={4}>
            <Box
                gridArea="Name"
            >
                <Typography>{props.header}</Typography>
            </Box>
            <Box
                gridArea="Children"
            >
                {props.children}
            </Box>
        </Box>
    )
}

export function BackgroundSimpleItemInterface() {
    var itemContext = useContext(backgroundSimpleItemContext);
    const [selectedValue, setSelectedValue] = useState<number>(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedValue(newValue);
    };

    return (
        <SelectedTabInterface
            dataContext={itemContext}
            createNew={CreateNewSimpleItemData} >
            {itemContext.selectedData !== null &&
                <Box
                    display="grid"
                    gridTemplateAreas="
                'Tabs' 
                'OpenTab' 
                "
                    gridTemplateColumns="auto"
                    gap={8}>
                    <Box
                        gridArea="Tabs">
                        <Tabs
                            orientation="horizontal"
                            variant="standard"
                            value={selectedValue}
                            onChange={handleChange}>
                            <Tab icon={<Badge />} tabIndex={0} />
                            <Tab icon={<ColorLens />} tabIndex={1} />
                            <Tab icon={<Radar />} tabIndex={2} />
                        </Tabs>
                    </Box>

                    <Box
                        gridArea="OpenTab">
                        <TabPanel value={selectedValue} index={0}
                            header="General">
                            <GeneralInterface />
                        </TabPanel>
                        <TabPanel value={selectedValue} index={1}
                            header="Style">
                            <StyleInterface />
                        </TabPanel>
                        <TabPanel value={selectedValue} index={2}
                            header="Position">
                            <PositionInterface />
                        </TabPanel>
                    </Box>
                </Box>
            }
        </SelectedTabInterface>
    )
}