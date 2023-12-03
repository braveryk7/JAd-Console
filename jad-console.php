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

load_plugin_textdomain( 'jad-console', false, basename( __DIR__ ) . '/languages' );

require_once __DIR__ . '/classes/class-jad-phpver-judge.php';

$jad_phpver_judge    = new Jad_Phpver_Judge();
$require_php_version = '8.2.0';

if ( ! $jad_phpver_judge->judgment( $require_php_version ) ) {
	$jad_phpver_judge->deactivate(
		__FILE__,
		'JAd Console',
		$require_php_version,
		is_admin(),
	);
} else {
	require_once __DIR__ . '/classes/class-jad-base.php';
	require_once __DIR__ . '/classes/class-jad-admin-page.php';
	require_once __DIR__ . '/classes/class-jad-activate.php';
	require_once __DIR__ . '/classes/class-jad-ad-policy-notice.php';

	/**
	 * Admin page.
	 */
	new Jad_Admin_Page();

	/**
	 * Plugin activate.
	 */
	new Jad_Activate();

	/**
	 * Ad policy notice.
	 */
	new Jad_Ad_Policy_Notice();
}
