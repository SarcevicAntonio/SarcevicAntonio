import { redirect } from '@sveltejs/kit'
export const GET = async ({ params }) => redirect(301, `/${params.slug}`)
