import { Dispatch, SetStateAction } from 'react';

import { apiType } from 'src/types/apiType';

export type noticeValueType = 'jad_success' | 'jad_error';

export type apiContextType = {
	apiData: apiType | undefined;
	setApiData: Dispatch< SetStateAction< apiType | undefined > >;
	setApiError: Dispatch< SetStateAction< boolean > >;
	setNoticeValue: Dispatch< SetStateAction< noticeValueType | undefined > >;
	setNoticeMessage: Dispatch< SetStateAction< string > >;
	snackbarTimer: number;
	setSnackbarTimer: Dispatch< SetStateAction< number > >;
};
