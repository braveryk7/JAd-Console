import { css, cx } from '@emotion/css';

import { Snackbar } from '@wordpress/components';

import { SaveStatusSnackbarType } from 'src/types/ComponentsType';

export const SaveStatusSnackbar = ( props: SaveStatusSnackbarType ) => {
	const { noticeValue, noticeMessage } = props;

	const noticeValueColor = noticeValue && noticeValue === 'jad_success' ? '#00a32a' : '#d63638';

	const style = css`
		background-color: ${ noticeValueColor };
		animation-duration: 4s;
		animation-iteration-count: 5;
		animation-name: fade;
		position: fixed;
		right: 30px;
		top: 50px;

		@keyframes fade {
			0% {
				opacity: 0;
			}

			25% {
				opacity: 0.7;
			}

			75% {
				opacity: 0.7;
			}

			100% {
				opacity: 0;
			}
		}
	`;

	return (
		<Snackbar className={ cx( style, noticeValue ) }>{ noticeMessage }</Snackbar>
	);
};
