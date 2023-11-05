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
 * JAd Console activate process.
 */
class Jad_Activate extends Jad_Base {
	/**
	 * WordPress hook.
	 */
	public function __construct() {
		register_activation_hook( $this->get_plugin_path(), [ $this, 'register_options' ] );
	}

	/**
	 * Register wp_options column.
	 */
	public function register_options(): void {
		$options = [
			'plugin_enabled'    => true,
			'admin_mode_enable' => true,
			'design_type'       => 'default',
			'main_message'      => '',
			'policy_page_url'   => '',
		];

		if ( ! get_option( $this->add_prefix( 'options' ) ) ) {
			add_option( $this->add_prefix( 'options' ), $options );
		}
	}
}
