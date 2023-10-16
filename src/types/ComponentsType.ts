import { itemKeyType } from 'src/types/apiType';

export type TabItemsType = {
	id: string,
	title: string
}

export type TogglePropsType = {
	itemKey: itemKeyType,
	label: string,
}
