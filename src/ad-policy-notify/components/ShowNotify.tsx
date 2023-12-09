import { css } from '@emotion/css';

import { propsType } from 'src/ad-policy-notify/types/propsType';

export const ShowNotify = ( props: propsType ) => {
	const { notifyHidden, setNotifyHidden, apiData } = props;

	const policyPage = () => {
		if ( apiData?.policy_page_url ) {
			const anchor =
				<a href={ apiData.policy_page_url } className={ AdPolicyNotifyPolicyUrlStyle }>
					広告ポリシー
				</a>;

			return (
				<>
					詳しくは{ anchor }をご覧ください。
				</>
			);
		}

		return null;
	};

	return (
		<div className={
			notifyHidden ? AdPolicyNotifyHiddenStyle : AdPolicyNotifyWrapperStyle
		}>
			<div className={ AdPolicyNotifyContentStyle }>
				<p className={ AdPolicyNotifyMessageStyle }>
					{ apiData?.main_message }
					{ policyPage() }
				</p>
				<div className={ AdPolicyNotifyButtonWrapperStyle }>
					<button
						className={ AdPolicyNotifyButtonStyle }
						onClick={ () => setNotifyHidden( ! notifyHidden ) }
					>
						同意する
					</button>
				</div>
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

const AdPolicyNotifyPolicyUrlStyle = css`
	color: #fff;
`;

const AdPolicyNotifyButtonWrapperStyle = css`
	width: 20%;
`;

const AdPolicyNotifyButtonStyle = css`
	padding: 10px 30px;
	background-color: #fff;
	border-radius: 10px;
`;

const AdPolicyNotifyHiddenStyle = css`
	display: none;
`;
