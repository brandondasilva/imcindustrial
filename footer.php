  <footer id="footer">
    <div id="footer-content" class="container">
      <div class="row">
        <div class="col-md-4 col-sm-4 footer-left">
          <h2>IMC Industrial</h2>

          <h4 class="footer-titles"><a href="<?php bloginfo('wpurl');?>">Home</a></h4>
          <h4 class="footer-titles"><?php wp_list_pages('&title_li='); ?></h4>
          <h4 class="footer-titles"><a href="#">Portfolio</a></h4>
          <h4 class="footer-titles"><a href="#">Contact</a></h4>
        </div>

        <div class="col-md-4 col-sm-4 footer-center">
          <div class="footer-center-content">
            <h2>Contact</h2>

            <h4>1205 Twinney Drive, Unit #10</h4>
            <h4>Newmarket, ON</h4>
            <h4>L3Y 9C9</h4>
            <div class="footer-button-group">
              <a href="#" class="button-wrapper">
                <span class="button footer-button">
                  Contact Us
                </span>
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-4 col-sm-4 footer-right">
          <a href="<?php bloginfo('wpurl');?>"><img src="<?php bloginfo('template_directory'); ?>/assets/images/logo.png" /></a>

          <p>Copyright &copy; IMC Industrial 2016</p>
          <p>Designed by <a href="http://premus.ca" target="_blank">Premus</a></p>
          <p>Powered by <a href="https://wordpress.org" target="_blank">WordPress</a></p>
        </div>
      </div>
    </div>
  </footer>

  <?php wp_footer(); ?>
</body>
</html>
