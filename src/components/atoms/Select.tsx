import { css } from '@emotion/css';

import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import { useChangeValue } from 'src/hooks/useChangeValue';

import { SelectControlType } from 'src/types/ComponentsType';

const style = css`
	width: 25%;
`;

export const Select = ( props: SelectControlType ) => {
	const { itemCategory, itemKey, label } = props;
	const { apiData, changeValue } = useChangeValue( itemCategory, itemKey );

	const items = [
		{ label: __( 'Default', 'jad-console' ), value: 'default' },
	];

	return (
		<>
			{ apiData &&
				<section>
					<SelectControl
						value={ apiData[ itemCategory ][ itemKey ] }
						label={ label }
						options={ items }
						onChange={ changeValue }
						className={ style }
					/>
				</section>
			}
		</>
	);
};
