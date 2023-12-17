import { ToggleControl } from '@wordpress/components';

import { useChangeValue } from 'src/hooks/useChangeValue';

import { TogglePropsType } from 'src/types/ComponentsType';

export const Toggle = ( props: TogglePropsType ) => {
	const { itemCategory, itemKey, label } = props;
	const { apiData, changeValue } = useChangeValue( itemCategory, itemKey );

	return (
		<>
			{ apiData &&
				<section>
					<ToggleControl
						label={ label }
						checked={ apiData[ itemCategory ][ itemKey ] as boolean }
						onChange={ ( value ) => {
							changeValue( value );
						} }
					/>
				</section>
			}
		</>
	);
};
