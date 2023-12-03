<?php
/**
 * JAd Console activate.
 *
 * @author Ken-chan
 * @package WordPress
 * @subpackage JAd Console
 * @since 0.0.1
 */

declare( strict_types = 1 );

if ( ! defined( 'ABSPATH' ) ) {
	exit( 'You do not have access rights.' );
}

/**
 * Class to output ad policy.
 */
class Jad_Ad_Policy_Notice extends Jad_Base {
	/**
	 * WordPress hook.
	 */
	public function __construct() {
		add_action( 'wp_enqueue_scripts', [ $this, 'add_scripts' ] );
		add_action( 'wp_footer', [ $this, 'show_ad_policy' ], 1 );
	}

	/**
	 * Include JS in Send Chat Tools settings page.
	 */
	public function add_scripts(): void {

		$assets = require_once $this->get_plugin_dir( 'jad-console' ) . '/build/ad-policy-notify.asset.php';

		wp_enqueue_script(
			$this->add_prefix( 'ad-policy-notify-script' ),
			$this->get_plugin_url( self::PLUGIN_SLUG ) . '/build/ad-policy-notify.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}
}
