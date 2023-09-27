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
	protected const PLUGIN_NAME = 'JAd Console';
}
