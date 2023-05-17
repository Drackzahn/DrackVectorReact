import { useContext, useState } from "react";
import { DataContext } from "../data/context/dataContext";
import { Box, Button, Divider, FormControlLabel, Switch } from "@mui/material";
import { DrackSlider } from "../components/DrackSlider";
import Konva from "konva";

function ViewArea() {
    const data = useContext(DataContext);

    return (
        <Box
            display="grid"
            gridTemplateAreas="
        'PositionX'
        'PositionY'
        'Scroll'
        ">
            <Box gridArea="PositionX">
                <DrackSlider
                    label="Position X"
                    maxValue={2000}
                    minValue={-500}
                    selectedValue={data.positionOffsetX}
                    updatedSelectedValue={data.setPositionOffsetX}
                />
            </Box>
            <Box gridArea="PositionY">
                <DrackSlider
                    label="Position Y"
                    maxValue={2000}
                    minValue={-500}
                    selectedValue={data.positionOffsetY}
                    updatedSelectedValue={data.setPositionOffsetY}
                />
            </Box>
            <Box gridArea="Scroll">
                <DrackSlider
                    label="Scroll"
                    maxValue={10}
                    minValue={-10}
                    selectedValue={data.scrollScaleFacor}
                    updatedSelectedValue={data.setScrollScaleFactor}
                />
            </Box>
        </Box>
    )
}



function ExportArea() {
    const data = useContext(DataContext);
    const [pixelRatioExport, setPixelRatioExport] = useState<number>(1);

    function downloadURI(uri: string, name: string) {
        var link = document.createElement('a');
        link.download = name;
        link.href = uri;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function exportImage() {
        const dataUrl = data.stage!.toDataURL({ pixelRatio: pixelRatioExport });

        downloadURI(dataUrl, 'image.png');
    }

    return (
        <Box
            display="grid"
            gridTemplateAreas="
        'Pixel'
        'IncludeBackground'
        'ExportButton'
        ">
            <Box gridArea="Pixel">
                <DrackSlider
                    label="Ratio"
                    maxValue={3}
                    minValue={0.01}
                    selectedValue={pixelRatioExport}
                    updatedSelectedValue={setPixelRatioExport}
                />
            </Box>

            <Box gridArea="IncludeBackground">
                <FormControlLabel
                    control={<Switch />}
                    label="Include Background"
                    checked={data.includeBackground}
                    onChange={(_, checked) => data.setIncludeBackground(checked)}
                />
            </Box>

            <Box gridArea="ExportButton">
                <Button
                    variant="contained"
                    onClick={exportImage}
                >
                    PNG
                </Button>
            </Box>
        </Box>
    )
}

export function ExportAndViewInterface() {

    return (
        <Box
            display="grid"
            gridTemplateAreas="
        'View'
        'Divider'
        'Export'
        ">
            <Box gridArea="View">
                <ViewArea />
            </Box>
            <Box gridArea="Divider">
                <Divider />
            </Box>
            <Box gridArea="Export">
                <ExportArea />
            </Box>
        </Box>
    )




}