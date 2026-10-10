export async function load({ locals }) {
	return {
		theme: locals.theme,
		page_name: locals.page_name,
	}
}
