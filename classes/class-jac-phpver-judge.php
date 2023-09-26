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

	/**
	 * Show deactivate error message.
	 *
	 * @param string $project Project name.
	 * @param string $version PHP version.
	 *
	 * @return string[]
	 */
	public function deactivate_message( string $project, string $version ): array {
		$messages = [
			'header'  => sprintf(
				/* translators: 1: Plugin name */
				__( '[プラグインエラー] PHPのバージョンが古いため、%sは停止されました。', 'jad-console' ),
				$project,
			),
			'require' => sprintf(
				/* translators: 1: Plugin name 2: PHP version */
				__( '%1$sには、少なくともPHP%2$s以降が必要です。', 'jad-console' ),
				$project,
				$version,
			),
			'upgrade' => __( 'PHPをアップグレードしてください。', 'jad-console' ),
			'current' => __( '現在のPHPバージョン：', 'jad-console' ),
		];

		return $messages;
	}
}
