import { createRoot, useState } from '@wordpress/element';

import { MinimizerToggle } from 'src/ad-policy-notify/components/MinimizerToggle';
import { ShowNotify } from 'src/ad-policy-notify/components/ShowNotify';
import { useGetApi } from 'src/hooks/useGetApi';

import { notifyApiType } from 'src/types/apiType';

export const AdPolicyNotify = () => {
	const [ apiData, setApiData ] = useState< notifyApiType | undefined >( undefined );
	const [ apiError, setApiError ] = useState( false );
	const [ notifyHidden, setNotifyHidden ] = useState( true );

	useGetApi( 'notify', setApiData, setApiError );

	return (
		<>
			{ ! apiError && apiData && ( notifyHidden ? (
				<MinimizerToggle
					notifyHidden={ notifyHidden }
					setNotifyHidden={ setNotifyHidden }
					apiData={ apiData }
				/>
			) : (
				<ShowNotify
					notifyHidden={ notifyHidden }
					setNotifyHidden={ setNotifyHidden }
					apiData={ apiData }
				/>
			) ) }
		</>
	);
};

const root = createRoot( document.getElementById( 'jad-console-ad-policy-notify' ) as Element );
root.render( <AdPolicyNotify /> );
