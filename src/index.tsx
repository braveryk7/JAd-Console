import { apiType } from './types/apiType';
import { createContext, createRoot, useEffect, useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

import { SaveStatusSnackbar } from 'src/components/atoms/SaveStatusSnackbar';
import { Tab } from 'src/components/organisms/Tab';
import { useGetApi } from 'src/hooks/useGetApi';

import { apiContextType, noticeValueType } from 'src/types/contextType';

export const apiContext = createContext( {} as apiContextType );

const AdminPage = () => {
	const [ apiData, setApiData ] = useState< apiType | undefined >( undefined );
	const [ apiError, setApiError ] = useState( false );
	const [ noticeValue, setNoticeValue ] = useState< noticeValueType | undefined >( undefined );
	const [ noticeMessage, setNoticeMessage ] = useState( '' );
	const [ snackbarTimer, setSnackbarTimer ] = useState( 0 );

	useGetApi( 'options', setApiData, setApiError );

	useEffect( () => {
		if ( noticeValue ) {
			setSnackbarTimer(
				window.setTimeout( () => {
					setNoticeValue( undefined );
				}, 4000 )
			);
		}
	}, [ noticeValue ] );

	return (
		<div>
			<h1>{ __( 'JAd Console設定', 'jad-console' ) }</h1>
			{ noticeValue && (
				<SaveStatusSnackbar
					noticeValue={ noticeValue }
					noticeMessage={ noticeMessage }
				/>
			) }
			{ apiData && (
				<apiContext.Provider
					value={ {
						apiData,
						setApiData,
						setApiError,
						setNoticeValue,
						setNoticeMessage,
						snackbarTimer,
						setSnackbarTimer,
					} }
				>
					<Tab />
				</apiContext.Provider>
			) }
			{ apiError && <p>error</p> }
		</div>
	);
};

const root = createRoot( document.getElementById( 'jad-console-settings' ) as Element );
root.render( <AdminPage /> );
