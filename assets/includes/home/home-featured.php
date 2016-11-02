<div id="home-featured" class="">

	<div class="container blog-main">

    <?php
      if (have_posts()) : while (have_posts() ) : the_post();
		    get_template_part( 'assets/includes/post-templates/home-featured-template', get_post_format() );
      endwhile;
    ?>


    <!-- TODO Make this a carousel of featured projects
     <nav>
    	<ul class="pager">
    		<li><?php next_posts_link( 'Previous' ); ?></li>
    		<li><?php previous_posts_link( 'Next' ); ?></li>
    	</ul>
    </nav> -->
    <?php endif; ?>

	</div> <!-- /.blog-main -->

	<?php //get_sidebar(); ?>
</div>
