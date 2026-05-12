<?php
/**
 * Front page template — converts the homepage in src/App.tsx to PHP.
 * Sections: Hero, LogoCarousel, Partnerships, Services, Stats, CTA.
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>

<!-- Hero -->
<section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
  <div class="absolute inset-0 bg-black/10"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl uc-fade-in">
      <span class="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block drop-shadow-sm">
        Modernize Higher Education with Confidence
      </span>
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-8 max-w-4xl">
        Your Technology Should Support Student Success And Not Create More Complexity
      </h1>
      <p class="text-base text-white/80 mb-10 leading-relaxed max-w-2xl">
        Ultimate Consulting helps colleges and universities modernize enterprise systems, improve business processes, and lead transformation initiatives with confidence. With deep expertise in Ellucian Banner, Ellucian Colleague, and Workday, we support higher education institutions in navigating change, strengthening operations, and achieving lasting results.
      </p>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
         class="inline-flex items-center bg-white text-primary px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-colors text-lg shadow-lg">
        Work With Us <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
      </a>
    </div>
  </div>
</section>

<!-- Logo Carousel -->
<section class="py-12 bg-white overflow-hidden border-b border-gray-100">
  <div class="max-w-7xl mx-auto px-4 mb-8">
    <h2 class="text-center text-3xl md:text-4xl font-bold text-gray-900">Some of our Customers</h2>
  </div>
  <div class="relative">
    <div class="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
    <div class="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
    <div class="flex whitespace-nowrap w-fit uc-marquee">
      <?php
      $logos = array(
          'https://4ucit.com/wp-content/uploads/2022/11/MiamiUniversity.png',
          'https://4ucit.com/wp-content/uploads/2022/11/UNCG.png',
          'https://4ucit.com/wp-content/uploads/2022/11/Northeast.png',
          'https://4ucit.com/wp-content/uploads/2022/11/UNCcharlotte.png',
          'https://4ucit.com/wp-content/uploads/2022/11/SFCC.png',
          'https://4ucit.com/wp-content/uploads/2022/11/California.png',
          'https://4ucit.com/wp-content/uploads/2022/11/PENN.png',
          'https://4ucit.com/wp-content/uploads/2023/01/west-indies.png',
          'https://4ucit.com/wp-content/uploads/2022/11/Xavier.png',
          'https://4ucit.com/wp-content/uploads/2022/11/ACU.png',
          'https://4ucit.com/wp-content/uploads/2023/01/doane.png',
          'https://4ucit.com/wp-content/uploads/2022/11/Clemson.png',
          'https://4ucit.com/wp-content/uploads/2022/11/Regents.png',
          'https://4ucit.com/wp-content/uploads/2022/11/UNCpembroke.png',
      );
      // Duplicated for seamless loop.
      $loop = array_merge( $logos, $logos );
      foreach ( $loop as $logo ) : ?>
        <div class="flex-shrink-0 px-10 h-20 flex items-center">
          <img src="<?php echo esc_url( $logo ); ?>" alt="Institution Logo"
               class="h-full object-contain"
               referrerpolicy="no-referrer"
               onerror="this.parentElement.style.display='none'" />
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Partnerships -->
<section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mb-6 lg:mb-0">
        Higher Education Expertise Built Around Your Core Systems
      </h2>
      <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>" class="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
        Work With Us <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <?php
      $partners = array(
          array(
              'logo'        => esc_url( get_template_directory_uri() . '/assets/img/ellucian.png' ),
              'fallback'    => 'https://4ucit.com/wp-content/uploads/2022/11/ellucian.png',
              'description' => 'We help institutions implement, optimize, and support Ellucian Banner and Colleague across student, financial aid, finance, HR, payroll, and related administrative functions. Whether your institution is addressing daily operational challenges, planning for modernization, or improving service delivery, our team brings the deep functional and technical experience to help you move forward.',
              'logo_class'  => '',
          ),
          array(
              'logo'        => 'https://avaap.com/wp-content/uploads/2025/10/workday.png',
              'fallback'    => '',
              'description' => 'Ultimate Consulting supports colleges and universities with Workday initiatives across human capital management, finance, student operations, reporting, and organizational alignment. We provide expert functional and technical support to ensure your Workday environment and complex system migrations are successful.',
              'logo_class'  => '',
          ),
          array(
              'logo'        => esc_url( get_template_directory_uri() . '/assets/img/oracle.png' ),
              'fallback'    => '',
              'description' => 'Ultimate Consulting offers comprehensive Oracle PeopleSoft services, helping organizations optimize, upgrade, and maintain their enterprise applications. We deliver specialized functional and technical support across PeopleSoft environments to ensure your campus systems operate flawlessly.',
              'logo_class'  => 'bg-white p-2 rounded-lg',
          ),
      );
      foreach ( $partners as $p ) : ?>
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full uc-fade-in transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
          <div class="h-16 mb-8 flex items-center">
            <img src="<?php echo esc_url( $p['logo'] ); ?>" alt="Partner Logo"
                 class="max-h-full max-w-[200px] object-contain <?php echo esc_attr( $p['logo_class'] ); ?>"
                 referrerpolicy="no-referrer" />
          </div>
          <p class="text-gray-600 mb-8 flex-grow"><?php echo esc_html( $p['description'] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Services -->
<section id="services" class="py-24 bg-white scroll-mt-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mb-16 uc-fade-in">
      <span class="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-3">Our Services</span>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
        Services Designed for Higher Education
      </h2>
      <p class="mt-4 text-gray-500 leading-relaxed max-w-xl">
        Three pillars of support — from deep technical ERP expertise to change management that drives real adoption.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <?php
      $service_cards = array(
          array(
              'icon'        => 'server',
              'title'       => 'Enterprise System Strategy and Support',
              'description' => 'We provide implementation support, optimization, advisory services, and operational guidance for the core systems that power your institution.',
              'link'        => '/services/enterprise-system-strategy',
          ),
          array(
              'icon'        => 'workflow',
              'title'       => 'Process Improvement and Operational Efficiency',
              'description' => 'We help colleges and universities streamline workflows, reduce manual effort, improve collaboration across departments, and better align systems with institutional goals.',
              'link'        => '/services/process-improvement',
          ),
          array(
              'icon'        => 'users',
              'title'       => 'Change Management, Training, and Functional Leadership',
              'description' => 'We prepare teams for change through strategic planning, stakeholder engagement, communication, training, and ongoing functional support that drives adoption and long-term success.',
              'link'        => '/services/change-management',
          ),
      );
      foreach ( $service_cards as $i => $card ) :
          $num = str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT );
      ?>
        <a href="<?php echo esc_url( home_url( $card['link'] ) ); ?>"
           class="group relative block bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-hidden transition-all duration-300 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1.5 uc-fade-in"
           style="transition-delay: <?php echo esc_attr( $i * 80 ); ?>ms;">
          <div class="absolute top-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 group-hover:w-full"></div>
          <span class="absolute top-5 right-6 text-[4rem] font-black leading-none tabular-nums select-none pointer-events-none"
                style="color: rgba(28,130,226,0.06);" aria-hidden="true"><?php echo esc_html( $num ); ?></span>
          <div class="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
               style="background: rgba(28,130,226,0.1); color: #1C82E2;">
            <i data-lucide="<?php echo esc_attr( $card['icon'] ); ?>" class="w-7 h-7"></i>
          </div>
          <h3 class="relative text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-blue-700 transition-colors"><?php echo esc_html( $card['title'] ); ?></h3>
          <p class="relative text-gray-600 text-sm leading-relaxed mb-6"><?php echo esc_html( $card['description'] ); ?></p>
          <div class="relative inline-flex items-center text-sm font-semibold text-blue-600 transition-transform group-hover:translate-x-1">
            Learn More <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- Stats -->
<section class="py-20 bg-slate-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-16">
      <h2 class="text-3xl md:text-4xl font-bold">A team you can trust</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-700">

      <div class="text-center px-4 pt-8 md:pt-0">
        <div class="text-5xl md:text-6xl font-bold text-primary mb-4" data-uc-counter data-target="200" data-suffix="+">0+</div>
        <h3 class="text-xl font-semibold mb-3">Deep Institutional Experience</h3>
        <p class="text-gray-400">Our consultants understand the operational realities of higher education, including student services, enrollment, financial aid, finance, HR, payroll, and compliance.</p>
      </div>

      <div class="text-center px-4 pt-8 md:pt-0">
        <div class="text-5xl md:text-6xl font-bold text-primary mb-4" data-uc-counter data-target="50" data-suffix="+">0+</div>
        <h3 class="text-xl font-semibold mb-3">Functional and Technical Strength</h3>
        <p class="text-gray-400">We combine strategic insight, functional expertise, and technical execution to help institutions solve complex challenges and move initiatives forward.</p>
      </div>

      <div class="text-center px-4 pt-8 md:pt-0">
        <div class="text-5xl md:text-6xl font-bold text-primary mb-4" data-uc-counter data-target="97.8" data-suffix="%" data-decimals="1">0%</div>
        <h3 class="text-xl font-semibold mb-3">Sustainable Results</h3>
        <p class="text-gray-400">We focus on practical solutions that strengthen operations, improve the user experience, and create value beyond implementation.</p>
      </div>

    </div>
  </div>
</section>

<!-- CTA -->
<section class="py-24 bg-gray-50 relative overflow-hidden">
  <div class="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
  <div class="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute -bottom-8 left-20 w-64 h-64 bg-blue-300/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

  <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Move Forward?</h2>
    <p class="text-xl text-gray-600 mb-10">
      Let&rsquo;s talk about your institution&rsquo;s goals and how Ultimate Consulting can help you modernize with confidence.
    </p>
    <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
       class="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-blue-600 transition-colors text-lg shadow-lg hover:shadow-xl">
      Contact Us <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
    </a>
  </div>
</section>

<?php get_footer();
