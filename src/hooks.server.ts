import { redirect } from "@sveltejs/kit";


export async function handle({ event, resolve }) {

    const session = event.cookies.get('session');

    event.locals.user = session ? JSON.parse(session) : null;

    if (event.url.pathname.startsWith('/dashboard') && !event.locals.user) {
        throw redirect(302, '/login');
    }

    return resolve(event);
}