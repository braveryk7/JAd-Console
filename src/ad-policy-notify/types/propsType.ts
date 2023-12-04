import { Dispatch, SetStateAction } from 'react';

import { notifyApiType } from 'src/types/apiType';

export type propsType = {
	notifyHidden: boolean,
	setNotifyHidden: Dispatch<SetStateAction< boolean > >
	apiData: notifyApiType
}
