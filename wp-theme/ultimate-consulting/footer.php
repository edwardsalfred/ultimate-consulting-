<?php
/**
 * Theme footer — converts src/components/Footer.tsx to PHP.
 * The GHL newsletter iframe is preserved as-is.
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<footer class="bg-slate-900 pt-20 pb-10 border-t border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

      <!-- Logo + newsletter -->
      <div class="md:col-span-4">
        <div class="mb-8"><?php uc_logo( 'h-12' ); ?></div>
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/XvNwejXMxFvyI8Nm4yxI"
          id="inline-XvNwejXMxFvyI8Nm4yxI"
          title="Ultimate Insights Newsletter Opt-In"
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Ultimate Insights – Newsletter Opt-In"
          data-height="525"
          data-layout-iframe-id="inline-XvNwejXMxFvyI8Nm4yxI"
          data-form-id="XvNwejXMxFvyI8Nm4yxI"
          style="width:100%; min-height:525px; border:none; border-radius:10px;"></iframe>
      </div>

      <!-- Quick Links -->
      <div class="md:col-span-4 flex flex-col space-y-4">
        <h4 class="text-white font-semibold mb-4">Quick Links</h4>
        <a href="<?php echo esc_url( home_url( '/#services' ) ); ?>" class="text-gray-400 hover:text-primary transition-colors">Our Services</a>
        <a href="<?php echo esc_url( home_url( '/higher-education' ) ); ?>" class="text-gray-400 hover:text-primary transition-colors">Our Customers</a>
        <a href="<?php echo esc_url( home_url( '/who-we-are' ) ); ?>" class="text-gray-400 hover:text-primary transition-colors">Who We Are</a>
        <a href="<?php echo esc_url( get_post_type_archive_link( 'post' ) ?: home_url( '/insights' ) ); ?>" class="text-gray-400 hover:text-primary transition-colors">Ultimate Insights</a>
      </div>

      <!-- Address + social -->
      <div class="md:col-span-4 flex flex-col space-y-4">
        <div>
          <p class="text-gray-400 mb-4">
            PO Box 38,<br />
            Lebanon, GA, 30146<br />
            <a href="tel:8443448248" class="hover:text-primary">(844) 344-8248</a>
          </p>
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/company/4ucit/" target="_blank" rel="noopener noreferrer"
               class="text-gray-400 hover:text-white transition-colors">
              <i data-lucide="linkedin" class="w-6 h-6"></i>
            </a>
          </div>
        </div>
      </div>

    </div>

    <div class="border-t border-slate-800 pt-8 flex flex-col space-y-6 text-sm text-gray-500">
      <div class="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
        <div class="flex gap-6">
          <a href="<?php echo esc_url( home_url( '/privacy-policy' ) ); ?>" class="hover:text-white transition-colors">Privacy Policy</a>
          <a href="<?php echo esc_url( home_url( '/terms' ) ); ?>" class="hover:text-white transition-colors">Terms &amp; Conditions</a>
        </div>
        <span class="text-gray-500 text-center md:text-right">
          created by
          <a href="https://www.chatbotboy.ai/" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">Chatbot Boy AI</a>
        </span>
      </div>
      <p class="text-xs leading-relaxed text-gray-500 text-center md:text-left">
        COPYRIGHT &copy; <?php echo esc_html( date( 'Y' ) ); ?> ULTIMATE CONSULTING LLC. ALL RIGHTS RESERVED - REFERENCES TO ELLUCIAN, SCT, SUNGARD, DATATEL AND BANNER ARE FEDERAL REGISTERED TRADEMARKS OF ELLUCIAN / SUNGARD DATA SYSTEMS, INC. ORACLE AND PEOPLESOFT ARE REGISTERED TRADEMARKS OF ORACLE AND/OR ITS AFFILIATES. OTHER NAMES MAY BE TRADEMARKS OF THEIR RESPECTIVE OWNERS. ULTIMATE CONSULTING IT LLC IS NOT AFFILIATED WITH ELLUCIAN, SUNGARD DATA SYSTEMS, INC., ORACLE, NOR PEOPLESOFT.
      </p>
    </div>
  </div>
</footer>

<!-- GHL embed loader -->
<script src="https://link.msgsndr.com/js/form_embed.js" async></script>

<?php wp_footer(); ?>
</body>
</html>
