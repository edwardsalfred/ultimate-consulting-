<?php
/**
 * Single blog post template — used by existing WP blog posts (Insights).
 */
if ( ! defined( 'ABSPATH' ) ) exit;

get_header();
?>

<article class="bg-white">
  <!-- Hero / featured image -->
  <header class="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
    <div class="absolute inset-0 bg-black/10"></div>
    <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center uc-fade-in">
      <span class="text-amber-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block drop-shadow-sm">
        Ultimate Insights
      </span>
      <h1 class="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6"><?php the_title(); ?></h1>
      <p class="text-white/70 text-sm">
        <?php echo esc_html( get_the_date() ); ?>
        <?php if ( get_the_author() ) : ?>
          &middot; <?php echo esc_html( get_the_author() ); ?>
        <?php endif; ?>
      </p>
    </div>
  </header>

  <?php if ( has_post_thumbnail() ) : ?>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
      <div class="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
        <?php the_post_thumbnail( 'large', array( 'class' => 'w-full h-auto' ) ); ?>
      </div>
    </div>
  <?php endif; ?>

  <!-- Body -->
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <?php while ( have_posts() ) : the_post(); ?>
      <div class="prose prose-lg max-w-none uc-prose">
        <?php the_content(); ?>
      </div>

      <div class="mt-16 pt-10 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
        <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ?: home_url( '/insights' ) ); ?>"
           class="inline-flex items-center text-primary font-medium hover:text-blue-700 transition-colors">
          <i data-lucide="arrow-left" class="mr-2 w-4 h-4"></i> Back to Insights
        </a>
        <a href="<?php echo esc_url( home_url( '/contact' ) ); ?>"
           class="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-medium hover:bg-blue-600 transition-colors">
          Work With Us <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
        </a>
      </div>
    <?php endwhile; ?>
  </div>
</article>

<?php get_footer();
