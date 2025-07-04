import { createElement } from "@wordpress/element";
import { SelectControl, TextControl } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

const smartTagAttributes = {
    tagName: {
        type: "string",
        default: "div",
    },
    tagHref: {
        type: "string",
        default: "",
    },
    tagRel: {
        type: "string",
        default: "",
    },
    tagTarget: {
        type: "string",
        default: "_self",
    },
};

const SmartTag = (props) => {
    const { tagName, id, tagHref, tagRel, tagTarget, style, className, children } = props;
    return createElement(tagName, { className, id, href: tagHref, rel: tagRel, target: tagTarget, style }, children);
};

const SmartTagControl = ({ attributes, setAttributes }) => {
    return (
        <>
            <SelectControl
                label={__("Tag", "smart-tag-block")}
                value={attributes.tagName}
                options={[
                    { label: "<div>", value: "div" },
                    { label: "<header>", value: "header" },
                    { label: "<main>", value: "main" },
                    { label: "<section>", value: "section" },
                    { label: "<article>", value: "article" },
                    { label: "<aside>", value: "aside" },
                    { label: "<footer>", value: "footer" },
                    { label: "<a>", value: "a" },
                ]}
                onChange={(tagName) => setAttributes({ tagName })}
            />

            {attributes.tagName === "a" && (
                <>
                    <TextControl
                        label={__("Link to (href)", "smart-tag-block")}
                        help=""
                        value={attributes.tagHref}
                        onChange={(tagHref) => setAttributes({ tagHref })}
                    />
                    <TextControl label={__("Rel", "smart-tag-block")} help="" value={attributes.tagRel} onChange={(tagRel) => setAttributes({ tagRel })} />
                    <TextControl
                        label={__("Target", "smart-tag-block")}
                        help=""
                        value={attributes.tagTarget}
                        onChange={(tagTarget) => setAttributes({ tagTarget })}
                    />
                </>
            )}
        </>
    );
};

export { SmartTag, SmartTagControl, smartTagAttributes };
