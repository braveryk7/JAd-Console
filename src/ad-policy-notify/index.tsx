import { createRoot, useState } from '@wordpress/element';

import { MinimizerToggle } from 'src/ad-policy-notify/components/MinimizerToggle';
import { ShowNotify } from 'src/ad-policy-notify/components/ShowNotify';

export const AdPolicyNotify = () => {
	const [ notifyHidden, setNotifyHidden ] = useState( true );

	return (
		<>
			{ notifyHidden ? (
				<MinimizerToggle
					notifyHidden={ notifyHidden }
					setNotifyHidden={ setNotifyHidden }
				/>
			) : (
				<ShowNotify
					notifyHidden={ notifyHidden }
					setNotifyHidden={ setNotifyHidden }
				/>
			) }
		</>
	);
};

const root = createRoot( document.getElementById( 'jad-console-ad-policy-notify' ) as Element );
root.render( <AdPolicyNotify /> );
