import { SelectControl, PanelBody, ColorPalette } from "@wordpress/components";
import { InspectorControls, useBlockProps, InnerBlocks, RichText } from "@wordpress/block-editor";
import { useSelect } from "@wordpress/data";
import { SmartTagControl, SmartTag } from "./SmartTag";
import { __ } from "@wordpress/i18n";

export default function edit(props) {
    const { attributes, setAttributes } = props;
    const { title, captionStyle, backgroundColor, borderColor, captionColor } = attributes;
    const blockProps = useBlockProps({
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

    const availableCaptionStyles = [
        { label: "Default", value: "default" },
        { label: "Style 1", value: "style-1" },
        { label: "Style 2", value: "style-2" },
    ];
    const colors = useSelect("core/block-editor").getSettings().colors;

    return (
        <>
            <InspectorControls>
                <PanelBody title="Settings" initialOpen={true}>
                    <SelectControl
                        label="Select Style"
                        value={captionStyle}
                        options={availableCaptionStyles}
                        onChange={(value) => setAttributes({ captionStyle: value })}
                    />
                    <SmartTagControl {...props} />
                </PanelBody>
                <PanelBody title="Colors" initialOpen={false}>
                    <div style={{ marginBottom: "1em" }}>
                        <p>
                            <strong>Background Color</strong>
                        </p>
                        <ColorPalette colors={colors} value={backgroundColor} onChange={(color) => setAttributes({ backgroundColor: color })} />
                    </div>
                    <div style={{ marginBottom: "1em" }}>
                        <p>
                            <strong>Border Color</strong>
                        </p>
                        <ColorPalette colors={colors} value={borderColor} onChange={(color) => setAttributes({ borderColor: color })} />
                    </div>
                    <div>
                        <p>
                            <strong>Caption Text Color</strong>
                        </p>
                        <ColorPalette colors={colors} value={captionColor} onChange={(captionColor) => setAttributes({ captionColor })} />
                    </div>
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <SmartTag {...attributes} tagName="div" className="">
                    {title && (
                        <RichText
                            tagName="p"
                            className="caption-title title"
                            placeholder={__("Title", "rf-faq")}
                            value={title}
                            onChange={(title) => setAttributes({ title })}
                            style={blockProps.captionStyle}
                        />
                    )}
                    <div className="caption-content">
                        <InnerBlocks />
                    </div>
                </SmartTag>
            </div>
        </>
    );
}
