<?php
/**
 * Theme header — converts src/components/Navbar.tsx to PHP.
 * Megamenu items are hardcoded to mirror NAV_ITEMS in Navbar.tsx.
 * Behavior (sticky scroll, mobile toggle, megamenu hover) is handled in assets/js/main.js.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <?php wp_head(); ?>
</head>
<body <?php body_class( 'font-sans bg-slate-50 text-slate-800' ); ?>>
<?php wp_body_open(); ?>

<nav id="uc-navbar"
     class="fixed w-full z-50 transition-all duration-300 py-6"
     data-uc-navbar
     style="background: transparent;">

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">

      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
          <?php uc_logo( 'h-10 transition-all duration-300' ); ?>
        </a>
      </div>

      <!-- Desktop megamenu -->
      <ul class="hidden md:flex items-center space-x-0">

        <!-- Our Services -->
        <li class="relative group" data-uc-menu>
          <button class="flex items-center gap-1 py-1.5 px-4 text-base font-medium text-white/60 hover:text-white transition-colors duration-300">
            <span>Our Services</span>
            <i data-lucide="chevron-down" class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          <div class="absolute left-0 top-full pt-2 z-10 hidden group-hover:block">
            <div class="w-max p-4 rounded-2xl"
                 style="background: rgba(255,255,255,0.97); border: 1px solid rgba(28,130,226,0.2); border-top: 2px solid #1C82E2; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(28,130,226,0.1);">
              <h3 class="mb-4 text-xs font-bold uppercase tracking-widest" style="color:#1C82E2;">Core Services</h3>
              <ul class="space-y-6">
                <?php
                $services = array(
                    array(
                        'label'       => 'Enterprise System Strategy and Support',
                        'description' => 'Implementation, optimization, and advisory for core ERPs',
                        'icon'        => 'server',
                        'link'        => '/services/enterprise-system-strategy',
                    ),
                    array(
                        'label'       => 'Process Improvement and Operational Efficiency',
                        'description' => 'Automated workflows across HR, finance, and student modules',
                        'icon'        => 'workflow',
                        'link'        => '/services/process-improvement',
                    ),
                    array(
                        'label'       => 'Change Management, Training, and Functional Leadership',
                        'description' => 'Training, interim leadership, and knowledge transfer',
                        'icon'        => 'users',
                        'link'        => '/services/change-management',
                    ),
                );
                foreach ( $services as $svc ) : ?>
                  <li>
                    <a href="<?php echo esc_url( home_url( $svc['link'] ) ); ?>" class="flex items-start space-x-3 group/item">
                      <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                           style="border:1px solid rgba(28,130,226,0.25); color:#1C82E2; background: rgba(28,130,226,0.06);">
                        <i data-lucide="<?php echo esc_attr( $svc['icon'] ); ?>" class="h-5 w-5"></i>
                      </div>
                      <div class="leading-5">
                        <p class="text-base font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors"><?php echo esc_html( $svc['label'] ); ?></p>
                        <p class="text-sm text-gray-500 group-hover/item:text-gray-700 transition-colors"><?php echo esc_html( $svc['description'] ); ?></p>
                      </div>
                    </a>
                  </li>
                <?php endforeach; ?>
              </ul>
            </div>
          </div>
        </li>

        <!-- Our Customers -->
        <li class="relative group" data-uc-menu>
          <button class="flex items-center gap-1 py-1.5 px-4 text-base font-medium text-white/60 hover:text-white transition-colors duration-300">
            <span>Our Customers</span>
            <i data-lucide="chevron-down" class="h-4 w-4 transition-transform duration-300 group-hover:rotate-180"></i>
          </button>
          <div class="absolute left-0 top-full pt-2 z-10 hidden group-hover:block">
            <div class="w-max p-4 rounded-2xl"
                 style="background: rgba(255,255,255,0.97); border: 1px solid rgba(28,130,226,0.2); border-top: 2px solid #1C82E2; backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); box-shadow: 0 20px 60px rgba(0,0,0,0.25), 0 4px 16px rgba(28,130,226,0.1);">
              <h3 class="mb-4 text-xs font-bold uppercase tracking-widest" style="color:#1C82E2;">Industries</h3>
              <ul class="space-y-6">
                <li>
                  <a href="<?php echo esc_url( home_url( '/higher-education' ) ); ?>" class="flex items-start space-x-3 group/item">
                    <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md"
                         style="border:1px solid rgba(28,130,226,0.25); color:#1C82E2; background: rgba(28,130,226,0.06);">
                      <i data-lucide="graduation-cap" class="h-5 w-5"></i>
                    </div>
                    <div class="leading-5">
                      <p class="text-base font-semibold text-gray-900 group-hover/item:text-blue-600 transition-colors">Higher Education</p>
                      <p class="text-sm text-gray-500 group-hover/item:text-gray-700 transition-colors">Specialized solutions for institutions</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li>

        <!-- Who We Are -->
        <li class="relative">
          <a href="<?php echo esc_url( home_url( '/who-we-are' ) ); ?>"
             class="flex items-center py-1.5 px-4 text-base font-medium text-white/60 hover:text-white transition-colors duration-300">
            Who We Are
          </a>
        </li>

        <!-- Ultimate Insights (blog archive) -->
        <li class="relative">
          <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ?: home_url( '/insights' ) ); ?>"
             class="flex items-center py-1.5 px-4 text-base font-medium text-white/60 hover:text-white transition-colors duration-300">
            Ultimate Insights
          </a>
        </li>
      </ul>

      <!-- Desktop CTA -->
      <div class="hidden md:flex items-center space-x-4">
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
           class="bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors flex items-center">
          Work With Us <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
        </a>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
        <button type="button"
                class="text-white"
                data-uc-mobile-toggle
                aria-controls="uc-mobile-panel"
                aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <i data-lucide="menu" class="w-6 h-6 uc-icon-menu"></i>
          <i data-lucide="x" class="w-6 h-6 uc-icon-close hidden"></i>
        </button>
      </div>

    </div>
  </div>

  <!-- Mobile panel -->
  <div id="uc-mobile-panel"
       class="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 hidden">
    <div class="px-4 pt-2 pb-6 space-y-1 max-h-[75vh] overflow-y-auto">
      <details class="border-b border-gray-50">
        <summary class="flex items-center justify-between px-3 py-3 text-lg font-medium text-gray-800 cursor-pointer list-none">
          <span>Our Services</span>
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </summary>
        <div class="bg-gray-50 px-4 py-4 space-y-4 rounded-b-md">
          <a href="<?php echo esc_url( home_url( '/services/enterprise-system-strategy' ) ); ?>" class="block text-gray-800 hover:text-primary">Enterprise System Strategy and Support</a>
          <a href="<?php echo esc_url( home_url( '/services/process-improvement' ) ); ?>" class="block text-gray-800 hover:text-primary">Process Improvement and Operational Efficiency</a>
          <a href="<?php echo esc_url( home_url( '/services/change-management' ) ); ?>" class="block text-gray-800 hover:text-primary">Change Management, Training, and Functional Leadership</a>
        </div>
      </details>
      <details class="border-b border-gray-50">
        <summary class="flex items-center justify-between px-3 py-3 text-lg font-medium text-gray-800 cursor-pointer list-none">
          <span>Our Customers</span>
          <i data-lucide="chevron-down" class="w-5 h-5"></i>
        </summary>
        <div class="bg-gray-50 px-4 py-4 space-y-4 rounded-b-md">
          <a href="<?php echo esc_url( home_url( '/higher-education' ) ); ?>" class="block text-gray-800 hover:text-primary">Higher Education</a>
        </div>
      </details>
      <a href="<?php echo esc_url( home_url( '/who-we-are' ) ); ?>" class="block px-3 py-3 text-lg font-medium text-gray-800 border-b border-gray-50">Who We Are</a>
      <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ?: home_url( '/insights' ) ); ?>" class="block px-3 py-3 text-lg font-medium text-gray-800 border-b border-gray-50">Ultimate Insights</a>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
         class="block w-full text-center bg-primary text-white px-6 py-3 rounded-full font-medium mt-6">
        Work With Us
      </a>
    </div>
  </div>
</nav>
