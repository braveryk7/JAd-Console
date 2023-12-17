
import {
	AdPolicyNotifyButtonStyle,
	AdPolicyNotifyButtonWrapperStyle,
	AdPolicyNotifyContentStyle,
	AdPolicyNotifyHiddenStyle,
	AdPolicyNotifyMessageStyle,
	AdPolicyNotifyPolicyUrlStyle,
	AdPolicyNotifyWrapperStyle,
} from 'src/ad-policy-notify/styles/ShowNotifyStyle';
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
