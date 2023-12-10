import { Dispatch, SetStateAction } from 'react';

import apiFetch from '@wordpress/api-fetch';
import { useEffect } from '@wordpress/element';

import { endPointType } from 'src/types/apiType';

export const useGetApi = < T, >(
	endPoint: endPointType,
	stateFunc: Dispatch< SetStateAction< T | undefined > >,
	setApiError: Dispatch< SetStateAction< boolean > >,
) => {
	useEffect( () => {
		apiFetch< T >(
			{ path: `/jad-console/v1/${ endPoint }` }
		).then( ( response ) => {
			setApiError( false );
			stateFunc( response );
		} ).catch( () => {
			setApiError( true );
		} );
	}, [ endPoint, stateFunc, setApiError ] );
};
