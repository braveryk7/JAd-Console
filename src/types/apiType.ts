export type apiType = {
	ad_policy_notify: {
		plugin_enabled: boolean;
		admin_mode_enable: boolean;
		design_type: 'default';
		main_message: string;
		policy_page_url: string;
	}
}

export type itemCategoryType = keyof apiType;

export type notifyApiType =
	Pick<apiType['ad_policy_notify'], 'design_type' | 'main_message' | 'policy_page_url'>;

export type itemKeyType = keyof apiType['ad_policy_notify'];

export type useSetApiType = {
	( itemCategory: itemCategoryType, itemKey: itemKeyType, value: apiType | undefined ): void;
}

export type endPointType = 'options' | 'notify'
