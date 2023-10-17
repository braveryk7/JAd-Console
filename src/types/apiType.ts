export type apiType = {
	plugin_enabled: boolean;
	admin_mode_enable: boolean;
	design_type: string;
	main_message: string;
	policy_page_url: string;
}

export type itemKeyType = keyof apiType;

export type useSetApiType = {
	( itemKey: itemKeyType, value: apiType | undefined ): void;
}
