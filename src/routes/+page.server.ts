import { error } from '@sveltejs/kit';


export const actions = {
	save: async ({ params, request }) => {
		try {
			console.log('save')
			const data = await request.formData();
			const updatedContent = data.get('updatedContent')
			console.log(updatedContent)
			return { success: true };
		} catch (error) {
			return {
				success: false,
				error: error instanceof Error ? error.message : 'An unknown error occurred'
			};
		}
	}
};
