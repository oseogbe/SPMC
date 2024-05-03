"use client";

import ReactLightbox, { SlideImage } from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface LightboxProps {
    isOpen: boolean;
    index: number;
    onClose: () => void;
    slides: SlideImage[]
}

const Lightbox: React.FC<LightboxProps> = ({
    isOpen,
    onClose,
    index,
    slides,
}) => {
    return (
        <ReactLightbox
            open={isOpen}
            close={onClose}
            index={index}
            slides={slides}
            plugins={[Fullscreen, Slideshow, Counter, Thumbnails]}
            thumbnails={{
                position: "start"
            }}
        />
    )
}

export default Lightbox