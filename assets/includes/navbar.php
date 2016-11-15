<div id="navbar">
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <nav class="blog-nav">
        <div>
          <a class="blog-nav-item" href="<?php bloginfo('wpurl');?>">
            <img src="<?php bloginfo('template_directory'); ?>/assets/images/logo.png" />
          </a>
        </div>
        <div>
          <?php wp_list_pages('&title_li='); ?>
        </div>
        <div>
          <a href="#">Portfolio</a>
        </div>
        <div>
          <a href="#">Contact</a>
        </div>
      </nav>
    </div>
  </div>
</div>
