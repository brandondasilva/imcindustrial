<?php get_header(); ?>

<ui-view></ui-view>


<!-- ** HOME BANNER INCLUDE ** -->
<?php include( get_template_directory() . '/assets/includes/home/homebanner.php' ); ?>
<!-- ** END HOME BANNER INCLUDE ** -->

<!-- ** SERVICES CTA INCLUDE ** -->
<?php //include( get_template_directory() . '/assets/includes/home/services-cta.php' ); ?>
<!-- ** END SERVICES CTA INCLUDE ** -->

<!-- ** SERVICES CTA INCLUDE ** -->
<?php include( get_template_directory() . '/assets/includes/home/home-featured.php' ); ?>
<!-- ** END SERVICES CTA INCLUDE ** -->

<?php get_footer(); ?>
