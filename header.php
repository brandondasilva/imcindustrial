<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Bootstrap core CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/blog.min.css" rel="stylesheet">
    <link href="<?php bloginfo('template_directory'); ?>/assets/css/styles.min.css" rel="stylesheet">


    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <?php wp_head(); ?>
  </head>

  <body>

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

    <div>

      <div id="header" style="background-image: url(<?php bloginfo('template_directory'); ?>/assets/images/banner.png); " class="blog-header">
        <div id="header-image" style="background-image: url(<?php bloginfo('template_directory'); ?>/assets/images/gear.png);" class="container">
          <div id="header-text">
            <h1 class="blog-title">
              <a href="<?php bloginfo('wpurl');?>"><?php echo get_bloginfo('name'); ?></a>
            </h1>
            <p class="lead blog-description"><?php echo get_bloginfo('description'); ?></p>
          </div>
        </div>
      </div>
