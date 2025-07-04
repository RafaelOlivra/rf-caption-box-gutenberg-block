import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";
import "./editor.scss";

import edit from "./edit";
import save from "./save";
import metadata from "./block.json";

registerBlockType(metadata.name, {
    ...metadata,
    /**
     * @see ./edit.js
     */
    edit,

    /**
     * @see ./save.js
     */
    save,
});
