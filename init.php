<?php

/**
 * Plugin Name:       Caption Box
 * Description:       A block to display a caption box.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Rafael Oliveira
 * Author URL:        https://rafaeloliveiradesign.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       caption-box
 *
 * @package           caption-box
 */

if (! defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_caption_box_block_init()
{
    register_block_type(__DIR__ . '/build/block.json');
}
add_action('init', 'create_block_caption_box_block_init');
