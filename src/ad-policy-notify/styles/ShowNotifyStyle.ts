import { css } from '@emotion/css';

import { breakPoint } from 'src/styles/common/commonStyles';

export const AdPolicyNotifyWrapperStyle = () => {
	return css`
		position: fixed;
		bottom: 0;
		width: 100%;
		color: #fff;
		background-color: rgba( 26, 26, 26, 0.95 );
		z-index: 9999;
		padding-bottom: 15px;

		@media screen and ( min-width: ${ breakPoint( 'pc' ) } ) {
			padding-top: 15px;
		}
	`;
};

export const AdPolicyNotifyContentStyle = () => {
	return css`
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		@media screen and ( min-width: ${ breakPoint( 'pc' ) } ) {
			margin: 0 150px;
		}
	`;
};

export const AdPolicyNotifyMessageStyle = () => {
	return css`
		text-align: center;

		@media screen and ( min-width: ${ breakPoint( 'pc' ) } ) {
			width: 80%;
		}

		@media screen and ( max-width: ${ breakPoint( 'sp' ) } ) {
			width: 90%;
		}
	`;
};

export const AdPolicyNotifyPolicyUrlStyle = () => {
	return css`
		color: #fff;
	`;
};

export const AdPolicyNotifyButtonWrapperStyle = () => {
	return css`
		@media screen and ( min-width: ${ breakPoint( 'pc' ) } ) {
			width: 20%;
		}
	`;
};

export const AdPolicyNotifyButtonStyle = () => {
	return css`
		padding: .7rem 4rem;
		background-color: rgba( 255, 255, 255, 1 );
		background-color: rgba( 165, 255, 201, 1 );
		box-sizing: border-box;
		border: none;
		outline: none;
		border-radius: .5rem;
		user-select: none;
		white-space: nowrap;
	`;
};

export const AdPolicyNotifyHiddenStyle = () => {
	return css`
		display: none;
	`;
};
