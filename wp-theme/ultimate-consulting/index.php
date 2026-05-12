<?php
/**
 * Generic fallback — used when no more specific template matches.
 * Shows the same layout as archive.php.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_template_part( 'archive' );
