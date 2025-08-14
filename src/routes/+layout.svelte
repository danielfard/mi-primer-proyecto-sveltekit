<script lang="ts">
	import "../app.css";
	import { counter, resetCounter } from "$lib/stores/counter.store";
	let { children } = $props();
</script>

<div class="flex flex-col items-center justify-center">
	<h1>Layout</h1>
	<h1>Counter: {$counter}</h1>
	<button onclick={resetCounter}>Reset</button>
</div>
{@render children()}
