<?php

  // Add scripts and stylesheets
  function startwordpress_scripts() {
    wp_enqueue_style('styles', get_template_directory_uri() . '/assets/css/styles.min.css');
    wp_enqueue_script('jquery', get_template_directory_uri() . '/assets/bower_components/jquery/dist/jquery.min.js');
    wp_enqueue_script('require', get_template_directory_uri() . '/assets/js/require.js');
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js');
    // wp_enqueue_script('angular', get_template_directory_uri() . '/assets/bower_components/angular/angular.min.js');
  }

  add_action('wp_enqueue_scripts', 'startwordpress_scripts');

  // WordPress Titles
  add_theme_support('title-tag');

  /*
    Support Featured Images
  */
  add_theme_support('post-thumbnails');

  // Default thumbnail size
  set_post_thumbnail_size( 150, 150, true );
  // Additional image sizes
  add_image_size( 'home-featured', 400, 200 );

  // Change the excerpt length
  function custom_excerpt_length( $length ) {
  	return 30;
  }
  add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );
