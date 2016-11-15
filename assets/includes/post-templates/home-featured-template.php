<div id="home-featured-template" class="blog-post">

  <div class="home-featured-content">

    <?php if ( has_post_thumbnail() ) {?>

  	<div class="row home-featured-post">
  		<div class="col-md-4 post-thumbnail" >

  			<?php	the_post_thumbnail( 'home-featured' ); ?>

  		</div>

  		<div id="post-exerpt1" class="col-md-6">

        <h2 class="blog-post-title">
          <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>

  			<?php the_excerpt(); ?>

  		</div>
    </div>


  	<?php } else { ?>
      <div class="row home-featured-post">
        <div id="post-exerpt2" class="col-md-6 col-md-offset-3">

          <h2 class="blog-post-title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
          </h2>

    			<?php the_excerpt(); ?>

      </div>
    </div>
  	<?php } ?>

  </div>
</div><!-- /.blog-post -->
