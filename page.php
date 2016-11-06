<?php get_header(); ?>

<div id="about-page">


				<?php
					if ( have_posts() ) : while ( have_posts() ) : the_post();

						get_template_part( 'assets/includes/post-templates/about-template', get_post_format() );

					endwhile; endif;
				?>

			
</div>



<?php get_footer(); ?>
