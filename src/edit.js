import { SelectControl, PanelBody, TextControl } from "@wordpress/components";
import { InspectorControls, useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { SmartTagControl, SmartTag } from "./SmartTag";

export default function edit(props) {
    const { attributes, setAttributes } = props;
    const { title, captionStyle } = attributes;
    const blockProps = useBlockProps({ className: "caption-box" });

    const availableCaptionStyles = [
        { label: "Default", value: "default" },
        { label: "Style 1", value: "style-1" },
        { label: "Style 2", value: "style-2" },
    ];

    // Add class based on style
    if (captionStyle) {
        blockProps.className += ` caption-${captionStyle}`;
    }

    return (
        <>
            <InspectorControls>
                <PanelBody title="Caption Settings" initialOpen={true}>
                    <TextControl label="Title" value={title} onChange={(value) => setAttributes({ title: value })} />
                    <SelectControl
                        label="Select Style"
                        value={captionStyle}
                        options={availableCaptionStyles}
                        onChange={(value) => setAttributes({ captionStyle: value })}
                    />
                    <SmartTagControl {...props} />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <SmartTag {...attributes} tagName="div" className="">
                    {title && <p className="caption-title title">{title}</p>}
                    <div className="caption-content">
                        <InnerBlocks />
                    </div>
                </SmartTag>
            </div>
        </>
    );
}
