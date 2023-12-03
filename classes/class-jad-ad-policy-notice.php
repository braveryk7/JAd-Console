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
}
