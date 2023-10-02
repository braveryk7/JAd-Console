import { createRoot } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const AdminPage = () => {
	return (
		<div>
			<h1>{ __( 'JAd Console設定', 'jad-console' ) }</h1>
		</div>
	);
};

const root = createRoot( document.getElementById( 'jad-console-settings' ) as Element );
root.render( <AdminPage /> );
