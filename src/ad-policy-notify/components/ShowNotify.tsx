import { css } from '@emotion/css';

import { propsType } from 'src/ad-policy-notify/types/propsType';

export const ShowNotify = ( props: propsType ) => {
	const { notifyHidden, setNotifyHidden, apiData } = props;

	return (
		<div className={
			notifyHidden ? AdPolicyNotifyHiddenStyle : AdPolicyNotifyWrapperStyle
		}>
			<div className={ AdPolicyNotifyContentStyle }>
				<p className={ AdPolicyNotifyMessageStyle }>
					{ apiData?.main_message }
				</p>
				<div className={ AdPolicyNotifyButtonWrapperStyle }>
					<button
						className={ AdPolicyNotifyButtonStyle }
						onClick={ () => setNotifyHidden( ! notifyHidden ) }
					>
						同意する
					</button>
				</div>
				<p className={ AdPolicyNotifyAnnotationStyle }>
					※このメッセージは同意して頂いた場合、7日間非表示になります。
				</p>
			</div>
		</div>
	);
};

const AdPolicyNotifyWrapperStyle = css`
	position: fixed;
	bottom: 0;
	width: 100%;
	color: #fff;
	background-color: #1a1a1a;
	opacity: 0.95;
	z-index: 9999;
	padding-top: 15px;
	padding-bottom: 15px;
`;

const AdPolicyNotifyContentStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0 150px;

	@media screen and ( max-width: 768px ) {
		margin: 0px;
	}
`;

const AdPolicyNotifyMessageStyle = css`
	width: 80%;
	text-align: center;
`;

const AdPolicyNotifyButtonWrapperStyle = css`
	width: 20%;
`;

const AdPolicyNotifyButtonStyle = css`
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 10px;
`;

const AdPolicyNotifyAnnotationStyle = css`
	font-size: 0.8rem;
	flex-grow: 1;
	text-align: center;
`;

const AdPolicyNotifyHiddenStyle = css`
	display: none;
`;
