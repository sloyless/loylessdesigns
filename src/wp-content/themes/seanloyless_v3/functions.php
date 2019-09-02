<?php
/**
 * @package WordPress
 * @subpackage seanloyless_v3
 */
automatic_feed_links();

// Add Featured Image for posts functionality
if (function_exists( 'add_theme_support' ) ) {
  add_theme_support( 'post-thumbnails' );
  // default Post Thumbnail dimensions (cropped)
  set_post_thumbnail_size( 760, 460, true );
}

// More featured images for Pages/posts
if (class_exists('MultiPostThumbnails')) {
    new MultiPostThumbnails(
        array(
            'label' => 'Showcase Thumbnail',
            'id' => 'showcase-thumbnail',
            'post_type' => 'post'
        )
    );
}

// Add Featured Image to Post List page
add_filter('manage_posts_columns', 'add_thumbnail_column', 5);
function add_thumbnail_column($columns){
  $columns['new_post_thumb'] = __('Featured Image');
  return $columns;
}
add_action('manage_posts_custom_column', 'display_thumbnail_column', 5, 2);
function display_thumbnail_column($column_name, $post_id){
  switch($column_name){
    case 'new_post_thumb':
      $post_thumbnail_id = get_post_thumbnail_id($post_id);
      if ($post_thumbnail_id) {
        $post_thumbnail_img = wp_get_attachment_image_src( $post_thumbnail_id, 'thumbnail' );
        echo '<img width="80" src="' . $post_thumbnail_img[0] . '" />';
      }
      break;
  }
}

?>
