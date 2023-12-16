import { ChangeEvent } from 'react';

import { TokenItem } from '@wordpress/components/build-types/form-token-field/types';
import { useContext } from '@wordpress/element';

import { useSetApi } from 'src/hooks/useSetApi';
import { apiContext } from 'src/index';

import { apiType, itemCategoryType, itemKeyType } from 'src/types/apiType';

export const useChangeValue = ( itemCategory: itemCategoryType, itemKey: itemKeyType ) => {
	const { apiData, setApiData } = useContext( apiContext );

	const changeValue = (
		value: string | number | boolean | ( string|TokenItem )[] | ChangeEvent< HTMLInputElement >
	) => {
		const newItem: apiType = JSON.parse( JSON.stringify( { ...apiData } ) );

		if ( itemCategory === 'ad_policy_notify' ) {
			if (
				( itemKey === 'plugin_enabled' || itemKey === 'admin_mode_enable' ) &&
				typeof value === 'boolean'
			) {
				newItem[ itemCategory ][ itemKey ] = ! newItem[ itemCategory ][ itemKey ];
			} else if (
				(
					itemKey === 'main_message' ||
					itemKey === 'policy_page_url'
				) && typeof value === 'string'
			) {
				newItem[ itemCategory ][ itemKey ] = value;
			} else if ( itemKey === 'design_type' ) {
				newItem[ itemCategory ][ itemKey ] = value as Extract< apiType, 'design_type' >;
			}
		}

		setApiData( newItem );
	};

	useSetApi( itemKey, apiData );

	return { apiData, changeValue };
};
