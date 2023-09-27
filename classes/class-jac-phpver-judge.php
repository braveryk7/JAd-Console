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
	 * Deactivate plugin & show deactivate massage.
	 *
	 * @param string $path Plugin path.
	 * @param string $project Project name.
	 * @param string $version PHP version.
	 * @param bool   $is_admin Admin page or not.
	 */
	public function deactivate( string $path, string $project, string $version, bool $is_admin = false ): void {
		require_once ABSPATH . 'wp-admin/includes/plugin.php';
		if ( is_plugin_active( plugin_basename( $path ) ) ) {
			if ( $is_admin ) {
				$messages = $this->deactivate_message( $project, $version );

				?>
				<div class="error">
					<p><?php echo esc_html( $messages['header'] ); ?></p>
					<p>
						<?php echo esc_html( $messages['require'] ); ?>
						<?php echo esc_html( $messages['upgrade'] ); ?>
					</p>
					<p>
						<?php echo esc_html( $messages['current'] ); ?>
						<?php echo PHP_VERSION; ?>
					</p>
				</div>
				<?php

			}
			deactivate_plugins( plugin_basename( $path ) );
		}
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
