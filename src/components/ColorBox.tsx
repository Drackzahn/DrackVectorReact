import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { ColorResult, SketchPicker } from "react-color";

export interface IColorBoxProps {
    color: string;
    setColor: (color: string) => void;
    isActive: boolean;
}

export function ColorBox(props: IColorBoxProps) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => setIsModalOpen(false);

    function onColorChange(color: ColorResult) {
        props.setColor(color.hex);
    };

    //TODO Add Favourite Color Menu with SearchBar and Preview

    return (
        <Box>
            <Button
                onClick={handleOpen}
                variant="outlined"
                style={{
                    backgroundColor: props.isActive ? props.color : "#000000",
                    height: "40px",
                    opacity: props.isActive ? 1 : 0.1
                }}
                disabled={!props.isActive}
            >
            </Button>

            <Modal open={isModalOpen}
                onClose={handleClose}
                disableAutoFocus
                keepMounted
            >
                <Box
                    position="absolute"
                    top="20%"
                    left="50%"
                    boxShadow={24}>
                    <SketchPicker
                        color={props.color}
                        onChangeComplete={onColorChange}
                        disableAlpha
                        presetColors={[]} />
                </Box>
            </Modal>
        </Box>
    )
}