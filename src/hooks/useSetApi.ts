import apiFetch from '@wordpress/api-fetch';
import { useContext, useEffect, useRef, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { apiContext } from 'src/index';

import { apiType, useSetApiType } from 'src/types/apiType';

export const useSetApi: useSetApiType = ( itemCategory, itemKey, value ) => {
	const [ currentValue, setCurrentValue ] = useState< apiType | undefined >( value );

	const {
		apiData,
		setNoticeValue,
		setNoticeMessage,
		snackbarTimer,
	} = useContext( apiContext );

	const isFirstRender = useRef( true );

	useEffect( () => {
		if ( isFirstRender.current ) {
			isFirstRender.current = false;
		} else if ( value && value !== currentValue ) {
			setNoticeValue( undefined );
			clearTimeout( snackbarTimer );
			setCurrentValue( value );

			apiFetch( {
				path: '/jad-console/v1/update',
				method: 'POST',
				data: {
					itemCategory,
					itemKey,
					value: value[ itemCategory ][ itemKey ],
				},
			} ).then( () => {
				setNoticeValue( 'jad_success' );
				setNoticeMessage( __( 'Success', 'jad-console' ) );
			} ).catch( () => {
				setNoticeValue( 'jad_error' );
				setNoticeMessage( __( 'Error', 'jad-console' ) );
			} );
		}
	}, [
		apiData,
		itemCategory,
		itemKey,
		value,
		setNoticeMessage,
		setNoticeValue,
		snackbarTimer,
		currentValue,
	] );
};
