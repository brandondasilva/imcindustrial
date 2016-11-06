<div id="navbar">
  <div class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <nav class="blog-nav">
        <a class="blog-nav-item" href="<?php bloginfo('wpurl');?>"><img src="<?php bloginfo('template_directory'); ?>/assets/images/logo.png" /></a>
        <?php wp_list_pages('&title_li='); ?>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </nav>
    </div>
  </div>
</div>
