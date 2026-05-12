<?php
/**
 * Archive template — listing of blog posts (Ultimate Insights).
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>

<section class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden">
  <div class="absolute inset-0 bg-black/10"></div>
  <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 uc-fade-in">
    <span class="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block drop-shadow-sm">
      Ultimate Insights
    </span>
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-4">
      <?php
      if ( is_category() || is_tag() || is_archive() ) {
          single_term_title();
      } else {
          esc_html_e( 'Insights, perspectives, and lessons from the field', 'ultimate-consulting' );
      }
      ?>
    </h1>
    <p class="text-base text-white/80 max-w-2xl">
      Practical guidance on ERP modernization, change management, and operational excellence in higher education.
    </p>
  </div>
</section>

<section class="py-20 bg-gray-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <?php if ( have_posts() ) : ?>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <?php while ( have_posts() ) : the_post(); ?>
          <article class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col uc-fade-in transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <?php if ( has_post_thumbnail() ) : ?>
              <a href="<?php the_permalink(); ?>" class="block aspect-[16/9] overflow-hidden bg-gray-100">
                <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-full object-cover transition-transform duration-500 hover:scale-105' ) ); ?>
              </a>
            <?php endif; ?>
            <div class="p-6 flex flex-col flex-grow">
              <p class="text-xs font-bold uppercase tracking-widest text-blue-600 mb-3">
                <?php echo esc_html( get_the_date() ); ?>
              </p>
              <h2 class="text-xl font-bold text-gray-900 leading-snug mb-3 hover:text-blue-700 transition-colors">
                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
              </h2>
              <p class="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                <?php echo esc_html( wp_trim_words( get_the_excerpt(), 24 ) ); ?>
              </p>
              <a href="<?php the_permalink(); ?>"
                 class="inline-flex items-center text-sm font-semibold text-blue-600 hover:translate-x-1 transition-transform">
                Read More <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
              </a>
            </div>
          </article>
        <?php endwhile; ?>
      </div>

      <div class="mt-16 flex justify-center">
        <?php
        the_posts_pagination( array(
            'prev_text' => '<span class="inline-flex items-center"><i data-lucide="arrow-left" class="mr-2 w-4 h-4"></i> Previous</span>',
            'next_text' => '<span class="inline-flex items-center">Next <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i></span>',
        ) );
        ?>
      </div>

    <?php else : ?>
      <p class="text-center text-gray-600 text-lg">No posts found.</p>
    <?php endif; ?>
  </div>
</section>

<?php get_footer();
