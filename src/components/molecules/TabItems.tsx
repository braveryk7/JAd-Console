import { __ } from '@wordpress/i18n';

import { Toggle } from 'src/components/atoms/Toggle';

import { TabItemsType } from 'src/types/ComponentsType';
import { itemKeyType } from 'src/types/apiType';

export const TabItems = ( props: TabItemsType ) => {
	const { id, title } = props;

	const getItems = () => {
		if ( id === 'policy' ) {
			const items: { name: itemKeyType, label: string }[] = [
				{ name: 'plugin_enabled', label: __( 'Use plugin', 'jad-console' ) },
				{ name: 'admin_mode_enable', label: __( 'Use admin mode', 'jad-console' ) },
				{ name: 'design_type', label: __( 'test', 'jad-console' ) },
				{ name: 'main_message', label: __( 'test', 'jad-console' ) },
				{ name: 'policy_page_url', label: __( 'test', 'jad-console' ) },
			];

			return items;
		}

		return undefined;
	};

	const items = getItems();

	return (
		<div className="jad-wrapper">
			<h3>{ title }</h3>
			{ items && (
				<div className="jad-item">
					{ items
						.filter( ( { name } ) => (
							name === 'plugin_enabled' || name === 'admin_mode_enable'
						) )
						.map( ( { name, label }, i ) => (
							<Toggle
								key={ i }
								itemKey={ name }
								label={ label }
							/>
						) ) }
				</div>
			) }
		</div>
	);
};
