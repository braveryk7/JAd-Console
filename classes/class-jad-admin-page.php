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
class Jad_Admin_Page extends Jad_Base {
	/**
	 * WordPress hook.
	 * Add settings page link in admin page.
	 */
	public function __construct() {
		add_action( 'admin_menu', [ $this, 'add_menu' ] );
		add_action( 'admin_enqueue_scripts', [ $this, 'add_scripts' ] );
		add_filter( 'plugin_action_links_' . plugin_basename( $this->get_plugin_path() ), [ $this, 'add_settings_links' ] );
		add_action( 'rest_api_init', [ $this, 'register_rest_api' ] );
	}

	/**
	 * Add Setting menu.
	 */
	public function add_menu(): void {
		add_options_page(
			__( 'JAd Console', 'jad-console' ),
			__( 'JAd Console', 'jad-console' ),
			'manage_options',
			self::PLUGIN_SLUG,
			[ $this, 'settings_page' ],
		);
	}

	/**
	 * Add configuration link to plugin page.
	 *
	 * @param array|string $links plugin page setting links.
	 */
	public function add_settings_links( array $links ): array {
		$add_link = '<a href="options-general.php?page=' . self::PLUGIN_SLUG . '">' . __( 'Settings' ) . '</a>';
		array_unshift( $links, $add_link );
		return $links;
	}

	/**
	 * Include JS in Send Chat Tools settings page.
	 *
	 * @param string $hook_suffix WordPress hook_suffix.
	 */
	public function add_scripts( string $hook_suffix ): void {
		if ( 'settings_page_' . self::PLUGIN_SLUG !== $hook_suffix ) {
			return;
		}

		$assets = require_once $this->get_plugin_dir( 'jad-console' ) . '/build/index.asset.php';

		wp_enqueue_style(
			$this->add_prefix( 'style' ),
			$this->get_plugin_url( self::PLUGIN_SLUG ) . '/build/index.css',
			[ 'wp-components' ],
			$assets['version']
		);

		wp_enqueue_script(
			$this->add_prefix( 'script' ),
			$this->get_plugin_url( self::PLUGIN_SLUG ) . '/build/index.js',
			$assets['dependencies'],
			$assets['version'],
			true
		);
	}

	/**
	 * Register custom endpoint.
	 */
	public function register_rest_api(): void {
		register_rest_route(
			$this->get_api_namespace(),
			'options',
			[
				'methods'             => WP_REST_Server::READABLE,
				'callback'            => [ $this, 'readable_api' ],
				'permission_callback' => fn () => current_user_can( 'manage_options' ),
			],
		);

		register_rest_route(
			$this->get_api_namespace(),
			'update',
			[
				'methods'             => WP_REST_Server::EDITABLE,
				'callback'            => [ $this, 'editable_api' ],
				'permission_callback' => fn () => current_user_can( 'manage_options' ),
			]
		);
	}

	/**
	 * Custom endpoint for read.
	 */
	public function readable_api(): WP_REST_Response {
		$options = get_option( $this->add_prefix( 'options' ) );
		return new WP_REST_Response( $options, 200 );
	}

	/**
	 * Custom endpoint for update.
	 *
	 * @param WP_REST_Request $request WP_REST_Request object.
	 */
	public function editable_api( WP_REST_Request $request ): WP_REST_Response {
		$params      = $request->get_json_params();
		$jad_options = get_option( $this->add_prefix( 'options' ) );

		$parameters = [ 'plugin_enabled', 'admin_mode_enable', 'design_type', 'main_message', 'policy_page_url' ];

		if ( in_array( array_key_first( $params ), $parameters, true ) ) {
			$jad_options[ array_key_first( $params ) ] = $params[ array_key_first( $params ) ];
		} else {
			new WP_Error( 'invalid_key', __( 'Required key does not exist', 'jad-console' ), [ 'status' => 404 ] );
		}

		update_option( $this->add_prefix( 'options' ), $jad_options );

		return new WP_REST_Response( $params, 200 );
	}

	/**
	 * Settings page.
	 */
	public function settings_page(): void {
		echo '<div id="' . esc_attr( self::PLUGIN_SLUG . '-settings' ) . '"></div>';
	}
}
