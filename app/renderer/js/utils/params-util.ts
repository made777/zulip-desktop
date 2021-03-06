/* eslint-disable unicorn/prevent-abbreviations */

// This util function returns the page params if they're present else returns null
export function isPageParams(): null | object {
	let webpageParams = null;
	try {
		// eslint-disable-next-line no-undef
		webpageParams = page_params;
	} catch (_) {
		webpageParams = null;
	}
	return webpageParams;
}
