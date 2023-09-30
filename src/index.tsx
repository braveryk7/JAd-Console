import { render } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const AdminPage = () => {
	return (
		<div>
			<h1>{ __( 'JAd Console設定', 'jad-console' ) }</h1>
		</div>
	);
};

render( <AdminPage />, document.getElementById( 'jad-console-settings' ) );
