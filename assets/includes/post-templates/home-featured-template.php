<div id="home-featured-template" class="blog-post">
  <h1 class="section-header">Featured Projects</h1>

  <div class="home-featured-content">

    <?php if ( has_post_thumbnail() ) {?>

  	<div id="home-featured-post" class="row">
  		<div id="post-thumbnail" class="col-md-4" >

  			<?php	the_post_thumbnail( 'home-featured' ); ?>

  		</div>

  		<div id="post-exerpt1" class="col-md-6">

        <h2 class="blog-post-title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>

        <p class="blog-post-meta">

          <?php the_date(); ?> by <a href="#"><?php the_author(); ?></a>

        </p>

  			<?php the_excerpt(); ?>

  		</div>

  	</div>

  	<?php } else { ?>
  	<?php the_excerpt(); ?>
  	<?php } ?>

  </div>
</div><!-- /.blog-post -->
