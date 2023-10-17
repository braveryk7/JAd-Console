import { TextControl } from '@wordpress/components';

import { useChangeValue } from 'src/hooks/useChangeValue';

import { TextControlType } from 'src/types/ComponentsType';

export const TextControlForm = ( props: TextControlType ) => {
	const { itemKey, label } = props;
	const { apiData, changeValue } = useChangeValue( itemKey );

	return (
		<>
			{ apiData &&
				<section>
					<TextControl
						label={ label }
						value={ apiData[ itemKey ] as string }
						onChange={ ( value ) => {
							changeValue( value );
						} }
					/>
				</section>
			}
		</>
	);
};
