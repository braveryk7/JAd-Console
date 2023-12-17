import { css } from '@emotion/css';

import { TextControl } from '@wordpress/components';

import { useChangeValue } from 'src/hooks/useChangeValue';

import { TextControlType } from 'src/types/ComponentsType';

const style = css`
	width: 50%;
`;

export const TextControlForm = ( props: TextControlType ) => {
	const { itemCategory, itemKey, label } = props;
	const { apiData, changeValue } = useChangeValue( itemCategory, itemKey );

	return (
		<>
			{ apiData &&
				<section>
					<TextControl
						className={ style }
						label={ label }
						value={ apiData[ itemCategory ][ itemKey ] as string }
						onChange={ ( value ) => {
							changeValue( value );
						} }
					/>
				</section>
			}
		</>
	);
};
