import { css } from '@emotion/css';

export const AdPolicyNotifyWrapperStyle = css`
	position: fixed;
	bottom: 0;
	width: 100%;
	color: #fff;
	background-color: rgba( 26, 26, 26, 0.95 );
	z-index: 9999;
	padding-top: 15px;
	padding-bottom: 15px;
`;

export const AdPolicyNotifyContentStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 150px;

	@media screen and ( max-width: 768px ) {
		margin: 0px;
	}
`;

export const AdPolicyNotifyMessageStyle = css`
	width: 80%;
	text-align: center;
`;

export const AdPolicyNotifyPolicyUrlStyle = css`
	color: #fff;
`;

export const AdPolicyNotifyButtonWrapperStyle = css`
	width: 20%;
`;

export const AdPolicyNotifyButtonStyle = css`
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 10px;
`;

export const AdPolicyNotifyHiddenStyle = css`
	display: none;
`;
