<?php
/**
 * Judgment PHP Version.
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
 * Judgment PHP Version.
 */
class Jac_Phpver_Judge {
	/**
	 * Judgment PHP version.
	 *
	 * @param string $version_received php version.
	 * @return bool
	 */
	public function judgment( string $version_received ): bool {
		return version_compare( PHP_VERSION, $version_received, '>=' ) ? true : false;
	}
}
