<script lang="ts">
    import { superForm } from "sveltekit-superforms";
    import SuperDebug from "sveltekit-superforms";
    import { counter } from "$lib/stores/counter.store";

    let { data } = $props();

    const { form, errors, enhance } = superForm(data.loginForm);
    
</script>

<div
    class="flex flex-col border rounded-xl shadow-md p-4 border-gray-300 gap-4"
>
    <h1>Login</h1>
    <h1>Counter: {$counter}</h1>
    <button onclick={() => counter.update((c) => c + 1)}>Increment</button>
</div>

<div class="flex flex-col items-center justify-center h-screen">
    <div
        class="flex flex-col items-center justify-center border rounded-xl shadow-md p-4 border-gray-300 gap-4"
    >
        <h1 class="text-2xl font-semibold">Login</h1>
        <form
            method="POST"
            use:enhance
            class="flex flex-col gap-2"
            action="?/login"
        >
            <input
                type="text"
                name="email"
                bind:value={$form.email}
                class="border-2 border-gray-300 rounded-md p-2"
            />
            <p class="text-red-500 text-sm">{$errors?.email?.[0]}</p>
            <input
                type="password"
                name="password"
                bind:value={$form.password}
                class="border-2 border-gray-300 rounded-md p-2"
            />
            <p class="text-red-500">{$errors?.password?.[0]}</p>
            <button
                type="submit"
                class="bg-blue-500 text-white rounded-md p-2 cursor-pointer"
                >Login</button
            >
        </form>
    </div>
    <!-- <SuperDebug data={$form} /> -->
</div>
