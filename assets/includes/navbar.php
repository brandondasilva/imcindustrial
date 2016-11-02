<div id="navbar">
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <nav class="blog-nav">
        <a class="blog-nav-item" href="<?php bloginfo('wpurl');?>"><img src="<?php bloginfo('template_directory'); ?>/assets/images/logo.png" /></a>
        <?php wp_list_pages('&title_li='); ?>
      </nav>
    </div>
  </div>
</div>
