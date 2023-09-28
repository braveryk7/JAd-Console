<?php
/**
 * JAd Console base class.
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
 * JAd Console base class.
 */
class Jad_Base {
	protected const PREFIX      = 'jad';
	protected const PLUGIN_SLUG = 'jad-console';
	protected const PLUGIN_NAME = 'JAd Console';
	protected const PLUGIN_FILE = self::PLUGIN_SLUG . '.php';
	protected const VERSION     = '0.0.1';

	/**
	 * Return add prefix.
	 *
	 * @param string $value After prefix value.
	 */
	public static function add_prefix( string $value ): string {
		return self::PREFIX . '_' . $value;
	}

	/**
	 * Return plugin name.
	 * e.g. JAd Console
	 */
	public static function get_plugin_name(): string {
		return self::PLUGIN_NAME;
	}
}
