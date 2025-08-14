import { loginSchema } from "$lib/schemas/login";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { fail, redirect } from "@sveltejs/kit";
const mockUser = {
    email: 'admin@curso.com',
    password: '12345678'
};
export const load = async () => {
    return { loginForm: await superValidate(zod(loginSchema)) };
};


export const actions = {
    login: async ({ request, cookies }) => {
        const form = await superValidate(request, zod(loginSchema));
        if (!form.valid) {
            return fail(400, { form });
        }
        // ACA YO VOY PEGANDOLE AL BACKEND, EL BACKEND ME AUTORIZA Y ME ENVIA UN TOKEN DE REGRSO Y ESE TOKEN YO LO PONGO EN LA COOKIE
        if (form.data.email === mockUser.email && form.data.password === mockUser.password) {
            cookies.set('session', JSON.stringify({ email: form.data.email }), {
                path: '/',
                httpOnly: true,
                sameSite: 'strict',
                maxAge: 60 * 60 // 1 hora
            });
            throw redirect(302, '/dashboard');
        }
        return fail(400, {
            error: 'Credenciales inválidas'
        });


    }
}