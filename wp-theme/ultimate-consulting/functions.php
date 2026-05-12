<?php
/**
 * Ultimate Consulting theme functions.
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/**
 * Theme setup.
 */
function uc_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );
    add_theme_support( 'automatic-feed-links' );

    register_nav_menus( array(
        'primary' => __( 'Primary Menu (unused — header navigation is hardcoded)', 'ultimate-consulting' ),
    ) );
}
add_action( 'after_setup_theme', 'uc_setup' );

/**
 * Enqueue styles, scripts, fonts, Tailwind CDN, and Lucide icons.
 */
function uc_enqueue_assets() {
    $version = wp_get_theme()->get( 'Version' );

    // Poppins font.
    wp_enqueue_style(
        'uc-fonts',
        'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        array(),
        null
    );

    // Custom CSS (animations, marquee, scroll reveals).
    wp_enqueue_style(
        'uc-custom',
        get_template_directory_uri() . '/assets/css/custom.css',
        array(),
        $version
    );

    // Lucide icons (loaded in footer, replaces <i data-lucide="..."> tags).
    wp_enqueue_script(
        'uc-lucide',
        'https://unpkg.com/lucide@latest',
        array(),
        null,
        true
    );

    // Theme JS — depends on Lucide.
    wp_enqueue_script(
        'uc-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array( 'uc-lucide' ),
        $version,
        true
    );
}
add_action( 'wp_enqueue_scripts', 'uc_enqueue_assets' );

/**
 * Inject Tailwind config + Tailwind CDN script in <head>.
 *
 * NOTE: Tailwind Play CDN is for prototyping only. For production:
 *   1. Install Tailwind locally: `npm i -D tailwindcss`
 *   2. Configure tailwind.config.js with the same colors/fonts.
 *   3. Build to assets/css/tailwind.css and enqueue it instead.
 *   4. Remove this function.
 */
function uc_tailwind_cdn() {
    ?>
    <script>
      window.tailwind = window.tailwind || {};
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              primary: '#1C82E2',
              secondary: '#CC3366',
            },
            fontFamily: {
              sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
            },
          },
        },
      };
    </script>
    <script src="https://cdn.tailwindcss.com"></script>
    <?php
}
add_action( 'wp_head', 'uc_tailwind_cdn', 5 );

/**
 * Helper: render the site logo. Falls back to a text mark if the file is missing.
 */
function uc_logo( $class = 'h-10' ) {
    $path = '/assets/img/CONSULTINGfinal.png';
    $abs  = get_template_directory() . $path;
    if ( file_exists( $abs ) ) {
        printf(
            '<img src="%s" alt="%s" class="%s" />',
            esc_url( get_template_directory_uri() . $path ),
            esc_attr( get_bloginfo( 'name' ) ),
            esc_attr( $class )
        );
    } else {
        printf(
            '<span class="text-white font-bold text-xl tracking-wide">%s</span>',
            esc_html( get_bloginfo( 'name' ) )
        );
    }
}

/**
 * Helper: format a post date the way the React site did.
 */
function uc_post_meta() {
    printf(
        '<span class="text-sm text-gray-400">%s &middot; %s</span>',
        esc_html( get_the_date() ),
        esc_html( get_the_author() )
    );
}
