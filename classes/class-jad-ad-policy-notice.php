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

		add_action(
			'init',
			function () {

				$jad_options = get_option( $this->add_prefix( 'options' ) );
				if ( ! $jad_options['ad_policy_notify']['plugin_enabled'] || ( is_user_logged_in() && $jad_options['ad_policy_notify']['admin_mode_enable'] ) ) {
					return;
				}

				add_action( 'wp_enqueue_scripts', [ $this, 'add_scripts' ] );
				add_action( 'wp_footer', [ $this, 'show_ad_policy' ], 1 );
				add_action( 'rest_api_init', [ $this, 'register_rest_api' ] );
			}
		);
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

	/**
	 * View the ad policy.
	 */
	public function show_ad_policy() {
		echo "<div id='jad-console-ad-policy-notify'></div>\n";
	}

	/**
	 * Register custom endpoint.
	 */
	public function register_rest_api(): void {
		register_rest_route(
			$this->get_api_namespace(),
			'notify',
			[
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => [ $this, 'readable_api' ],
				'permission_callback' => fn () => true,
			],
		);
	}

	/**
	 * Custom endpoint for read.
	 */
	public function readable_api(): WP_REST_Response {
		$jad_options           = get_option( $this->add_prefix( 'options' ) );
		$ad_policy_notify      = $jad_options['ad_policy_notify'];
		$use_front_page_values = [
			'design_type'     => $ad_policy_notify['design_type'],
			'main_message'    => $ad_policy_notify['main_message'],
			'policy_page_url' => $ad_policy_notify['policy_page_url'],
		];
		return new WP_REST_Response( $use_front_page_values, 200 );
	}
}
