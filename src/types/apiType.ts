export type apiType = {
	plugin_enabled: boolean;
	admin_mode_enable: boolean;
	design_type: 'default';
	main_message: string;
	policy_page_url: string;
}

export type notifyApiType = Pick<apiType, 'design_type' | 'main_message' | 'policy_page_url'>;

export type itemKeyType = keyof apiType;

export type useSetApiType = {
	( itemKey: itemKeyType, value: apiType | undefined ): void;
}

export type endPointType = 'options' | 'notify'
