import { useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { SmartTag } from "./SmartTag";

export default function save(props) {
    const { attributes } = props;
    const { title, captionStyle, backgroundColor, borderColor, captionColor } = attributes;
    const blockProps = useBlockProps.save({
        className: `caption-box caption-${captionStyle || "default"}`,
        style: {
            backgroundColor: backgroundColor || undefined,
            borderColor: borderColor || undefined,
        },
        captionStyle: {
            backgroundColor: borderColor || undefined,
            color: captionColor || undefined,
        },
    });

    return (
        <SmartTag {...attributes} className={blockProps.className} style={blockProps.style}>
            <RichText.Content tagName="p" className="caption-title title" value={title} style={blockProps.captionStyle} />
            <div className="caption-content">
                <InnerBlocks.Content />
            </div>
        </SmartTag>
    );
}
