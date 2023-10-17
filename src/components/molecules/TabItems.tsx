import { __ } from '@wordpress/i18n';

import { TextControlForm } from 'src/components/atoms/TextControlForm';
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
				{ name: 'main_message', label: __( 'Main message', 'jad-console' ) },
				{ name: 'policy_page_url', label: __( 'Policy page URL', 'jad-console' ) },
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
					{ items.map( ( { name, label }, i ) => {
						if ( name === 'plugin_enabled' || name === 'admin_mode_enable' ) {
							return (
								<Toggle
									key={ i }
									itemKey={ name }
									label={ label }
								/>
							);
						} else if ( name === 'main_message' || name === 'policy_page_url' ) {
							return (
								<TextControlForm
									key={ i }
									itemKey={ name }
									label={ label }
								/>
							);
						}
						return null;
					} ) }
				</div>
			) }
		</div>
	);
};
