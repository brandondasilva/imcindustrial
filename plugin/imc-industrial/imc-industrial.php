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


        // 'wpseo_focuskw' => get_post_meta($post['ID'], 'wpseo_focuskw', true),
        // 'wpseo_title' => get_post_meta($post['ID'], 'wpseo_title', true),
        // 'wpseo_metadesc' => get_post_meta($post['ID'], 'wpseo_metadesc', true),
        // 'wpseo_linkdex' => get_post_meta($post['ID'], 'wpseo_linkdex', true),
        // 'wpseo_metakeywords' => get_post_meta($post['ID'], 'wpseo_metakeywords', true),
        // 'wpseo_meta-robots-noindex' => get_post_meta($post['ID'], 'wpseo_meta-robots-noindex', true),
        // 'wpseo_meta-robots-nofollow' => get_post_meta($post['ID'], 'wpseo_meta-robots-nofollow', true),
        // 'wpseo_meta-robots-adv' => get_post_meta($post['ID'], 'wpseo_meta-robots-adv', true),
        // 'wpseo_canonical' => get_post_meta($post['ID'], 'wpseo_canonical', true),
        // 'wpseo_redirect' => get_post_meta($post['ID'], 'wpseo_redirect', true),
        // 'wpseo_opengraph-title' => get_post_meta($post['ID'], 'wpseo_opengraph-title', true),
        // 'wpseo_opengraph-description' => get_post_meta($post['ID'], 'wpseo_opengraph-description', true),
        // 'wpseo_opengraph-image' => get_post_meta($post['ID'], 'wpseo_opengraph-image', true),
        // 'wpseo_twitter-title' => get_post_meta($post['ID'], 'wpseo_twitter-title', true),
        // 'wpseo_twitter-description' => get_post_meta($post['ID'], 'wpseo_twitter-description', true),
        // 'wpseo_twitter-image' => get_post_meta($post['ID'], 'wpseo_twitter-image', true)


        // 'wpseo_focuskw' => get_option('wpseo_focuskw'),
        // 'wpseo_title' => get_option('wpseo_title'),
        // 'wpseo_metadesc' => get_option('wpseo_metadesc'),
        // 'wpseo_linkdex' => get_option('wpseo_linkdex'),
        // 'wpseo_metakeywords' => get_option('wpseo_metakeywords'),
        // 'wpseo_meta-robots-noindex' => get_option('wpseo_meta-robots-noindex'),
        // 'wpseo_meta-robots-nofollow' => get_option('wpseo_meta-robots-nofollow'),
        // 'wpseo_meta-robots-adv' => get_option('wpseo_meta-robots-adv'),
        // 'wpseo_canonical' => get_option('wpseo_canonical'),
        // 'wpseo_redirect' => get_option('wpseo_redirect'),
        // 'wpseo_opengraph-title' => get_option('wpseo_opengraph-title'),
        // 'wpseo_opengraph-description' => get_option('wpseo_opengraph-description'),
        // 'wpseo_opengraph-image' => get_option('wpseo_opengraph-image'),
        // 'wpseo_twitter-title' => get_option('wpseo_twitter-title'),
        // 'wpseo_twitter-description' => get_option('wpseo_twitter-description'),
        // 'wpseo_twitter-image' => get_option('wpseo_twitter-image')


        'wpseo_focuskw' => get_post(),
        'wpseo_title' => get_post_meta(get_the_ID(), '_yoast_wpseo_title', true),
        'wpseo_metadesc' => get_post_meta(get_the_ID(), '_yoast_wpseo_metadesc', true),
        'wpseo_linkdex' => get_post_meta(get_the_ID(), '_yoast_wpseo_linkdex', true),
        'wpseo_metakeywords' => get_post_meta(get_the_ID(), '_yoast_wpseo_metakeywords', true),
        'wpseo_meta-robots-noindex' => get_post_meta(get_the_ID(), '_yoast_wpseo_meta-robots-noindex', true),
        'wpseo_meta-robots-nofollow' => get_post_meta(get_the_ID(), '_yoast_wpseo_meta-robots-nofollow', true),
        'wpseo_meta-robots-adv' => get_post_meta(get_the_ID(), '_yoast_wpseo_meta-robots-adv', true),
        'wpseo_canonical' => get_post_meta(get_the_ID(), '_yoast_wpseo_canonical', true),
        'wpseo_redirect' => get_post_meta(get_the_ID(), '_yoast_wpseo_redirect', true),
        'wpseo_opengraph-title' => get_post_meta(get_the_ID(), '_yoast_wpseo_opengraph-title', true),
        'wpseo_opengraph-description' => get_post_meta(get_the_ID(), '_yoast_wpseo_opengraph-description', true),
        'wpseo_opengraph-image' => get_post_meta(get_the_ID(), '_yoast_wpseo_opengraph-image', true),
        'wpseo_twitter-title' => get_post_meta(get_the_ID(), '_yoast_wpseo_twitter-title', true),
        'wpseo_twitter-description' => get_post_meta(get_the_ID(), '_yoast_wpseo_twitter-description', true),
        'wpseo_twitter-image' => get_post_meta(get_the_ID(), '_yoast_wpseo_twitter-image', true)

    );
    $data['seo'] = (array) $yoastMeta;
    return $data;
  }

  add_filter('json_prepare_post', 'wp_api_encode_yoast', 10, 3);
  add_filter('json_prepare_page', 'wp_api_encode_yoast', 10, 3);
