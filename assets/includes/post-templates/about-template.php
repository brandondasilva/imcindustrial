
<div id="about-page-template">
    <div id="about-page-header" style="background-image: url(<?php bloginfo('template_directory'); ?>/assets/images/welder.png); ">
      <div class="container">
    		<div class="row">
    			<div class="col-md-12 header-content">
            <h1><?php the_title(); ?></h1>
          </div> <!-- /.col -->
        </div> <!-- /.row -->
      </div>
    </div>

    <div id="about-page-content">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-md-offset-1 col-sm-12">
            <?php the_content(); ?>
          </div>
        </div>
      </div>
    </div>
</div>
