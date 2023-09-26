<?php
/**
 * Plugin Name: JAd Console
 * Plugin URI:  https://www.braveryk7.com/
 * Description: 広告の統合管理を提供するWordPressプラグイン
 * Version:     0.0.1
 * Author:      Ken-chan
 * Author URI:  https://twitter.com/braveryk7
 * Text Domain: jad-console
 * Domain Path: /languages
 * License:     GPL2
 *
 * @author Ken-chan
 * @package WordPress
 * @subpackage JAd Console
 * @since 0.0.1
 */

declare(strict_types = 1);

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'You do not have access rights.' );
}

load_plugin_textdomain( 'jad-policy', false, basename( __DIR__ ) . '/languages' );
