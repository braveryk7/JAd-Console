import { TabPanel } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { TabItems } from 'src/components/molecules/TabItems';

export const Tab = () => {
	const tabs = [
		{ name: 'policy', title: __( 'Ad Policy', 'jad-console' ), className: 'tab' },
	];

	return (
		<TabPanel activeClass="active-tab" className="settings-tabs" tabs={ tabs }>
			{ ( tab ) => <TabItems id={ tab.name } title={ tab.title } /> }
		</TabPanel>
	);
};
