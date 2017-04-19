<?php
/**
 * Plugin Name: IMC Industrial Plugin
 * Plugin URI: https://bdsdesign.co
 * Description: This plugin adds necessary custom functionality to the IMC website
 * Version: 1.0.0
 * Author: Brandon Da Silva
 * Author URI: https://bdsdesign.co
 * License: GPL2
 */

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

 add_filter( 'query_vars', function( $query_vars ) {
   $query_vars[] = 'post_parent';
   return $query_vars;
 });


 function wp_api_encode_yoast($data, $post, $context) {
    $yoastMeta = array(

      'wpseo_focuskw' => get_metadata('post', $data['ID'], '_yoast_wpseo_focuskw', true),
      'wpseo_title' => get_metadata('post', $data['ID'], '_yoast_wpseo_title', true),
      'wpseo_metadesc' => get_metadata('post', $data['ID'], '_yoast_wpseo_metadesc', true),
      'wpseo_linkdex' => get_metadata('post', $data['ID'], '_yoast_wpseo_linkdex', true),
      'wpseo_metakeywords' => get_metadata('post', $data['ID'], '_yoast_wpseo_metakeywords', true),
      'wpseo_meta_robots_noindex' => get_metadata('post', $data['ID'], '_yoast_wpseo_meta-robots-noindex', true),
      'wpseo_meta_robots_nofollow' => get_metadata('post', $data['ID'], '_yoast_wpseo_meta-robots-nofollow', true),
      'wpseo_meta_robots_adv' => get_metadata('post', $data['ID'], '_yoast_wpseo_meta-robots-adv', true),
      'wpseo_canonical' => get_metadata('post', $data['ID'], '_yoast_wpseo_canonical', true),
      'wpseo_redirect' => get_metadata('post', $data['ID'], '_yoast_wpseo_redirect', true),
      'wpseo_opengraph_title' => get_metadata('post', $data['ID'], '_yoast_wpseo_opengraph-title', true),
      'wpseo_opengraph_description' => get_metadata('post', $data['ID'], '_yoast_wpseo_opengraph-description', true),
      'wpseo_opengraph_image' => get_metadata('post', $data['ID'], '_yoast_wpseo_opengraph-image', true),
      'wpseo_twitter_title' => get_metadata('post', $data['ID'], '_yoast_wpseo_twitter-title', true),
      'wpseo_twitter_description' => get_metadata('post', $data['ID'], '_yoast_wpseo_twitter-description', true),
      'wpseo_twitter_image' => get_metadata('post', $data['ID'], '_yoast_wpseo_twitter-image', true)

    );
    $data['seo'] = (array) $yoastMeta;
    return $data;
  }

  add_filter('json_prepare_post', 'wp_api_encode_yoast', 10, 3);
  add_filter('json_prepare_page', 'wp_api_encode_yoast', 10, 3);
