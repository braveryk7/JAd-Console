<?php
/**
 * JAd Console settings page.
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
 * JAd Console settings page.
 */
class Jad_Api extends Jad_Base {
	/**
	 * WordPress hook.
	 * Add settings page link in admin page.
	 */
	public function __construct() {
		add_action( 'rest_api_init', [ $this, 'register_rest_api' ] );
	}
}
