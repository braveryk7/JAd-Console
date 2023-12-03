import { Dispatch, SetStateAction } from 'react';

export type propsType = {
	notifyHidden: boolean,
	setNotifyHidden: Dispatch<SetStateAction< boolean > >
}
