import { css } from '@emotion/css';

import { propsType } from 'src/ad-policy-notify/types/propsType';

export const MinimizerToggle = ( props: propsType ) => {
	const { notifyHidden, setNotifyHidden } = props;
	return (
		<button
			className={ AdPolicyNotifyOpenButtonStyle }
			onClick={ () => setNotifyHidden( ! notifyHidden ) }
		>
			[ AD ]
		</button>
	);
};

const AdPolicyNotifyOpenButtonStyle = css`
	position: fixed;
	bottom: 30px;
	left: 20px;
	font-size: 1rem;
	color: #fff;
	background-color: #1a1a1a;
	height: 80px;
	width: 80px;
	border-radius: 50%;
	border: none;
	cursor: pointer;
	box-shadow: 0 0 3px 1px rgba( 0, 0, 0, 0.5 );
`;
