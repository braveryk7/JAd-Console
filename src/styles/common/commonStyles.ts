export const breakPoint = ( device: 'pc' | 'tablet' | 'sp' ) => {
	switch ( device ) {
		case 'pc':
			return '960px';
		case 'tablet':
			return '959px';
		case 'sp':
			return '428px';
	}
};
