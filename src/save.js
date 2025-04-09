import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { SmartTagControl, SmartTag } from "./SmartTag";

export default function save(props) {
    const { attributes } = props;
    const { title, captionStyle } = attributes;
    const blockProps = useBlockProps.save({ className: "caption-box" });

    // Add class based on style
    if (captionStyle) {
        blockProps.className += ` caption-${captionStyle}`;
    }

    return (
        <SmartTag {...attributes} className={blockProps.className}>
            {title && <p className="caption-title title">{title}</p>}
            <div className="caption-content">
                <InnerBlocks.Content />
            </div>
        </SmartTag>
    );
}
