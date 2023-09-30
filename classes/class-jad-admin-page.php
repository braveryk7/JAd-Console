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
		add_filter( 'plugin_action_links_' . plugin_basename( $this->get_plugin_path() ), [ $this, 'add_settings_links' ] );
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
	 * Settings page.
	 */
	public function settings_page(): void {
		echo '<div id="' . esc_attr( self::PLUGIN_SLUG . '-settings' ) . '"></div>';
	}
}
