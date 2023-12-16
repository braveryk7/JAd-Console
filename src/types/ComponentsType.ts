import { itemCategoryType, itemKeyType } from 'src/types/apiType';
import { noticeValueType } from 'src/types/contextType';

export type TabItemsType = {
	id: string,
	title: string
}

export type TogglePropsType = {
	itemCategory: itemCategoryType,
	itemKey: itemKeyType,
	label: string,
}

export type TextControlType = {
	itemCategory: itemCategoryType,
	itemKey: Extract< itemKeyType, string >,
	label: string,
}

export type SelectControlType = {
	itemCategory: itemCategoryType,
	itemKey: Extract< itemKeyType, 'design_type' >,
	label: string,
}

export type SaveStatusSnackbarType = {
	noticeValue: noticeValueType | undefined,
	noticeMessage: string,
}
